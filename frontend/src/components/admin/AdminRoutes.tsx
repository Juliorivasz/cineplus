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

export const AdminRoutes = () => {
  const { isAuthenticated } = useAuthentication();
  
  return (
    <Routes>
      <Route index element={<Login />}/>
      <Route path="/*" element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
        <Route index element={<AdminHome />} />
        <Route path="home" element={<AdminHome/>}/>
        <Route path="premiers" element={<AdminPremiers/>}/>
        <Route path="movies" element={<AdminMovies/>}/>
        <Route path="series" element={<AdminSeries/>}/>
        <Route path="animes" element={<AdminAnimes/>}/>
      </Route>
      <Route path="recoveryPassword/*" element={<PasswordRecovered/>}/>
      <Route path="recoveryPassword" element={<RecoveryPassword/>}/>

    </Routes>
  )
}
