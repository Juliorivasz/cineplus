import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Home';
import Premieres from './Premieres';
import { Movies } from './Movies';
import { Anime } from './Anime';
import { Series } from './Series';
import { Movie } from './Movie';


export default function Main() {
  const navigate = useNavigate();
  
  const toggleNavigate = () => {
    navigate("/estrenos");
  }
  return (
    <>
    <Routes>
      <Route index element={<Home toggleNavigate={toggleNavigate}/>}></Route>
      <Route path={'estrenos'} element={<Premieres />}></Route>
      <Route path={'movies'} element={<Movies />}></Route>
      <Route path={'series'} element={<Series />}></Route>
      <Route path={'anime'} element={<Anime />}></Route>
      <Route path={'movie'} element={<Movie />}></Route>
      <Route path={'contactos'} element={<Premieres />}></Route>
    </Routes>
    </>
  )
}
