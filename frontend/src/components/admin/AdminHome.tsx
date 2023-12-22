import { useNavigate } from "react-router-dom"
import useAuthentication from "../../hooks/useAutentication";

export const AdminHome = () => {
  const navigate = useNavigate();

  const add = () => {
    navigate(`/admin/add`);
  }
  const {logout} = useAuthentication()

  const logouted = async () => {
    await logout();
    navigate('/admin');
  }
  
  return (
    <div>
      <h1>AdminHome</h1>
      <button onClick={add}>adminAdd</button>
      <button onClick={logouted}>logout</button>
    </div>
  )
}
