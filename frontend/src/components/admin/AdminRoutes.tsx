import { Route, Routes } from "react-router-dom";
import { Login } from "./Login";
import { AdminHome } from "./AdminHome";
import useAuthentication  from "../../hooks/useAutentication";
import PrivateRoute from "../PrivateRoutes";
import { AdminPremiers } from "./AdminPremiers";
import { RecoveryPassword } from "./RecoveryPassword";
import { PasswordRecovered } from "./PasswordRecovered";
import { AdminMovies } from "./AdminMovies";
import { AdminSeries } from "./AdminSeries";
import { AdminAnimes } from "./AdminAnimes";
import { Add } from "./actions/Add";
import { Remove } from "./actions/Remove";
import { Update } from "./actions/Update";

export const AdminRoutes = () => {
  const { isAuthenticated } = useAuthentication();

  // nombre de la ubicacion del contenido
  const ubi = location.pathname.split("/")[2];
  
  return (
    <Routes>
      <Route index element={<Login />}/>
      <Route path="/*" element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
        <Route index element={<AdminHome />} />
        <Route path="home" element={<AdminHome/>}/>
        <Route path="premier" element={<AdminPremiers/>}/>
        <Route path={`${ubi}/add`} element={<Add typeContent={ubi}/>}/>
        <Route path={`${ubi}/remove`} element={<Remove/>}/>
        <Route path={`${ubi}/update`} element={<Update/>}/>
        <Route path="movie" element={<AdminMovies/>}/>
        <Route path="serie" element={<AdminSeries/>}/>
        <Route path="anime" element={<AdminAnimes/>}/>
      </Route>
      <Route path="recoveryPassword/*" element={<PasswordRecovered/>}/>
      <Route path="recoveryPassword" element={<RecoveryPassword/>}/>

    </Routes>
  )
}
