import useGetContent from "../hooks/useGetContent";
import { useMovieId } from "../hooks/useMovieId";
import { MovieRelated } from "./MovieRelated";
import { Player } from "./Player";

export const ContentClient = () => {
  
  const {id, typeContent} = useMovieId()
  const { data } = useGetContent(typeContent, id);
  if (!data || Array.isArray(data)) {
    return <div style={{fontSize: "10rem", marginTop: "140px"}}>Loading...</div>; // Manejo de carga y estado nulo
  }
  const {title, image, year, gender, synopsis, cast, duration} = data;
  console.log(data)
  return (
    <main>
        <div className="mb-3" style={{maxWidth: "1900px", paddingRight: "50%"}}>
          <div className="row" style={{marginBottom: "3rem"}}>
            <div className="col-md-4">
              <img src={image} alt={title} className="img-fluid rounded-start" style={{width:"100%", height: "100%", objectFit: "cover"}}/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <p className="h1" style={{textAlign: "start"}}>{title}</p>
                <ul className="nav flex-column" style={{textAlign: "start"}}>
                    <li className="nav-item"><strong>Año: </strong> {year}</li>
                    <li className="nav-item"><strong>Genero: </strong>{gender}</li>
                    <li className="nav-item"><strong>Sinópsis: </strong>{synopsis}</li>
                    <li className="nav-item"><strong>Reparto: </strong>{cast}</li>
                    <li className="nav-item"><strong>Duracion: </strong>{duration} minutos</li>
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
