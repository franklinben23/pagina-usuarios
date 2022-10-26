import React, {useState, useEffect} from 'react';

// mover hacia el folder principal.
import './estilos/Registration.css';
import * as logoImg from './estilos/imagenes/metrogas_logo.png';
import { usePath } from './PathContext';

export const RegistrationMailer = () => {

   const [mail, setMail] = useState('');
   const [validMail, setValidMail] = useState(false);

   const EMAIL_REGEX = 	 /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(metrogas|rilix)+(?:\.[a-zA-Z0-9-]+)*$/;

   const path = usePath();

   useEffect(() => {
    const okMail = EMAIL_REGEX.test(mail);
    setValidMail(okMail);
    // eslint-disable-next-line
   }, [mail]);

   const sendMail = async (e) => {
        e.preventDefault();
        console.log('It has been sent');
        const getMail = await fetch(`${path}sendmail`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                recipient: mail,//checkear el resto de fields en el swagger
            })
        });
        const getMailParsed = await getMail.json();
        const requestStatus = getMail.status;
        if (requestStatus === 200) {
            console.log('It has succesfully been received');
            console.log(getMailParsed)
        }

   };


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
                {validMail ? <button type='submit' className='registration-btn' onClick={sendMail}>enviar al correo</button> : <span  className='registration-btn-no'> por favor inserte un correo de la empresa y válido</span>}
    
            </form>
        </div>
    </div>
)
};