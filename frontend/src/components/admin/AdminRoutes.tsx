import { Route, Routes } from "react-router-dom";
import { Login } from "./Login";
import { AdminHome } from "./AdminHome";
import useAuthentication  from "../../hooks/useAutentication";
import PrivateRoute from "../PrivateRoutes";
import { AdminAdd } from "./AdminAdd";
import { RecoveryPassword } from "./RecoveryPassword";
import { PasswordRecovered } from "./PasswordRecovered";

export const AdminRoutes = () => {
  const { isAuthenticated } = useAuthentication();
  
  return (
    <Routes>
      <Route index element={<Login />}/>
      <Route path="/*" element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
        <Route index element={<AdminHome />} />
        <Route path="home" element={<AdminHome/>}/>
        <Route path="add" element={<AdminAdd/>}/>
      </Route>
      <Route path="recoveryPassword/*" element={<PasswordRecovered/>}/>
      <Route path="recoveryPassword" element={<RecoveryPassword/>}/>

    </Routes>
  )
}
