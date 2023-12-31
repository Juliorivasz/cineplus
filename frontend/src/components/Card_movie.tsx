import { Link } from 'react-router-dom';
import '../assets/css/card_movie.css';
interface CardProps {
  id?: number;
  img?: string;
  title?: string;
  añoN?: string;
}

const routeImg = 'https://es.web.img3.acsta.net/pictures/15/12/04/10/48/099822.jpg'
export default function Card_movie({id, img=routeImg,title='DeadPool',añoN='2020'}:CardProps) {
  return (
    <>
    <div className="card" style={{width: '18rem', padding: '1rem'}}>
        <img src={img} className="card-img-top" alt={title} style={{width: '50%', margin: 'auto'}}/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{añoN}</p>
            <Link to={`/movie?${id}`} className="btn btn-dark">Ver mas</Link>
        </div>
    </div>
    </>
  )
}
