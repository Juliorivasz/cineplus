import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Home';
import Premieres from './Premieres';
import { ContentClient } from './ContentClient';

export default function Main() {
  const navigate = useNavigate();
  
  const toggleNavigate = () => {
    navigate("/estrenos");
  }
  return (
    <>
    <Routes>
      <Route index element={<Home toggleNavigate={toggleNavigate}/>}></Route>
      <Route path={'estrenos'} element={<Premieres typeContent='premieres'/>}></Route>
      <Route path={'movies'} element={<Premieres typeContent='movies'/>}></Route>
      <Route path={'content'} element={<ContentClient />}></Route>
      <Route path={'series'} element={<Premieres typeContent='series'/>}></Route>
      <Route path={'anime'} element={<Premieres typeContent='animes'/>}></Route>
      <Route path={'contactos'} element={<Premieres typeContent='premieres'/>}></Route>
    </Routes>
    </>
  )
}
