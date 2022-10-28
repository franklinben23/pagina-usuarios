import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logUser } from '../redux/user/userInfo.js'

// mover hacia el folder principal.
import './estilos/Registration.css';
// ^
import * as logoImg from './estilos/imagenes/metrogas_logo.png';
import { usePath } from "./PathContext.js";

export const Login = () => {

    const pathHeroku = usePath();

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const request = await fetch(`${pathHeroku}usuario/login`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    usuario: email,
                    clave: password
                })
            });
            if(request.ok) {
                localStorage.setItem('Authenticated', true)
                const json = await request.json();
                console.log(json);// aqui se va a conectar con la tienda.
                dispatch(logUser(json));
                navigate('PaginaCuadre');

            } else {
                alert('Contraseña o correo incorrecto, favor revisar credenciales')
            }

        } catch (error) {
            alert('favor revisar su conexion o conactar soporte')
        }

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
                    <Link to='/Mailer' className="registration-link"> No está registrad@? Comienze el registro aquí. </Link>
                </div>
            </div>
        </div>
    )
};