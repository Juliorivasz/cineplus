import { useState } from "react";
import { useRecoveryPassword } from "../../hooks/useRecoveryPassword";

interface iconAlert {
  danger: string;
  warning: string;
  success: string;
  primary: string;
  [key:string]: string;
}

export const PasswordRecovered = () => {
  const [seePassword, setSeePassword] = useState(true);
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [alert, setAlert] = useState(false);
  const [typeAlert, setTypeAlert] = useState('');
  const [iconAlert, setIconAlert] = useState<iconAlert>({
      'danger': '#exclamation-triangle-fill',
      'warning': '#exclamation-triangle-fill',
      'success': '#check-circle-fill',
      'primary': '#info-fill'
  })

  
  const openDialog = () => {
    setAlert(true);
  };

  const closeDialog = () => {
    setAlert(false);
  };

  const {resetPass} = useRecoveryPassword();

  // cambia el estado para ver la contraseña
  const handleSeePassword = () => {
    return setSeePassword(!seePassword);
  }

  const resetPassword = async (e:React.FormEvent) => {
    e.preventDefault();
    const data =  await resetPass(newPassword);

    if(data === 'Contraseña restablecida con éxito') {
      setTypeAlert('success');
      setMessage(data);
      openDialog()
      setTimeout(() => {
        location.href = '/admin';
      }, 2000)
    }else if(data == 'Token expirado') {
      setTypeAlert('danger');
      setMessage('El link de recuperacion esta vencido, vuelve a solicitarlo')
      openDialog()
    }

  }

  return (
    <main>
        <div style={{background: 'darkgrey', borderRadius: '1rem', padding: '3rem', marginTop: '10rem'}}>
            <p className="h1">Cambio de contraseña</p>
            <form onSubmit={resetPassword} style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                <div className="m-4 position-relative" style={{textAlign: 'start', width: '50%'}}>
                    <label htmlFor="newPassword" className="form-label">Introduce la nueva contraseña:</label>
                    <input type={seePassword ? "password" : "text" } className="form-control" id="newPassword" onChange={(e) => setNewPassword(e.target.value)} autoFocus/>
                    {seePassword ? <i className="bi bi-eye-slash viewPassword" onClick={handleSeePassword}></i> : <i className="bi bi-eye viewPassword" onClick={handleSeePassword}></i>}
                </div>
                <button className="btn btn-success" type="submit">Guardar</button>
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
          <div className={`alert alert-${typeAlert} d-flex align-items-center`} role="alert" style={{position:'relative'}}>
            <svg className="bi flex-shrink-0 me-2" role="img" aria-label="Danger:" style={{width: '30px', height: '60px'}}><use xlinkHref={iconAlert[typeAlert]}/></svg>
            <div>
              {message}
            </div>
            <button type="button" className="btn-close" aria-label="Close" onClick={closeDialog} style={{position: 'absolute',top: '5%',right: '2.5%'}}></button>
          </div>
        </dialog>
    </main>
  )
}
