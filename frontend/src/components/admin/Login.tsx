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
  const [message, setMessage] = useState('');
  const [alert, setAlert] = useState(false);

  
  const openDialog = () => {
    setAlert(true);
  };

  const closeDialog = () => {
    setAlert(false);
  };

  // cambia el estado para ver la contraseña
  const handleSeePassword = () => {
    return setSeePassword(!seePassword);
  }
  
  // peticion para logear
  const {login, isAuthenticated} = useAuthentication();
  
  // envio del formulario
  const loginAccount = async (event:React.FormEvent) => {
    event.preventDefault();
    const loggedIn = await login(email, password);
    if(loggedIn == true) {
      location.href = '/admin/home';
      localStorage.setItem('rememberS', JSON.stringify(checkMe))
    }else {
      setMessage(loggedIn)
      openDialog()
    }
  }

  // checkbox
  const handleCheckbox = () => {
    setCheckMe(!checkMe)
  }

  useEffect(() => {
    const session = localStorage.getItem('rememberS');
    const stored = JSON.parse(session ?? 'null');
    if (stored || isAuthenticated) {
      setCheckMe(stored);
      location.href = '/admin/home'
    }
  }, [isAuthenticated,navigate]);

  return (
    <>
    <main>
      <div className="container__form">
        <div className="image__login">
          <img src="https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQZTSzc0fBuje232kABFZdaSaNc7r7P_4ct7x9P7LNjCoW4Q87i4n6pJy4czOJ6h2YmvMT2u6d-l59DXyVF4f5gJCVp_McGeaiEG84Y-SOKUmg9pV99DnDu5tNFxe7M4pqDLBOyniE9O2M-mrNfhpKZR4.jpg?r=a3d" alt="estreno" />
        </div>
        <form className="login__form" onSubmit={loginAccount}>
          <div className="mb-3">
            <label htmlFor="loginEmail" className="form-label">Email:</label>
            <input type="email" className="form-control" id="loginEmail" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)}/>
            <span id="emailHelp" className="form-text" style={{display: "none"}}>We'll never share your email with anyone else.</span>
          </div>
          <div className="mb-3 position-relative">
            <label htmlFor="loginPassword" className="form-label">Password:</label>
            <input type={seePassword ? "password" : "text" } className="form-control" id="loginPassword" onChange={(e) => setPassword(e.target.value)}/>
            {seePassword ? <i className="bi bi-eye-slash viewPassword" onClick={handleSeePassword}></i> : <i className="bi bi-eye viewPassword" onClick={handleSeePassword}></i>}
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="CheckMe" checked={checkMe} onChange={handleCheckbox}/>
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
          <Link to={"recoveryPassword"} style={{display: "flex", marginTop: "1rem", width: "fit-content", color: "black"}}>Did you forget your password ?</Link>
        </form>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
        <symbol id="check-circle-fill" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
        </symbol>
        <symbol id="info-fill" viewBox="0 0 16 16">
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
        </symbol>
        <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </symbol>
      </svg>
      <dialog open={alert} onClose={closeDialog} style={{top: '30%', backgroundColor: 'transparent', border: 'none'}}>
        <div className="alert alert-danger d-flex align-items-center" role="alert" style={{position:'relative'}}>
          <svg className="bi flex-shrink-0 me-2" role="img" aria-label="Danger:" style={{width: '30px', height: '60px'}}><use xlinkHref="#exclamation-triangle-fill"/></svg>
          <div>
            {message}
          </div>
          <button type="button" className="btn-close" aria-label="Close" onClick={closeDialog} style={{position: 'absolute',top: '5%',right: '2.5%'}}></button>
        </div>
      </dialog>
    </main>
    </>
  )
}
