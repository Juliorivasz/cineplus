import '../assets/css/home.css';
import { CSSTransition } from 'react-transition-group';

interface homeProps {
  visible: boolean;
  toggleVisible: (value:boolean) => void;
}

export default function Home({visible, toggleVisible}:homeProps) {

  const viewHome = () => {
    toggleVisible(!visible)
  }

  return (
    <>
    <CSSTransition
      in={visible}
      timeout={1000}
      classNames="fade"
      mountOnEnter
      unmountOnExit
      >
      <section className="home">
          <h1 className="home__title">Bienvenido a CinePlus+</h1>
          <h3 className="home__slogan">“¡Tus películas favoritas y más, todo en un solo lugar!”</h3>
          <button className="btn btn-dark home__btn" onClick={viewHome}>
                  Ver Peliculas
          </button>
      </section>
    </CSSTransition>
    </>
  )
}
