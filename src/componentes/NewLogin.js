import  React, { useState }  from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { logUser } from '../redux/user/userInfo.js'
import { usePath } from "./PathContext.js";
import * as faIcon from 'react-icons/fa';
import * as topImg from './estilos/imagenes/login_head.png';
import * as topLogo from './estilos/imagenes/logo_metrogas_blanco.png';
import * as logoCortado from './estilos/imagenes/logo_metrogas_cortado.png';
import './estilos/newLogin.css';

export const NewLogin = () => {

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
                    "usuario": email,
                    "clave": password
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
                console.log(email, password)
            }

        } catch (error) {
            alert('favor revisar su conexion o conactar soporte')
        }

        setPassword('');
        setEmail('');
    };

    return (
        <div className='login-cont'>
            <img src={topLogo.default} alt='top-logo' className='top-logo' />
            <div className='login-inner'>
                <div className='top-login-part'>
                    <p className='top-text'>Bienvenido a</p>
                    <img src={logoCortado.default} alt='logo-cortado' className='logo-cortado' />
                    <img src={topImg.default} alt='login-img' className='login-img' />
                </div>
                <div className='bottom-login-part'>
                    <form className='login-form' onSubmit={handleSubmit}>
                        <div className='div-in'>
                            <input type='text' className='login-input email-input' placeholder='e-mail' value={email} onChange={(e)=> {setEmail(e.target.value)}} required/>
                            {email === '' ? <faIcon.FaUser size={20} color='#5ba273' className='fa-usetr'></faIcon.FaUser> : ''}
                        </div>
                        <div className='div-in'>
                            <input type='password' className='login-input password-input' placeholder='contraseña' value={password} onChange={(e)=> {setPassword(e.target.value)}} required/>
                            {password === '' ? <faIcon.FaLock size={20} color='#5ba273' className='fa-usetr'></faIcon.FaLock> : ''}
                        </div>
                        <button type='submit' className='login-btn'>Iniciar sesión</button>
                    </form>
                    <Link to='/Mailer' className="registration-link"> Crear Cuenta. </Link>
                </div>
            </div>
        </div>
    );
};