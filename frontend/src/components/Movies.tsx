import '../assets/css/Movies.css';
import { CSSTransition } from 'react-transition-group';
import Card_movie from './Card_movie';
import { useState } from 'react';

interface homeProps {
  visible: boolean;
}

export default function Movies({visible}:homeProps) {

  const [status, setStatus] = useState(false)

  setTimeout(() => {setStatus(visible), 1000})

  return (
    <>
    <CSSTransition
      in={status}
      timeout={1000}
      classNames="view"
      mountOnEnter
      unmountOnExit
    >
      <section className="movies">
          <Card_movie />
          <Card_movie 
          img='https://es.web.img2.acsta.net/pictures/19/03/26/17/22/0896830.jpg'
          title='Avengers: End Game'
          añoN='2022'/>
      </section>
    </CSSTransition>
    </>
  )
}
