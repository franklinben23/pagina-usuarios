import React, {useState, useEffect} from 'react';

// mover hacia el folder principal.
import './estilos/Registration.css';
import * as logoImg from './estilos/logo.png';

export const RegistrationMailer = () => {

   const [mail, setMail] = useState('');
   const [validMail, setValidMail] = useState(false);

   const EMAIL_REGEX = 	 /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(metrogas|rilix)+(?:\.[a-zA-Z0-9-]+)*$/;

   useEffect(() => {
    const okMail = EMAIL_REGEX.test(mail);
    setValidMail(okMail);
   }, [mail]);

return (
    <div className='registration-back'>
        <div className='registration-form-div'>
            <div className='registration-page-logo-div'>
                <img alt='logo-img' src={logoImg.default} className='registration-page-logo' />
            </div>
            <form className='registration-form'>
                <div className='input-divider'>
                    <label className='nombre-input-label' htmlFor='e-mail'>introduzca su email de la empresa para comenzar el registro:</label>
                    <input className='email-input input-field' type='email' placeholder='ejemplo123@metrogas.com.do' onChange={(e)=> setMail(e.target.value)} required/>
                </div>
                {validMail ? <button type='submit' className='registration-btn'>enviar al correo</button> : <span  className='registration-btn-no'> por favor inserte un correo de la empresa y válido</span>}
    
            </form>
        </div>
    </div>
)
};