import React, { useState } from "react";

// mover hacia el folder principal.
import './estilos/Registration.css';
// ^
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import * as logoImg from './estilos/logo.png';

export const Registration = () => {
    const [input, setInput] = useState({
        username: '',
        lastname: '',
        password: '',
        confirmPassword: ''
      });

      const [telephoneN, setTel] = useState('');
    
      const [error, setError] = useState({
        username: '',
        password: '',
        confirmPassword: ''
      })
    
      const onInputChange = e => {
        const { name, value } = e.target;
        setInput(prev => ({
          ...prev,
          [name]: value
        }));
        validateInput(e);
      }

      const validateInput = e => {
        let { name, value } = e.target;
        setError(prev => {
          const stateObj = { ...prev, [name]: "" };
    
          switch (name) {
            case "username":
              if (!value) {
                stateObj[name] = "Favor introducir su nombre.";
              }
              break;
    
            case "password":
              if (!value) {
                stateObj[name] = "Favor introducir contraseña.";
              } else if (input.confirmPassword && value !== input.confirmPassword) {
                stateObj["confirmPassword"] = "La contraseña y la Confirmación no coinciden.";
              } else {
                stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
              }
              break;
    
            case "confirmPassword":
              if (!value) {
                stateObj[name] = "Favor confirme su contraseña.";
              } else if (input.password && value !== input.password) {
                stateObj[name] = "La contraseña y la Confirmación no coinciden.";
              }
              break;
    
            default:
              break;
          }
    
          return stateObj;
        });
      }

      const handleSubmit = (e) => {
        e.preventDefault();
      };
    
      return (
        <div className="registration-back">
            <div className='registration-form-div'>
                <div className='registration-page-logo-div'>
                    <img alt='logo-img' src={logoImg.default} className='registration-page-logo' />
                </div>
                <div className="registration-header">
                    <h1 className="registration-header-h1"> Formulario de Registro</h1>
                </div>
            <form className='registration-form' onSubmit={handleSubmit}>
        
                <div className='input-divider'>
                    <label className='nombre-input-label' htmlFor='nombre'>introduzca su nombre:</label>
                    <input
                    type="text"
                    className='input-field'
                    name="username"
                    value={input.username}
                    onChange={onInputChange}
                    required
                    onBlur={validateInput}></input>
                </div>

                <div className='input-divider'>
                    <label className='nombre-input-label' htmlFor='nombre'>introduzca su apellido:</label>
                    <input
                    type="text"
                    className='input-field'
                    name="lastname"
                    value={input.lastname}
                    onChange={onInputChange}
                    required
                    onBlur={validateInput}></input>
                </div>

                <div className='input-divider'>
                    <label className='nombre-input-label' htmlFor='nombre'>introduzca su número telefónico:</label>
                    <PhoneInput
                    inputProps={{
                        required: true,
                      }}
                    country={'do'}
                    onlyCountries={['do']}
                    onChange={(newValue) => setTel(newValue)}
                    />

                </div>
        
                <div className='input-divider'>
                    <label className='nombre-input-label' htmlFor='password'>introduzca su contraseña:</label>
                    <input
                    type="password"
                    className='input-field'
                    name="password"
                    value={input.password}
                    onChange={onInputChange}
                    required
                    onBlur={validateInput}></input>
                </div>

                <input type="hidden" /*value={Will come from the API call }*/ name="email" />

                <div className='input-divider'>
                    <label className='nombre-input-label' htmlFor='password'>confirme su contraseña:</label>
                    <input
                    type="password"
                    className='input-field'
                    name="confirmPassword"
                    value={input.confirmPassword}
                    onChange={onInputChange}
                    required
                    onBlur={validateInput}></input>
                    {error.confirmPassword && <span className='err'>{error.confirmPassword}</span>}
                </div>
                {input.password === input.confirmPassword ? <button  className='registration-btn'>enviar</button> : <button  className='registration-btn no' disabled>enviar</button>}
            </form>
            </div>
        </div>
      );
};