import React, { useState } from "react";
import { Comp } from "./Comp";
import * as logoImg from './estilos/imagenes/metrogas_logo.png';
import './estilos/cuadreMobil.css';


export const CuadreDiarioMobile = () => {
    const [precio, setPrecio] = useState(0);
    const [capacidadRegistro, setCapacidadRegistro] = useState({
        existenciaInicialVolumen: 0,
        existenciaInicialGalones: 0,
        existenciaInicialTemperatura: 0,
        existenciaFinalVolumen: 0,
        existenciaFinalGalones: 0,
        existenciaFinalTemperatura: 0
    });
    const [metros, setMetros] = useState({
        contadorInicialMetro1: 0,
        contadorInicialMetro2: 0,
        contadorInicialMetro3: 0,
        contadorInicialMetro4: 0,
        contadorInicialMetro5: 0,
        contadorInicialMetro6: 0,
        contadorInicialMetro7: 0,
        contadorInicialMetro8: 0,
        contadorInicialMetro9: 0,
        contadorInicialMetro10: 0,
        contadorInicialMetroDIST: 0,
        contadorFinalMetro1: 0,
        contadorFinalMetro2: 0,
        contadorFinalMetro3: 0,
        contadorFinalMetro4: 0,
        contadorFinalMetro5: 0,
        contadorFinalMetro6: 0,
        contadorFinalMetro7: 0,
        contadorFinalMetro8: 0,
        contadorFinalMetro9: 0,
        contadorFinalMetro10: 0,
        contadorFinalMetroDIST: 0,
        galonesMetro1: 0,
        galonesMetro2: 0,
        galonesMetro3: 0,
        galonesMetro4: 0,
        galonesMetro5: 0,
        galonesMetro6: 0,
        galonesMetro7: 0,
        galonesMetro8: 0,
        galonesMetro9: 0,
        galonesMetro10: 0,
        galonesMetroDIST: 0,
        calibracionMetro1: 0,
        calibracionMetro2: 0,
        calibracionMetro3: 0,
        calibracionMetro4: 0,
        calibracionMetro5: 0,
        calibracionMetro6: 0,
        calibracionMetro7: 0,
        calibracionMetro8: 0,
        calibracionMetro9: 0,
        calibracionMetro10: 0,
        calibracionMetroDIST: 0,
        glsVendidoMetro1: 0,
        glsVendidoMetro2: 0,
        glsVendidoMetro3: 0,
        glsVendidoMetro4: 0,
        glsVendidoMetro5: 0,
        glsVendidoMetro6: 0,
        glsVendidoMetro7: 0,
        glsVendidoMetro8: 0,
        glsVendidoMetro9: 0,
        glsVendidoMetro10: 0,
        glsVendidoMetroDIST: 0,
        totalVendidoMetro1: 0,
        totalVendidoMetro2: 0,
        totalVendidoMetro3: 0,
        totalVendidoMetro4: 0,
        totalVendidoMetro5: 0,
        totalVendidoMetro6: 0,
        totalVendidoMetro7: 0,
        totalVendidoMetro8: 0,
        totalVendidoMetro9: 0,
        totalVendidoMetro10: 0,
        totalVendidoMetroDIST: 0,

    });

    const onInputChangeCapacidad = (e) => {
        const { name, value } = e.target;
        setCapacidadRegistro(prev => ({
          ...prev,
          [name]: parseFloat(value)
        }));
    };

    const testARR2 =[];
    const NoMetros = 7;// from  the API props

    for (let i = 0; i < NoMetros; i++) {
        let e = i+1;
        const block = `{"nombreMetro": "Metro ${e}","contadorInicial":"contadorInicialMetro${e}", "contadorFinal":"contadorFinalMetro${e}", "galones": "galonesMetro${e}", "calibracion": "calibracionMetro${e}", "glsVendido": "glsVendidoMetro${e}", "totalVendido": "totalVendidoMetro${e}"}`;
        const element = JSON.parse(block);
        testARR2.push(element);
    }

 return (
    <div className="cuadre-Mobile-cont">
        <div className="cuadre-mobile-page">
            <div className="section header-section">
                <img alt="ig-logo" src={logoImg.default} className="cuadre-mobile-logo"/>
                <h1 className="cuadre-mobile-page-h1">Cuadre Diario Planta</h1>
            </div>
            <div className="section envasadora-y-precio">
                <div className="envasadora-name">
                    <h3>Envasadora{/**traer del api o estado o props */}</h3>
                </div>
                <div className="Precio-actual">{precio}</div>
            </div>
            <div className="section capacidad-tabla">
                <h3 className="capacidad-tanque">Capacidad del Tanque: {/**traer del api o estado o props */}</h3>
                <table className="tabla-capacidad">
                            <thead className="tabla-capacidad-header">
                                <tr>
                                    <th className="td-he"> </th>
                                    <th>Volumen</th>
                                    <th>Galones</th>
                                    <th>Temp.</th>
                                </tr>
                            </thead>
                            <tbody className="tabla-capacidad-body">
                                <tr>
                                    <td className="td-he">Existencia Incial</td>
                                    <td><input 
                                    className="td-capacidad-input"
                                    type="number"
                                    placeholder="%"
                                    value={capacidadRegistro.existenciaInicialVolumen}
                                    name="existenciaInicialVolumen"
                                    onChange={onInputChangeCapacidad}/>
                                    </td>
                                    <td><input 
                                    className="td-capacidad-input" 
                                    type="number"
                                    value={capacidadRegistro.existenciaInicialGalones}
                                    name="existenciaInicialGalones"
                                    onChange={onInputChangeCapacidad}/>
                                    </td>
                                    <td><input 
                                    className="td-capacidad-input" 
                                    type="number"
                                    value={capacidadRegistro.existenciaInicialTemperatura}
                                    name="existenciaInicialTemperatura"
                                    onChange={onInputChangeCapacidad}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="td-he">Existencia Final</td>
                                    <td><input 
                                    className="td-capacidad-input" 
                                    type="number"
                                    value={capacidadRegistro.existenciaFinalVolumen}
                                    placeholder="%"
                                    name="existenciaFinalVolumen"
                                    onChange={onInputChangeCapacidad}/>
                                    </td>
                                    <td><input 
                                    className="td-capacidad-input" 
                                    type="number"
                                    value={capacidadRegistro.existenciaFinalGalones}
                                    name="existenciaFinalGalones"
                                    onChange={onInputChangeCapacidad}/>
                                    </td>
                                    <td><input 
                                    className="td-capacidad-input" 
                                    type="number"
                                    value={capacidadRegistro.existenciaFinalTemperatura}
                                    name="existenciaFinalTemperatura"
                                    onChange={onInputChangeCapacidad}/>
                                    </td>
                                </tr>
                            </tbody>
                </table>

            </div>
            <div className="section cuadre-principal">
                {testARR2.map((obj, index) => (<Comp key={index} nombreMetro={obj.nombreMetro} setFunc={setMetros} nombre={obj.contadorInicial} valor={metros[obj.contadorInicial]} />))}
            </div>

        </div>
    </div>
 );
};