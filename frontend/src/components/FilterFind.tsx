import { Link, useLocation } from "react-router-dom"
import { useState, useEffect} from 'react';

export const FilterFind = () => {
    // nombre de la ruta sin la barra /
    const stateContent = useLocation().pathname.replace('/', '');
    // estado inicial de la ruta
    const [contentState, setContentState] = useState('/');
    // renderizada de nuevo si el nombre de la ruta cambia
    useEffect(() => {
        setContentState(stateContent)
    }, [stateContent])
  return (
        <nav className="nav nav-underline justify-content-center">
            <Link className={`nav-link ${contentState=='estrenos' ? 'active' : ''}` } to={"/estrenos"}>Inicio</Link>
            <Link className={`nav-link ${contentState=='movies' ? 'active' : ''}` } to={"/movies"}>Peliculas</Link>
            <Link className={`nav-link ${contentState=='series' ? 'active' : ''}` } to={"/series"}>Series</Link>
            <Link className={`nav-link ${contentState=='anime' ? 'active' : ''}`} to={"/anime"}>Anime</Link>
            <div className="genero__container">
            <label>Género:</label>
            <select className="form-select" aria-label="Default select example">
                <option value="Todos">Todos</option>
                <option value="Acción">Acción</option>
                <option value="Drama">Drama</option>
            </select>
            </div>
            <div className="year__container">
            <label>Año:</label>
            <select className="form-select" aria-label="Default select example">
                <option value={0}>Todos</option>
                <option value={2022}>2022</option>
                <option value={2021}>2021</option>
            </select>
            </div>
        </nav>
  );
};


