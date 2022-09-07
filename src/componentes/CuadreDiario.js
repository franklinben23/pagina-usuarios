import React,  { useState } from "react";
import { Depositos } from "./Depositos";
import "./estilos/cuadre.css";
import * as logoImg from './estilos/logo.png';

export const CuadreDiario = () => {
    const [metros, setMetros] = useState({
        contadorInicialMetroI: 0,
        contadorInicialMetroII: 0,
        contadorInicialMetroIII: 0,
        contadorInicialMetroIV: 0,
        contadorInicialMetroV: 0,
        contadorInicialMetroVI: 0,
        contadorInicialMetroVII: 0,
        contadorInicialMetroVIII: 0,
        contadorInicialMetroIX: 0,
        contadorInicialMetroX: 0,
        contadorInicialMetroDIST: 0,
        contadorFinalMetroI: 0,
        contadorFinalMetroII: 0,
        contadorFinalMetroIII: 0,
        contadorFinalMetroIV: 0,
        contadorFinalMetroV: 0,
        contadorFinalMetroVI: 0,
        contadorFinalMetroVII: 0,
        contadorFinalMetroVIII: 0,
        contadorFinalMetroIX: 0,
        contadorFinalMetroX: 0,
        contadorFinalMetroDIST: 0,
        galonesMetroI: 0,
        galonesMetroII: 0,
        galonesMetroIII: 0,
        galonesMetroIV: 0,
        galonesMetroV: 0,
        galonesMetroVI: 0,
        galonesMetroVII: 0,
        galonesMetroVIII: 0,
        galonesMetroIX: 0,
        galonesMetroX: 0,
        galonesMetroDIST: 0,
        calibracionMetroI: 0,
        calibracionMetroII: 0,
        calibracionMetroIII: 0,
        calibracionMetroIV: 0,
        calibracionMetroV: 0,
        calibracionMetroVI: 0,
        calibracionMetroVII: 0,
        calibracionMetroVIII: 0,
        calibracionMetroIX: 0,
        calibracionMetroX: 0,
        calibracionMetroDIST: 0,
        glsVendidoMetroI: 0,
        glsVendidoMetroII: 0,
        glsVendidoMetroIII: 0,
        glsVendidoMetroIV: 0,
        glsVendidoMetroV: 0,
        glsVendidoMetroVI: 0,
        glsVendidoMetroVII: 0,
        glsVendidoMetroVIII: 0,
        glsVendidoMetroIX: 0,
        glsVendidoMetroX: 0,
        glsVendidoMetroDIST: 0,
        totalVendidoMetroI: 0,
        totalVendidoMetroII: 0,
        totalVendidoMetroIII: 0,
        totalVendidoMetroIV: 0,
        totalVendidoMetroV: 0,
        totalVendidoMetroVI: 0,
        totalVendidoMetroVII: 0,
        totalVendidoMetroVIII: 0,
        totalVendidoMetroIX: 0,
        totalVendidoMetroX: 0,
        totalVendidoMetroDIST: 0,
    });
    /*Arreglo temporal para tener bancos. antes de tomar del API */
    const [bancos, setBancos] = useState([
        {
            id:0,
            nombre: 'BHD',
            cuenta: 12364,
            ejecutivo: 'Marlon Brando',
            responsable: 'Rafael Peña',
            fecha_creacion: '14-05-2002',
            estado: true
        },
        {
            id: 1,
            nombre: 'Banreservas',
            cuenta: 12357,
            ejecutivo: 'Marlon Brando',
            responsable: 'Maicol jose',
            fecha_creacion: '14-05-2004',
            estado: true
        },
        {
            id: 2,
            nombre: 'Asociación Cibao',
            cuenta: 12389,
            ejecutivo: 'Marlon Brando',
            responsable: 'emilio frias',
            fecha_creacion: '14-05-2008',
            estado: true
        },
    ]);

    const onInputChange = e => {
        const { name, value } = e.target;
        setMetros(prev => ({
          ...prev,
          [name]: value
        }));
      }

    return (
        <div className="cuadre-cont">
            <div className="cuadre-page">
                <div className="cuadre-logo">
                    <img alt='logo-img' src={logoImg.default} className='registration-page-logo' />
                </div>
                <h1 className="cuadre-header seccion mx-auto">CUADRE DIARIO PLANTA</h1>
                <div className="envasadora-fecha seccion d-flex justify-content-between pt-4 pb-4 w-50">
                    <h3 className="envasadora top-dato">Envasadora:</h3>
                    <h3 className="fecha top-dato">Fecha:</h3>
                </div>
                <div className="capacidad-registro seccion">
                    <div className="capacidad cap-reg">
                        <h4 className="capacidad-header">Capacidad del Tanque:</h4>
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
                                    <td><input className="td-capacidad-input" type="number" name="existenciaIV"/></td>
                                    <td><input className="td-capacidad-input" type="number" name="existenciaIG"/></td>
                                    <td><input className="td-capacidad-input" type="number" name="existenciaIT"/></td>
                                </tr>
                                <tr>
                                    <td className="td-he">Existencia Final</td>
                                    <td><input className="td-capacidad-input" type="number" name="existenciaFV"/></td>
                                    <td><input className="td-capacidad-input" type="number" name="existenciaFG"/></td>
                                    <td><input className="td-capacidad-input" type="number" name="existenciaFT"/></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="registro cap-reg">
                    </div>                
                </div>
                <div className="cuadre-principal seccion">
                    <table className="tabla-cuadre-principal">
                        <thead className="tabla-cuadre-principal-header">
                            <tr>
                                <th>TIPO</th>
                                <th>METRO I</th>
                                <th>METRO II</th>
                                <th>METRO III</th>
                                <th>METRO IV</th>
                                <th>METRO V</th>
                                <th>METRO VI</th>
                                <th>METRO VII</th>
                                <th>METRO VIII</th>
                                <th>METRO IX</th>
                                <th>METRO X</th>
                                <th>METRO DISTRIBUCION</th>
                            </tr>
                        </thead>
                        <tbody className="tabla-cuadre-principal-body">
                            <tr>
                                <td className="td-h">Precio</td>
                                <td><input className="td-cuadre-input" name="precioMetroI" type="number"/></td>
                                <td><input className="td-cuadre-input" name="precioMetroII" type="number"/></td>
                                <td><input className="td-cuadre-input" name="precioMetroIII" type="number"/></td>
                                <td><input className="td-cuadre-input" name="precioMetroIV" type="number"/></td>
                                <td><input className="td-cuadre-input" name="precioMetroV" type="number"/></td>
                                <td><input className="td-cuadre-input" name="precioMetroVI" type="number"/></td>
                                <td><input className="td-cuadre-input" name="precioMetroVII" type="number"/></td>
                                <td><input className="td-cuadre-input" name="precioMetroVIII" type="number"/></td>
                                <td><input className="td-cuadre-input" name="precioMetroIX" type="number"/></td>
                                <td><input className="td-cuadre-input" name="precioMetroX" type="number"/></td>
                                <td><input className="td-cuadre-input" name="precioMetroDIST" type="number"/></td>
                            </tr>
                            <tr>
                                <td className="td-h">Contador Incial</td>
                                <td><input className="td-cuadre-input" name="contadorInicialMetroI" value={metros.contadorInicialMetroI} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="contadorInicialMetroII" value={metros.contadorInicialMetroII} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="contadorInicialMetroIII" value={metros.contadorInicialMetroIII} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="contadorInicialMetroIV" value={metros.contadorInicialMetroIV} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="contadorInicialMetroV" value={metros.contadorInicialMetroV} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="contadorInicialMetroVI" value={metros.contadorInicialMetroVI} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="contadorInicialMetroVII" value={metros.contadorInicialMetroVII} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="contadorInicialMetroVIII" value={metros.contadorInicialMetroVIII} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="contadorInicialMetroIX" value={metros.contadorInicialMetroIX} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="contadorInicialMetroX" value={metros.contadorInicialMetroX} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="contadorInicialMetroDIST" value={metros.contadorInicialMetroDIST} onChange={onInputChange} type="number"/></td>
                            </tr>
                            <tr>
                                <td className="td-h">Contador Final</td>
                                <td><input className="td-cuadre-input" name="contadorFinalMetroI" value={metros.contadorFinalMetroI} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="contadorFinalMetroII" value={metros.contadorFinalMetroII} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="contadorFinalMetroIII" value={metros.contadorFinalMetroIII} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="contadorFinalMetroIV" value={metros.contadorFinalMetroIV} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="contadorFinalMetroV" value={metros.contadorFinalMetroV} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="contadorFinalMetroVI" value={metros.contadorFinalMetroVI} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="contadorFinalMetroVII" value={metros.contadorFinalMetroVII} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="contadorFinalMetroVIII" value={metros.contadorFinalMetroVIII} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="contadorFinalMetroIX" value={metros.contadorFinalMetroIX} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="contadorFinalMetroX" value={metros.contadorFinalMetroX} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="contadorFinalMetroDIST" value={metros.contadorFinalMetroDIST} onChange={onInputChange} type="number"/></td>
                            </tr>
                            <tr>
                                <td className="td-h">Galones</td>
                                <td><input className="td-cuadre-input" name="galonesMetroI" value={metros.galonesMetroI} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="galonesMetroII" value={metros.galonesMetroII} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="galonesMetroIII" value={metros.galonesMetroIII} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="galonesMetroIV" value={metros.galonesMetroIV} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="galonesMetroV" value={metros.galonesMetroV} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="galonesMetroVI" value={metros.galonesMetroVI} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="galonesMetroVII" value={metros.galonesMetroVII} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="galonesMetroVIII" value={metros.galonesMetroVIII} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="galonesMetroIX" value={metros.galonesMetroIX} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="galonesMetroX" value={metros.galonesMetroX} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="galonesMetroDIST" value={metros.galonesMetroDIST} onChange={onInputChange} type="number"/></td>
                            </tr>
                            <tr>
                                <td className="td-h">Calibración GLS</td>
                                <td><input className="td-cuadre-input" name="calibracionMetroI" value={metros.calibracionMetroI} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="calibracionMetroII" value={metros.calibracionMetroII} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="calibracionMetroIII" value={metros.calibracionMetroIII} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="calibracionMetroIV" value={metros.calibracionMetroIV} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="calibracionMetroV" value={metros.calibracionMetroV} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="calibracionMetroVI" value={metros.calibracionMetroVI} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="calibracionMetroVII" value={metros.calibracionMetroVII} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="calibracionMetroVIII" value={metros.calibracionMetroVIII} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="calibracionMetroIX" value={metros.calibracionMetroIX} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="calibracionMetroX" value={metros.calibracionMetroX} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="calibracionMetroDIST" value={metros.calibracionMetroDIST} onChange={onInputChange} type="number"/></td>
                            </tr>
                            <tr>
                                <td className="td-h">GLS vendido</td>
                                <td><input className="td-cuadre-input" name="glsVendidoMetroI" value={metros.glsVendidoMetroI} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="glsVendidoMetroII" value={metros.glsVendidoMetroII} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="glsVendidoMetroIII" value={metros.glsVendidoMetroIII} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="glsVendidoMetroIV" value={metros.glsVendidoMetroIV} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="glsVendidoMetroV" value={metros.glsVendidoMetroV} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="glsVendidoMetroVI" value={metros.glsVendidoMetroVI} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="glsVendidoMetroVII" value={metros.glsVendidoMetroVII} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="glsVendidoMetroVIII" value={metros.glsVendidoMetroVIII} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="glsVendidoMetroIX" value={metros.glsVendidoMetroIX} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="glsVendidoMetroX" value={metros.glsVendidoMetroX} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="glsVendidoMetroDIST" value={metros.glsVendidoMetroDIST} onChange={onInputChange} type="number"/></td>
                            </tr>
                            <tr>
                                <td className="td-h">Total RD$</td>
                                <td><input className="td-cuadre-input" name="totalVendidoMetroI" value={metros.totalVendidoMetroI} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="totalVendidoMetroII" value={metros.totalVendidoMetroII} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="totalVendidoMetroIII" value={metros.totalVendidoMetroIII} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="totalVendidoMetroIV" value={metros.totalVendidoMetroIV} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="totalVendidoMetroV" value={metros.totalVendidoMetroV} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="totalVendidoMetroVI" value={metros.totalVendidoMetroVI} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="totalVendidoMetroVII" value={metros.totalVendidoMetroVII} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="totalVendidoMetroVIII" value={metros.totalVendidoMetroVIII} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="totalVendidoMetroIX" value={metros.totalVendidoMetroIX} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="totalVendidoMetroX" value={metros.totalVendidoMetroX} onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="totalVendidoMetroDIST" value={metros.totalVendidoMetroDIST} onChange={onInputChange} type="number"/></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <div className="totales d-flex seccion">
                    <div className="totales-total">Total GLS: <input className="input-totales" name="input-total" type="number"/></div>
                    <div className="totales-total">Total RD$: <input className="input-totales" name="input-pesos" type="number"/></div>
                </div>
                <div className="anotaciones-y-depositos d-flex justify-content-around seccion">
                    <div className="anotaciones">
                        <div className="anotacion-div">
                            <label>Sobrante GLS:</label>
                            <input className="anotaciones-input" name="sobranteGls" type="number" />
                        </div>
                        <div className="anotacion-div">
                            <label>Faltante GLS:</label>
                            <input className="anotaciones-input" name="faltanteGls" type="number" />
                        </div>
                        <div className="anotacion-div">
                            <label>Venta Efectivo:</label>
                            <input className="anotaciones-input" name="ventaEfectivo" type="number" />
                        </div>
                        <div className="anotacion-div">
                            <label>Crédito Cliente:</label>
                            <input className="anotaciones-input" name="creditoCliente" type="number" />
                        </div>
                        <div className="anotacion-div">
                            <label>Crédito Tarjeta:</label>
                            <input className="anotaciones-input" name="creditoTarjeta" type="number" />
                        </div>
                        <div className="anotacion-div">
                            <label>Tarjeta Solidaridad:</label>
                            <input className="anotaciones-input" name="tarjetaSolidaridad" type="number" />
                        </div>
                        <div className="anotacion-div">
                            <label>Bonos Prepago:</label>
                            <input className="anotaciones-input" name="bonosPrepago" type="number" />
                        </div>
                        <div className="anotacion-div">
                            <label>Cheques:</label>
                            <input className="anotaciones-input" name="cheques" type="number" />
                        </div>
                        <div className="anotacion-div">
                            <label>Total:</label>
                            <input className="anotaciones-input" name="sobrante-gls" type="number" />
                        </div>
                        <div className="anotacion-div anotacion-deposito">
                            <label>Depósito RD$:</label>
                            <input className="anotaciones-input deposito" name="deposito" type="number" />
                        </div>

                    </div>
                    <div className="depositos">
                        <table className="tabla-cuadro justify-self-right">
                            <thead className="tabla-cuadro-header">
                                <tr>
                                    <th>Bancos</th>
                                    <th>Depósitos</th>
                                    <th>Lote Tarjeta</th>
                                    <th>Monto Tarjeta</th>
                                    <th>Lote Bonogas</th>
                                    <th>Monto Bonogas</th>
                                </tr>
                            </thead>
                            <tbody className="tabla-cuadro-body">
                                { bancos.map((banco) => (<Depositos bancoName={banco.nombre} key={banco.id}/>)) }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    );
};