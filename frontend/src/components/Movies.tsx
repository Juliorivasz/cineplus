import '../assets/css/Premieres.css';
import { useState } from 'react';
import { FilterFind } from './FilterFind';
import { Pagination } from './Pagination';
import Card_movie from './Card_movie';


export const Movies = () => {
  const [currentPage, setcurrentPage] = useState(1);

  const handlePage = (newCurrentPage:number) => {
    setcurrentPage(newCurrentPage);
  }
  return (
    <>
    <main>
    <FilterFind/>
    <p className="title__premiere h1">Peliculas</p>
    <section className='premieres'>
      <Card_movie 
        img='https://es.web.img2.acsta.net/pictures/19/03/26/17/22/0896830.jpg'
        title='Avengers: End Game'
        añoN='2022'
      />
      <Card_movie 
        img='https://i.pinimg.com/236x/e9/5e/ec/e95eec98bf697cd4bb6a6434a912f137.jpg'
        title='Justice League'
        añoN='2020'
      />
      <Card_movie 
        img='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/book-cover-or-movie-film-theatre-flyer-template-3e8b0cdb88840bd790fae4213a013335_screen.jpg?ts=1636966442'
        title='Header'
        añoN='2017'
      />
      <Card_movie 
        img='https://www.laguiadelvaron.com/wp-content/uploads/2019/07/portadas-pel%C3%ADculas-iguales-www.laguiadelvaron-15.jpg'
        title='Aladin'
        añoN='2021'
      />
      <Card_movie 
        img='https://www.laguiadelvaron.com/wp-content/uploads/2019/07/portadas-pel%C3%ADculas-iguales-www.laguiadelvaron-16.jpg'
        title='Dark Phoenix'
        añoN='2020'
      />
      <Card_movie 
        img='https://colonfilm.com/wp-content/uploads/2021/04/bohemian-rhapsody-poster.webp'
        title='Bohemian'
        añoN='2019'
      />
      <Card_movie 
        img='https://images.cdn3.buscalibre.com/fit-in/360x360/ef/e1/efe107f049754f01a60fe3e6033ef4d6.jpg'
        title='Yo antes de ti'
        añoN='2022'
      />
      <Card_movie />
    </section>
    <Pagination sizeContent={50} currentPage={currentPage} handlePage={handlePage}/>
    </main>
    </>
  )
}
