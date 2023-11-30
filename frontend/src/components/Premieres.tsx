import '../assets/css/contents.css';
import Card_movie from './Card_movie';
import { FilterFind } from './FilterFind';
import { Pagination } from './Pagination';
import { useState } from 'react';

export default function Premieres() {
  const [currentPage, setcurrentPage] = useState(1);

  const handlePage = (newCurrentPage:number) => {
    setcurrentPage(newCurrentPage);
  }

  return (
    <>
    <main>
    <FilterFind />
      <p className="title__content h1">Ultimos estrenos</p>
      <section className="contents">
          <Card_movie />
          <Card_movie 
          img='https://es.web.img2.acsta.net/pictures/19/03/26/17/22/0896830.jpg'
          title='Avengers: End Game'
          añoN='2022'/>
          <Card_movie />
          <Card_movie />
          <Card_movie />
          <Card_movie />
          <Card_movie />
          <Card_movie />
          <Card_movie />
      </section>
      <Pagination sizeContent={50} currentPage={currentPage} handlePage={handlePage}/>
    </main>
    </>
  )
}
