import { Link } from "react-router-dom";
import { useRoute } from "../hooks/useRoute";

export const FilterFind = () => {
    const contentState = useRoute();    
  return (
        <nav className="nav nav-underline justify-content-center">
            <Link className={`nav-link ${contentState=='/estrenos' ? 'active disabled' : ''}` } to={"/estrenos"}>Inicio</Link>
            <Link className={`nav-link ${contentState=='/movies' ? 'active disabled' : ''}` } to={"/movies"}>Peliculas</Link>
            <Link className={`nav-link ${contentState=='/series' ? 'active disabled' : ''}` } to={"/series"}>Series</Link>
            <Link className={`nav-link ${contentState=='/anime' ? 'active disabled' : ''}`} to={"/anime"}>Anime</Link>
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


