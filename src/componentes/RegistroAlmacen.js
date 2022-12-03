import React, { useState, useEffect, useRef } from "react";
import { usePath } from "./PathContext";
import PhoneInput from 'react-phone-input-2';
import * as logoType from './estilos/imagenes/11065.jpg';
import './estilos/registro.css';

export const RegistratroAlmacen = () => {

    // const path = usePath();
  
      /**Uso posible del efecto fetch abajo para traer información del API */
    //   useEffect( ()=> {
    //       const fetchApi = async () => {
    //       const request = await fetch(`${path}envasadora/all`);
    //       const json = await request.json();
    //       setEnvasadorasPulled(json);
    //       }
    //       fetchApi();
    //   }, []);
  
        const [input, setInput] = useState({
          nombre: '',
          calle: '',
          numero: 0,
          ciudad: '',
          pais: '',
          telefono: '',
          correo: ''
        });
  
        // const [telephoneN, setTel] = useState('');
  
        // const [error, setError] = useState({
        //   username: '',
        //   password: '',
        //   confirmPassword: ''
        // })

        const onInputChange = e => {
          const { name, value } = e.target;
          setInput(prev => ({
            ...prev,
            [name]: value
          }));
        }
  
        // const validateInput = e => {
        //   let { name, value } = e.target;
        //   setError(prev => {
        //     const stateObj = { ...prev, [name]: "" };
  
        //     switch (name) {
        //       case "username":
        //         if (!value) {
        //           stateObj[name] = "Favor introducir su nombre.";
        //         }
        //         break;
  
        //       case "password":
        //         if (!value) {
        //           stateObj[name] = "Favor introducir contraseña.";
        //         } else if (input.confirmPassword && value !== input.confirmPassword) {
        //           stateObj["confirmPassword"] = "La contraseña y la Confirmación no coinciden.";
        //         } else {
        //           stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
        //         }
        //         break;
  
        //       case "confirmPassword":
        //         if (!value) {
        //           stateObj[name] = "Favor confirme su contraseña.";
        //         } else if (input.password && value !== input.password) {
        //           stateObj[name] = "La contraseña y la Confirmación no coinciden.";
        //         }
        //         break;
      
        //       default:
        //         break;
        //     }
      
        //     return stateObj;
        //   });
        // }
  
        const handleSubmit = (e) => {
          e.preventDefault();
        };
  
        return (
          <div className="registration-back">
              <div className='registration-form-div'>
                  <div className="registration-header">
                      <h1 className="registration-header-h1">Registro de almacén</h1>
                  </div>
                  <div className="band"></div>
                  <div className="maine">
                    <form className='registration-form' onSubmit={handleSubmit}>
                        <div className='input-divider'>
                            <label className='nombre-input-label' htmlFor='nombre'>nombre:</label>
                            <input
                            type="text"
                            className='input-field'
                            name="nombre"
                            value={input.username}
                            onChange={onInputChange}
                            required></input>
                        </div>
  
                        <div className='input-divider'>
                            <label className='nombre-input-label' htmlFor='nombre'>calle:</label>
                            <input
                            type="text"
                            className='input-field'
                            name="calle"
                            onChange={onInputChange}
                            required></input>
                        </div>
  
                        <div className='input-divider'>
                            <label className='nombre-input-label' htmlFor='nombre'>número telefónico:</label>
                            <PhoneInput
                            inputStyle={{width: '100%', 'height': '4vmin'}}
                            inputProps={{
                                required: true,
                              }}
                            country={'do'}
                            onlyCountries={['do']}
                            onChange={(newValue) => setInput( prev => ({
                                    ...prev,
                                    telefono: newValue
                                })
                            )}
                            />
  
                        </div>
  
                        <div className='input-divider'>
                            <label className='nombre-input-label' htmlFor='password'>ciudad:</label>
                            <input
                            type="password"
                            className='input-field'
                            name="ciudad"
                            onChange={onInputChange}
                            required></input>
                        </div>
  
                        <input type="hidden" /*value={Will come from the API call }*/ name="email" />
  
                        <div className='input-divider'>
                            <label className='nombre-input-label' htmlFor='password'>pais:</label>
                            <input
                            type="password"
                            className='input-field'
                            name="pais"
                            onChange={onInputChange}
                            required></input>
                        </div>
                        <div className='input-divider select-div'>
                            <label className='nombre-input-label' htmlFor='select'>correo:</label>
                            <input
                            type="password"
                            className='input-field'
                            name="pais"
                            onChange={onInputChange}
                            required></input>
                        </div>
                        {input.password === input.confirmPassword ? <button  className='registration-btn'>enviar</button> : <button  className='registration-btn no' disabled>enviar</button>}
                    </form>
                    <div className="image-div">
                      <img className="img-logotype almacen-jpg" src={logoType.default} alt='logo-typo' />
                    </div>
                  </div>
              </div>
          </div>
        );
  };