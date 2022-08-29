import React from 'react';
import './estilos/Registration.css'
import * as logoImg from './estilos/logo.png'

export const Registration = () => {

return (
    <div className='registration-back'>
        <div className='registration-form-div'>
            <div className='registration-page-logo-div'>
                <img alt='logo-img' src={logoImg.default} className='registration-page-logo' />
            </div>
            <form className='registration-form'>
                <div className='input-divider'>
                    <label className='email-input-label' htmlFor='e-mail'>introduzca su email de la empresa:</label>
                    <input className='email-input input-field' type='email' placeholder='ejemplo123@metrogas.com.do'/>
                </div>

                <div className='input-divider'>
                    <label className='password-input-label' htmlFor='password'>introduzca su contraseña:</label>
                    <input className='password-input input-field'  type='password'/>
                </div>

                <div className='input-divider'>
                    <label className='password-match-input-label' htmlFor='password-match'>confirme su contraseña:</label>
                    <input className='password-input input-field'  type='password'/>
                </div>

                <button type='submit' className='registration-btn'>entrar al sistema</button>
            </form>
        </div>
    </div>
)
};