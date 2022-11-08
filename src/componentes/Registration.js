import React, { useState, useEffect, useRef } from "react";
import { usePath } from "./PathContext";
import Multiselect from 'multiselect-react-dropdown';
import PhoneInput from 'react-phone-input-2';
import './estilos/registro.css';
import 'react-phone-input-2/lib/style.css';


export const Registration = () => {

  const path = usePath();

    /**Uso posible del efecto fetch abajo para traer información del API */
    useEffect( ()=> {
        const fetchApi = async () => {
        const request = await fetch(`${path}envasadora/all`);
        const json = await request.json();
        setEnvasadorasPulled(json);
        }
        fetchApi();
    }, []);

        const [envasadorasPulled, setEnvasadorasPulled] = useState([]);
        const [envSelected, setEnvselected] = useState([]);
        const multiselectRef = useRef();

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

      const getItems = () => {
        const items = multiselectRef.current.getSelectedItems();
        setEnvselected(items);
        console.log(items);
     };

      return (
        <div className="registration-back">
            <div className='registration-form-div'>
                <div className="registration-header">
                    <h1 className="registration-header-h1">Registro de usuario</h1>
                </div>
                <div className="band"></div>
                <div className="maine">
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
                          inputStyle={{width: '100%', 'height': '4vmin'}}
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
                      <div className='input-divider select-div'>
                          <label className='nombre-input-label' htmlFor='select'>seleccione su(s) envasadoras:</label>
                          <Multiselect
                          options={envasadorasPulled}
                          singleSelect
                          placeholder='seleccione'
                          displayValue="envasadoraNombre"
                          ref={multiselectRef}
                          onSelect={getItems}
                          onRemove={getItems}
                          style={{
                              chips: {
                                background: 'green'
                              },
                              multiselectContainer: {
                                color: 'orange',
                                'width': '100%'
                              },
                              searchBox: {
                                border: '1px solid green',
                                'borderRadius': '5px',
                                'width': '100%'
                              }
                            }}
                          />
                      </div>
                      {input.password === input.confirmPassword ? <button  className='registration-btn'>enviar</button> : <button  className='registration-btn no' disabled>enviar</button>}
                  </form>
                  <div className="image-div"></div>
                </div>
            </div>
        </div>
      );
};