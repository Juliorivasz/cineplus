import '../assets/css/home.css';
import { useRef } from 'react';

interface homeProps {
  toggleNavigate: () => void;
}

export default function Home({toggleNavigate}:homeProps) {

  const homeRef = useRef(null);
  return (
    <>
      <section className="home" ref={homeRef} >
          <h1 className="home__title">Bienvenido a CinePlus+</h1>
          <h3 className="home__slogan">“¡Tus películas favoritas y más, todo en un solo lugar!”</h3>
          <button className="btn btn-dark home__btn" onClick={toggleNavigate}>
                  Ver Peliculas
          </button>
      </section>
    </>
  )
}
