import React, { useRef, useState, useEffect } from "react";

// mover hacia el folder principal.
import './estilos/envasadoraReg.css';
// ^
import Multiselect from 'multiselect-react-dropdown';

export const EnvasadoraReg = () => {

    const pathHeroku = 'https://cuadre-diario-planta.herokuapp.com/';
    const pathLocal = 'http://10.1.105.205:8080/webapp.metrogas/';

    const multiselectRef = useRef();
    const [bancosSelected, setBancosSelected] = useState([]);
    const [bancosPulled, setBancosPull] = useState([]);

    const [input, setInput] = useState({
        nombreEnv: '',
        tanqueEnv: '',
        minTanqueEnv: '',
        maxTanqueEnv: '',
        metrosEnv: '',
        manguerasEnv: '',
        direccionEnv: '',
    });

    const handleSelect = (e) => {
        const { name, value } = e.target;
        setInput(prev => ({
          ...prev,
          [name]: value
        }));
    };

    useEffect(() => {
        const fetchBancos = async () => {
            const bancosFetched = await fetch(`${pathLocal}/banco/all`);
            const bancosJson = await bancosFetched.json();
            const bancosStatus = bancosFetched.status;
            setBancosPull(bancosJson);
            console.log(bancosStatus);
        };
        fetchBancos();
    }, [])

    const getItems = () => {
        const items = multiselectRef.current.getSelectedItems();
        setBancosSelected(items);
        console.log(items);
     };

    return (
        <div className="registration-back">
            <div className="env-registration">
                <div className="env-registation-header">
                    <h1>PANEL DE REGISTRO DE ENVASADORA</h1>
                </div>
                <form className="env-registration-form">
                    <div className='input-divider d-flex justify-content-between align-items-bottom'>
                        <label className='nombre-input-label' htmlFor='nombre'>Nombre envasadora:</label>
                        <input
                        type="text"
                        className='input-field'
                        name="nombreEnv"
                        onChange={handleSelect}
                        value={input.nombreEnv}
                        required/>
                    </div>
                    <div className='input-divider d-flex justify-content-between'>
                        <label className='nombre-input-label' htmlFor='nombre'>Capacidad Total Tanque:</label>
                        <input
                        type="number"
                        className='input-field'
                        name="tanqueEnv"
                        onChange={handleSelect}
                        value={input.tanqueEnv}
                        required/>
                    </div>
                    <div className='input-divider d-flex justify-content-between'>
                        <label className='nombre-input-label' htmlFor='nombre'>Capacidad Mínima Tanque:</label>
                        <input
                        type="number"
                        className='input-field'
                        name="minTanqueEnv"
                        onChange={handleSelect}
                        value={input.minTanqueEnv}
                        required/>
                    </div>
                    <div className='input-divider d-flex justify-content-between'>
                        <label className='nombre-input-label' htmlFor='nombre'>Capacidad Máxima Tanque:</label>
                        <input
                        type="number"
                        className='input-field'
                        name="maxTanqueEnv"
                        onChange={handleSelect}
                        value={input.maxTanqueEnv}
                        required/>
                    </div>
                    <div className='input-divider d-flex justify-content-between'>
                        <label className='nombre-input-label' htmlFor='nombre'>Cantidad de Metros:</label>
                        <input
                        type="number"
                        className='input-field'
                        name="metrosEnv"
                        onChange={handleSelect}
                        value={input.metrosEnv}
                        required/>
                    </div>
                    <div className='input-divider d-flex justify-content-between'>
                        <label className='nombre-input-label' htmlFor='nombre'>Cantidad de Magueras:</label>
                        <input
                        type="number"
                        className='input-field'
                        name="manguerasEnv"
                        onChange={handleSelect}
                        value={input.manguerasEnv}
                        required/>
                    </div>
                    <div className='input-divider d-flex justify-content-between'>
                        <label className='nombre-input-label' htmlFor='nombre'>Dirección:</label>
                        <input
                        type="text"
                        className='input-field'
                        name="direccionEnv"
                        onChange={handleSelect}
                        value={input.direccionEnv}
                        required/>
                    </div>
                    <div className='input-divider select-div'>
                        <label className='nombre-input-label' htmlFor='select'>Bancos:</label>
                        <Multiselect
                        options={bancosPulled}
                        displayValue="nombre"
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
                </form>
            </div>
        </div>
    );
};