import '../assets/css/Movies.css';
import Card_movie from './Card_movie';
import { FilterFind } from './filterFind';
import { Pagination } from './pagination';

export default function Movies() {
  return (
    <>
    <FilterFind />
      <p className="title__estreno h1">Ultimos estrenos</p>
      <section className="movies">
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
      </section>
      <Pagination/>
    </>
  )
}
