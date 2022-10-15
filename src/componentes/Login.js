import React, { useState } from "react";
import { Link } from "react-router-dom";

// mover hacia el folder principal.
import './estilos/Registration.css';
// ^
import * as logoImg from './estilos/imagenes/metrogas_logo.png';

export const Login = () => {

    {/**La validacion funcionara con un usestate que enviara una request para validar los keys del correo antes de que cargue la forma, se chequeara con el body del response, y se llenara el field de email con lo que contenga el body*/}

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        //aquí es que se conectaría con el API
        e.preventDefault();
        setPassword('');
        setEmail('');
    };

    return (
        <div className='registration-back'>
            <div className='registration-form-div'>
                <div className='registration-page-logo-div'>
                    <img alt='logo-img' src={logoImg.default} className='registration-page-logo' />
                </div>
                <div className="registration-header">
                    <h1 className="registration-header-h1"> Login</h1>
                </div>
                <form className='registration-form' onSubmit={handleSubmit}>
                    <div className='input-divider'>
                        <label className='nombre-input-label' htmlFor='e-mail'>introduzca su email:</label>
                        <input className='email-input input-field' type='email' value={email} placeholder='ejemplo123@metrogas.com.do' onChange={(e)=> setEmail(e.target.value)} required/>
                    </div>
                    <div className='input-divider'>
                        <label className='nombre-input-label' htmlFor='password'>introduzca su contraseña:</label>
                        <input className='email-input input-field' type='password' value={password} onChange={(e)=> setPassword(e.target.value)} required/>
                    </div>
                    <button type='submit' className='registration-btn'>Login</button>

                </form>

                <div className="form-register">
                    <Link to='Mailer' className="registration-link"> No está registrad@? Comienze el registro aquí. </Link>
                </div>
            </div>
        </div>
    )
};