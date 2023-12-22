import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Home from './components/Home';
import Premieres from './components/Premieres';
import { Movies } from './components/Movies';
import { Series } from './components/Series';
import { Anime } from './components/Anime';
import { Movie } from './components/Movie';
import { AdminRoutes } from './components/admin/AdminRoutes';


function App() {

  // const {isAuthenticated} = useAuthentication();
  
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<Main/>}>
          <Route index element={<Home toggleNavigate={()=>{}} />} />
          <Route path="estrenos" element={<Premieres />} />
          <Route path="movies" element={<Movies />} />
          <Route path="series" element={<Series />} />
          <Route path="anime" element={<Anime />} />
          <Route path="movie" element={<Movie />} />
          <Route path="contactos" element={<Premieres />} />
        </Route>
        <Route path="/admin/*" element={<AdminRoutes/>}>
        </Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
