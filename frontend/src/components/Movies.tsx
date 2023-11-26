import '../assets/css/Movies.css';
import Card_movie from './Card_movie';

export default function Movies() {
  return (
    <>
      <section className="movies">
          <Card_movie />
          <Card_movie 
          img='https://es.web.img2.acsta.net/pictures/19/03/26/17/22/0896830.jpg'
          title='Avengers: End Game'
          añoN='2022'/>
      </section>
    </>
  )
}
