import '../assets/css/contents.css';
import useGetContent from '../hooks/useGetContent';
import Card_movie from './Card_movie';
import { FilterFind } from './FilterFind';
import { Pagination } from './Pagination';
import { useState } from 'react';
import { TypeContent } from './admin/AdminContents';

export default function Premieres({typeContent}:TypeContent) {
  const [currentPage, setcurrentPage] = useState(1);
  const itemsPerPage = 9;

  const {data} = useGetContent(typeContent);

  const handlePage = (newCurrentPage:number) => {
    setcurrentPage(newCurrentPage);
  }

  // Calculate the indices of the items to show
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);

  return (
    <>
    <main>
      <FilterFind />
      <p className="title__content h1">Ultimos estrenos</p>
      <section className="contents">
        {paginatedData.map((premiere, index) => (
          <Card_movie
            key={index} 
            content={premiere} />
        ))}
      </section>
      <Pagination 
        sizeContent={Math.ceil(data.length / itemsPerPage)} 
        currentPage={currentPage} 
        handlePage={handlePage} />
    </main>
    </>
  )
}
