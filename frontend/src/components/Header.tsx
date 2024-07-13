import { Link, useNavigate } from "react-router-dom";
import useAuthentication from "../hooks/useAutentication";
import { SearchContent } from "./SearchContent";
// import { useState } from 'react';

export default function Header() {
  const {isAuthenticated, logout, adminBtn} = useAuthentication();
  
  const navigate = useNavigate();
  
  const logouted = async () => {
    await logout();
    location.href = '/admin';
  }

  const logIn = () => {
    navigate('/admin')
  }

  return (
    <>
      <header>
        <nav className="navbar navbar-dark bg-dark fixed-top">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">CinePlus+</Link>
            {isAuthenticated && location.pathname.includes("/admin") ? 
            null: 
            (<SearchContent/>)}
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end text-bg-dark" tabIndex={-1} id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">CinePlus+</h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to={isAuthenticated ? "/admin/home" : "/"}>Inicio</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contactos">Soporte</Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded={false}>
                      Tipo de contenido
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark">
                      <li><Link className="dropdown-item" to={isAuthenticated ? "/admin/premieres" : "/estrenos"}>Estrenos</Link></li>
                      <li><Link className="dropdown-item" to={isAuthenticated ? "/admin/movies" : "/movies"}>Peliculas</Link></li>
                      <li><Link className="dropdown-item" to={isAuthenticated ? "/admin/series" :"/series"}>Series</Link></li>
                      <li><Link className="dropdown-item" to={isAuthenticated ? "/admin/animes" :"/anime"}>Anime</Link></li>
                    </ul>
                  </li>
                </ul>
                <div className="mt-3">
                  <button className="btn btn-success" onClick={isAuthenticated ? logouted : logIn}>{adminBtn}</button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
