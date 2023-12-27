import { useState, ChangeEvent } from 'react';
import { useRecoveryPassword } from '../../hooks/useRecoveryPassword';

export const RecoveryPassword = () => {
    const [stateBtn, setStateBtn] = useState(true);
    const [email, setEmail] = useState('');
    const {recoveryPass} = useRecoveryPassword();

    // habilita el boton de envio del formulario
    const sendEmail = (e:ChangeEvent<HTMLInputElement>) => {
        if(e.target.value !== '') {
            setStateBtn(false);
            setEmail(e.target.value);
        }else {
            setStateBtn(true)
        }
    }

    // recuperar constraseña pasandole el email
    const recoveryEmail = async (e:React.FormEvent) =>{
        e.preventDefault();
        const data = await recoveryPass(email);
        console.log(data)
    }


  return (
    <main>
        <div style={{padding: '10%'}}>
            <div style={{ display: 'flex', justifyContent: 'center',background: 'darkgray',padding: '1rem', borderRadius: '1rem', boxShadow: '1rem 1rem 1rem -1rem', flexDirection: 'column'}}>
                <p className='h1 mb-3'>Recuperacion de Contraseña</p>
                <form onSubmit={recoveryEmail} className="form row g-3 align-items-center" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', textAlign: 'start'}}>
                    <label htmlFor="recoveryEmail" className="form-label">Introduce tu Correo Electronico: </label>
                    <div><input type="email" id="recoveryEmail" className="form-control" autoFocus autoComplete="email" onChange={sendEmail}/></div>
                    <div className="col-auto"><button type="submit" className="mt-3" disabled={stateBtn}>Enviar Email</button></div>
                </form>
            </div>
        </div>
    </main>
  )
}
