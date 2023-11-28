
export const FilterFind = () => {

  return (
        <nav className="nav nav-underline justify-content-center">
            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
            <a className="nav-link" href="#">Peliculas</a>
            <a className="nav-link" href="#">Series</a>
            <a className="nav-link" href="#">Anime</a>
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


