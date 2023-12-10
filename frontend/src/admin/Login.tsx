import { Link } from 'react-router-dom';
import '../assets/css/login.css';

export const Login = () => {
  return (
    <>
    <main>
      <div className="container__form">
        <div className="image__login">
          <img src="https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQZTSzc0fBuje232kABFZdaSaNc7r7P_4ct7x9P7LNjCoW4Q87i4n6pJy4czOJ6h2YmvMT2u6d-l59DXyVF4f5gJCVp_McGeaiEG84Y-SOKUmg9pV99DnDu5tNFxe7M4pqDLBOyniE9O2M-mrNfhpKZR4.jpg?r=a3d" alt="estreno" />
        </div>
        <form className="login__form">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email:</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <span id="emailHelp" className="form-text" style={{display: "none"}}>We'll never share your email with anyone else.</span>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password:</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
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
