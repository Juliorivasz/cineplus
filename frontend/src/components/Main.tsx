import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Home';
import Premieres from './Premieres';
import { Movies } from './Movies';


export default function Main() {
  const navigate = useNavigate();
  
  const toggleNavigate = () => {
    navigate("/estrenos");
  }

  return (
    <>
    <Routes>
      <Route path={'/'} element={<Home toggleNavigate={toggleNavigate}/>}></Route>
      <Route path={'/estrenos'} element={<Premieres />}></Route>
      <Route path={'/movies'} element={<Movies />}></Route>
      <Route path={'/series'} element={<Premieres />}></Route>
      <Route path={'/anime'} element={<Premieres />}></Route>
      <Route path={'/contactos'} element={<Premieres />}></Route>
    </Routes>
    </>
  )
}
