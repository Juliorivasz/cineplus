import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { AdminRoutes } from './components/admin/AdminRoutes';


function App() {
  
  return (
    <>
      <Header />
        <Routes>
          <Route path="*" element={<Main/>}>
          </Route>
          <Route path="/admin/*" element={<AdminRoutes/>}>
          </Route>
        </Routes>
      <Footer />
    </>
  )
}

export default App
