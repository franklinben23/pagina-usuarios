import React from "react";
import "./estilos/cuadre.css"
import * as logoImg from './estilos/logo.png';

export const CuadreDiario = () => {
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
                                <td><input className="td-cuadre-input" name="contadorInicialMetroI" type="number"/></td>
                                <td><input className="td-cuadre-input" name="contadorInicialMetroII" type="number"/></td>
                                <td><input className="td-cuadre-input" name="contadorInicialMetroIII" type="number"/></td>
                                <td><input className="td-cuadre-input" name="contadorInicialMetroIV" type="number"/></td>
                                <td><input className="td-cuadre-input" name="contadorInicialMetroV" type="number"/></td>
                                <td><input className="td-cuadre-input" name="contadorInicialMetroVI" type="number"/></td>
                                <td><input className="td-cuadre-input" name="contadorInicialMetroVII" type="number"/></td>
                                <td><input className="td-cuadre-input" name="contadorInicialMetroVIII" type="number"/></td>
                                <td><input className="td-cuadre-input" name="contadorInicialMetroIX" type="number"/></td>
                                <td><input className="td-cuadre-input" name="contadorInicialMetroX" type="number"/></td>
                                <td><input className="td-cuadre-input" name="contadorInicialMetroDIST" type="number"/></td>
                            </tr>
                            <tr>
                                <td className="td-h">Contador Final</td>
                                <td><input className="td-cuadre-input" name="contadorFinalMetroI" type="number"/></td>
                                <td><input className="td-cuadre-input" name="contadorFinalMetroII" type="number"/></td>
                                <td><input className="td-cuadre-input" name="contadorFinalMetroIII" type="number"/></td>
                                <td><input className="td-cuadre-input" name="contadorFinalMetroIV" type="number"/></td>
                                <td><input className="td-cuadre-input" name="contadorFinalMetroV" type="number"/></td>
                                <td><input className="td-cuadre-input" name="contadorFinalMetroVI" type="number"/></td>
                                <td><input className="td-cuadre-input" name="contadorFinalMetroVII" type="number"/></td>
                                <td><input className="td-cuadre-input" name="contadorFinalMetroVIII" type="number"/></td>
                                <td><input className="td-cuadre-input" name="contadorFinalMetroIX" type="number"/></td>
                                <td><input className="td-cuadre-input" name="contadorFinalMetroX" type="number"/></td>
                                <td><input className="td-cuadre-input" name="contadorFinalMetroDIST" type="number"/></td>
                            </tr>
                            <tr>
                                <td className="td-h">Galones</td>
                                <td><input className="td-cuadre-input" name="galonesMetroI" type="number"/></td>
                                <td><input className="td-cuadre-input" name="galonesMetroII" type="number"/></td>
                                <td><input className="td-cuadre-input" name="galonesMetroIII" type="number"/></td>
                                <td><input className="td-cuadre-input" name="galonesMetroIV" type="number"/></td>
                                <td><input className="td-cuadre-input" name="galonesMetroV" type="number"/></td>
                                <td><input className="td-cuadre-input" name="galonesMetroVI" type="number"/></td>
                                <td><input className="td-cuadre-input" name="galonesMetroVII" type="number"/></td>
                                <td><input className="td-cuadre-input" name="galonesMetroVIII" type="number"/></td>
                                <td><input className="td-cuadre-input" name="galonesMetroIX" type="number"/></td>
                                <td><input className="td-cuadre-input" name="galonesMetroX" type="number"/></td>
                                <td><input className="td-cuadre-input" name="galonesMetroDIST" type="number"/></td>
                            </tr>
                            <tr>
                                <td className="td-h">Calibración GLS</td>
                                <td><input className="td-cuadre-input" name="calibracionMetroI" type="number"/></td>
                                <td><input className="td-cuadre-input" name="calibracionMetroII" type="number"/></td>
                                <td><input className="td-cuadre-input" name="calibracionMetroIII" type="number"/></td>
                                <td><input className="td-cuadre-input" name="calibracionMetroIV" type="number"/></td>
                                <td><input className="td-cuadre-input" name="calibracionMetroV" type="number"/></td>
                                <td><input className="td-cuadre-input" name="calibracionMetroVI" type="number"/></td>
                                <td><input className="td-cuadre-input" name="calibracionMetroVII" type="number"/></td>
                                <td><input className="td-cuadre-input" name="calibracionMetroVIII" type="number"/></td>
                                <td><input className="td-cuadre-input" name="calibracionMetroIX" type="number"/></td>
                                <td><input className="td-cuadre-input" name="calibracionMetroX" type="number"/></td>
                                <td><input className="td-cuadre-input" name="calibracionMetroDIST" type="number"/></td>
                            </tr>
                            <tr>
                                <td className="td-h">GLS vendido</td>
                                <td><input className="td-cuadre-input" name="glsVendidoMetroI" type="number"/></td>
                                <td><input className="td-cuadre-input" name="glsVendidoMetroII" type="number"/></td>
                                <td><input className="td-cuadre-input" name="glsVendidoMetroIII" type="number"/></td>
                                <td><input className="td-cuadre-input" name="glsVendidoMetroIV" type="number"/></td>
                                <td><input className="td-cuadre-input" name="glsVendidoMetroV" type="number"/></td>
                                <td><input className="td-cuadre-input" name="glsVendidoMetroVI" type="number"/></td>
                                <td><input className="td-cuadre-input" name="glsVendidoMetroVII" type="number"/></td>
                                <td><input className="td-cuadre-input" name="glsVendidoMetroVIII" type="number"/></td>
                                <td><input className="td-cuadre-input" name="glsVendidoMetroIX" type="number"/></td>
                                <td><input className="td-cuadre-input" name="glsVendidoMetroX" type="number"/></td>
                                <td><input className="td-cuadre-input" name="glsVendidoMetroDIST" type="number"/></td>
                            </tr>
                            <tr>
                                <td className="td-h">Total RD$</td>
                                <td><input className="td-cuadre-input" name="totalVendidoMetroI" type="number"/></td>
                                <td><input className="td-cuadre-input" name="totalVendidoMetroII" type="number"/></td>
                                <td><input className="td-cuadre-input" name="totalVendidoMetroIII" type="number"/></td>
                                <td><input className="td-cuadre-input" name="totalVendidoMetroIV" type="number"/></td>
                                <td><input className="td-cuadre-input" name="totalVendidoMetroV" type="number"/></td>
                                <td><input className="td-cuadre-input" name="totalVendidoMetroVI" type="number"/></td>
                                <td><input className="td-cuadre-input" name="totalVendidoMetroVII" type="number"/></td>
                                <td><input className="td-cuadre-input" name="totalVendidoMetroVIII" type="number"/></td>
                                <td><input className="td-cuadre-input" name="totalVendidoMetroIX" type="number"/></td>
                                <td><input className="td-cuadre-input" name="totalVendidoMetroX" type="number"/></td>
                                <td><input className="td-cuadre-input" name="totalVendidoMetroDIST" type="number"/></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <div className="totales d-flex seccion">
                    <div className="totales-total">Total GLS: <input className="input-totales" name="input-total" type="number"/></div>
                    <div className="totales-total">Total RD$: <input className="input-totales" name="input-pesos" type="number"/></div>
                </div>
                <div className="anotaciones-y-cuadro seccion">
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
                    {/* <div className="cuadro">
                        <table className="tabla-cuadro">
                            <thead className="tabla-cuadro-header">
                                <tr>
                                    <th>Depósitos</th>
                                    <th>Lote Tarjeta</th>
                                    <th>Monto Tarjeta</th>
                                    <th>Lote Bonogas</th>
                                    <th>Monto Bonogas</th>
                                </tr>
                            </thead>
                            <tbody className="tabla-cuadro-body">
                                <tr>
                                    <td><input className="td-cuadro-input" name="depositosI" type="text"/></td>
                                    <td><input className="td-cuadro-input" name="loteTarjetaI" type="text"/></td>
                                    <td><input className="td-cuadro-input" name="montoTarjetaI" type="text"/></td>
                                    <td><input className="td-cuadro-input" name="loteBonogasI" type="text"/></td>
                                    <td><input className="td-cuadro-input" name="montoBonogasI" type="text"/></td>
                                </tr>
                            </tbody>
                        </table>
                    </div> */}
                </div>
            </div>
        </div>

    );
};