import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Home';
import Estrenos from './Estrenos';
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
      <Route path={'/estrenos'} element={<Estrenos />}></Route>
      <Route path={'/movies'} element={<Movies />}></Route>
      <Route path={'/series'} element={<Estrenos />}></Route>
      <Route path={'/anime'} element={<Estrenos />}></Route>
      <Route path={'/contactos'} element={<Estrenos />}></Route>
    </Routes>
    </>
  )
}
