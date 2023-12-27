import { useState } from "react";
import { useRecoveryPassword } from "../../hooks/useRecoveryPassword";


export const PasswordRecovered = () => {
  const [seePassword, setSeePassword] = useState(true);
  const [newPassword, setNewPassword] = useState('');
  const {resetPass} = useRecoveryPassword();

  // cambia el estado para ver la contraseña
  const handleSeePassword = () => {
    return setSeePassword(!seePassword);
  }

  const resetPassword = async (e:React.FormEvent) => {
    e.preventDefault();
    const data =  await resetPass(newPassword);

    if(data === 'Contraseña restablecida con éxito') {
        location.href = '/admin';
    }

  }

  return (
    <main>
        <div style={{background: 'darkgrey', borderRadius: '1rem', padding: '3rem', marginTop: '10rem'}}>
            <p className="h1">Cambio de contraseña</p>
            <form onSubmit={resetPassword} style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                <div className="m-4 position-relative" style={{textAlign: 'start', width: '50%'}}>
                    <label htmlFor="newPassword" className="form-label">New Password:</label>
                    <input type={seePassword ? "password" : "text" } className="form-control" id="newPassword" onChange={(e) => setNewPassword(e.target.value)} autoFocus/>
                    {seePassword ? <i className="bi bi-eye-slash viewPassword" onClick={handleSeePassword}></i> : <i className="bi bi-eye viewPassword" onClick={handleSeePassword}></i>}
                </div>
                <button className="btn btn-success" type="submit">Guardar</button>
            </form>
        </div>
    </main>
  )
}
