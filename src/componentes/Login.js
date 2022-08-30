import React, { useState } from "react";
import { Link } from "react-router-dom";

// mover hacia el folder principal.
import './estilos/Registration.css';
import * as logoImg from './estilos/logo.png';

export const Login = () => {

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    return (
        <div className='registration-back'>
            <div className='registration-form-div'>
                <div className='registration-page-logo-div'>
                    <img alt='logo-img' src={logoImg.default} className='registration-page-logo' />
                </div>
                <div className="registration-header">
                    <h1 className="registration-header-h1"> Login</h1>
                </div>
                <form className='registration-form'>
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
                    <Link to='Registration' className="registration-link"> No está registrad@? Comienze el registro aquí. </Link>
                </div>
            </div>
        </div>
    )
};