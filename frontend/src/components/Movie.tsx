import { useMovieId } from "../hooks/useMovieId";
import { MovieRelated } from "./MovieRelated";
import { Player } from "./Player";

const movieProps =  {
    title: 'Avengers: End Game',
    image: 'https://es.web.img2.acsta.net/pictures/19/03/26/17/22/0896830.jpg',
    year: '2022',
    gender: 'Accion, ciencia ficcion',
    synopsis: 'Los vengadores aparecen para salvar el mundo de tanos un villano genocida, que solo busca la paz en su ideologia',
    cast: 'robert jr, steve rogers, wanda, peter parker',
    duration: '190min',
}

export const Movie = () => {
  useMovieId()
  const {title, image, year, gender, synopsis, cast, duration} = movieProps;
  return (
    <main>
        <div className="mb-3" style={{maxWidth: "1900px", paddingRight: "50%"}}>
          <div className="row">
            <div className="col-md-4" style={{marginBottom: "3rem"}}>
              <img src={image} alt={title} className="img-fluid rounded-start"/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <p className="h1">{title}</p>
                <ul className="nav flex-column" style={{textAlign: "start", margin: "3rem 0"}}>
                    <li className="nav-item"><strong>Año: </strong> {year}</li>
                    <li className="nav-item"><strong>Genero: </strong>{gender}</li>
                    <li className="nav-item"><strong>Sinópsis: </strong>{synopsis}</li>
                    <li className="nav-item"><strong>Reparto: </strong>{cast}</li>
                    <li className="nav-item"><strong>Duracion: </strong>{duration}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Player/>
        <MovieRelated/>
    </main>
  )
}
