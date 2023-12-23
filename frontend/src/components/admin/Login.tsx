import { Link, useNavigate } from 'react-router-dom';
import '../../assets/css/login.css';
import { useEffect, useState } from 'react';
import useAuthentication from '../../hooks/useAutentication';

export const Login = () => {
  const navigate = useNavigate();

  // estado para ver la contraseña
  const [seePassword, setSeePassword] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkMe, setCheckMe] = useState(false);

  
  // cambia el estado para ver la contraseña
  const handleSeePassword = () => {
    return setSeePassword(!seePassword);
  }
  
  // peticion para logear
  const {login, isAuthenticated} = useAuthentication();
  
  // envio del formulario
  const loginAccount = async (event:React.FormEvent<HTMLDivElement>) => {
    event.preventDefault();
    await login(email, password);
    navigate('/admin/home')
    localStorage.setItem('rememberS', JSON.stringify(checkMe))
  }

  // checkbox
  const handleCheckbox = () => {
    setCheckMe(!checkMe)
  }

  useEffect(() => {
    const session = localStorage.getItem('rememberS');
    const stored = JSON.parse(session ?? 'null');
    if (stored && isAuthenticated) {
      setCheckMe(stored);
      navigate('/admin/home')
    }
  }, [isAuthenticated,navigate]);

  return (
    <>
    <main>
      <div className="container__form" onSubmit={loginAccount}>
        <div className="image__login">
          <img src="https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQZTSzc0fBuje232kABFZdaSaNc7r7P_4ct7x9P7LNjCoW4Q87i4n6pJy4czOJ6h2YmvMT2u6d-l59DXyVF4f5gJCVp_McGeaiEG84Y-SOKUmg9pV99DnDu5tNFxe7M4pqDLBOyniE9O2M-mrNfhpKZR4.jpg?r=a3d" alt="estreno" />
        </div>
        <form className="login__form">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email:</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)}/>
            <span id="emailHelp" className="form-text" style={{display: "none"}}>We'll never share your email with anyone else.</span>
          </div>
          <div className="mb-3 position-relative">
            <label htmlFor="exampleInputPassword1" className="form-label">Password:</label>
            <input type={seePassword ? "password" : "text" } className="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)}/>
            {seePassword ? <i className="bi bi-eye-slash viewPassword" onClick={handleSeePassword}></i> : <i className="bi bi-eye viewPassword" onClick={handleSeePassword}></i>}
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="CheckMe" checked={checkMe} onChange={handleCheckbox}/>
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
          <Link to={"/recoveryPassword"} style={{display: "flex", marginTop: "1rem", width: "fit-content", color: "black"}}>Did you forget your password ?</Link>
        </form>
      </div>
    </main>
    </>
  )
}
