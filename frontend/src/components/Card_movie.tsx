import { Link } from 'react-router-dom';
import '../assets/css/card_movie.css';
import { Content } from './FolderList';
interface CardProps {
  content: Content
}

export default function Card_movie({content}:CardProps) {

  const {_id, title, image, year, } = content;


  return (
    <>
    <div className="card" style={{width: '18rem', padding: '0rem', margin: "0.7rem"}}>
        <img src={image} className="card-img-top" alt={title} style={{width: '100%', margin: 'auto', flex:"1 1 auto", objectFit: "cover"}}/>
        <div className="card-body" style={{flex: "0 0 auto"}}>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{year}</p>
            <Link to={`/movie?${_id}`} className="btn btn-dark">Ver mas</Link>
        </div>
    </div>
    </>
  )
}
