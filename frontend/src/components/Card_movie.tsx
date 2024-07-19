import {  useNavigate } from 'react-router-dom';
import '../assets/css/card_movie.css';
import { Content } from './FolderList';
interface CardProps {
  content: Content
}

export default function Card_movie({content}:CardProps) {

  const navigate = useNavigate();

  const {_id, title, image, year, typeContent} = content;

  const viewContentDetail = () => {
    navigate(`/content?${_id}-${typeContent}`);
  }


  return (
    <>
    <div className="card" style={{width: '15rem', padding: '0rem', margin: "0.7rem", maxHeight: "20rem", overflow: "hidden"}} onClick={viewContentDetail}>
        <img src={image} className="card-img-top" alt={title} style={{width: '100%', margin: 'auto', flex:"1 1 auto", objectFit: "cover"}}/>
        <div className="card-body" style={{transform: "translateY(100%)", opacity: "0", flex: "0 0 auto", color: "#fff", position: "absolute", bottom: "0", width: "100%", background: "transparent", transition: 'all .3s ease-in-out'}}>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{year}</p>
            <button className="btn btn-dark">Ver mas</button>
        </div>
    </div>
    </>
  )
}
