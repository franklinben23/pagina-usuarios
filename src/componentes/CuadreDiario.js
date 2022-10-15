import React,  { useState, useEffect } from "react";
import { Depositos } from "./Depositos";
import "./estilos/cuadre.css";
import * as logoImg from './estilos/imagenes/metrogas_logo.png';

export const CuadreDiario = () => {
    /*Arreglo temporal para tener bancos y los precios. antes de tomar del API */

    useEffect(() => {
         const getApiInfo = async () => {
            try {
                const precioRequest = await fetch('http://10.1.105.205:8080/webapp.metrogas/precio/9'); //hablar para cambiar endpoints
                if (precioRequest.ok) {
                    const precioJson = await precioRequest.json();
                    const precioMonto = precioJson.precio;
                    setPrecio(precioMonto);
                }
                else {
                    throw 'no se pudo realizar la conexion, revise la conexion o contacte soporte'
                }
            } catch (error) {
                alert(error) //investigar styling de alerts
            }
        }
        getApiInfo();
        
    }, [])

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
    const [precio, setPrecio] = useState(0);
    const precioFormatado = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(precio);
    /**tomar lo de arriba del API */
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
    const [capacidadRegistro, setCapacidadRegistro] = useState({
        existenciaInicialVolumen: 0,
        existenciaInicialGalones: 0,
        existenciaInicialTemperatura: 0,
        existenciaFinalVolumen: 0,
        existenciaFinalGalones: 0,
        existenciaFinalTemperatura: 0
    });
    const [anotaciones, setAnotaciones] = useState({
        sobranteGalones: 0,
        ventaEfectivo: 0,
        creditoCliente: 0,
        creditoTarjeta: 0,
        tarjetaSolidaridad: 0,
        bonoPrepago: 0,
        cheque: 0,
        total: 0,
        deposito: 0
    });
    const [depositos, setDepositos] = useState([]);

    const onInputChangeCapacidad = (e) => {
        const { name, value } = e.target;
        setCapacidadRegistro(prev => ({
          ...prev,
          [name]: parseFloat(value)
        }));
    };

    const changeTotalGalones = () => {
        const totalGalones = metros.galonesMetroI + metros.galonesMetroII + metros.galonesMetroIII +  metros.galonesMetroIV + metros.galonesMetroV + metros.galonesMetroVI + metros.galonesMetroVII + metros.galonesMetroVIII + metros.galonesMetroIX + metros.galonesMetroX + metros.galonesMetroDIST;

        return totalGalones;
    };

    const galonesTotales = changeTotalGalones();
    const totalPre = parseFloat(galonesTotales * precio);
    const totalDinero = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalPre);

    /**Precio  */

    const onInputChange = e => {
        const { name, value } = e.target;
        setMetros(prev => ({
          ...prev,
          [name]: parseInt(value)
        }));
      };

      const onChangeAnotaciones= e => {
        const { name, value } = e.target;
        setAnotaciones(prev => ({
          ...prev,
          [name]: parseInt(value)
        }));
      };

    const cuadreSubmitF = async (e) => {
        e.preventDefault();
       const bloque = {
        cuadreId: 0,
        envasadoraIdEnvasadora: {
          envasadoraId: 67, //props
          empresaEntity: {
            empresaId: 0,
            nombre: "string",
            estado: true
          },
          envasadoraNombre: "string",
          capacidadTanque: 0,
          capacidadMaximaTanque: 0,
          capacidadIntermediaTanque: 0,
          capacidadMinimaTanque: 0,
          longitud: "string",
          latitud: "string",
          direccion: "string",
          telefono: "string",
          fechaCreacion: "2022-09-28T18:43:47.337Z",
          estatus: true
        },
        ...capacidadRegistro,
        conduceNumero: 0,
        cantiGalonesRecibidos: 0,
        precioActual: precio,
        contadorInicialMetroUno: metros.contadorInicialMetroI,
        contadorFinalMetroUno: metros.contadorFinalMetroI,
        galonesMetroUno: metros.galonesMetroI,
        calibracionGlpMetroUno: metros.calibracionMetroI,
        galonesVendidoMetroUno: metros.glsVendidoMetroI,
        totalMetroUno: metros.totalVendidoMetroI,
        contadorInicialMetroDos: metros.contadorInicialMetroII,
        contadorFinalMetroDos: metros.contadorFinalMetroII,
        galonesMetroDos: metros.galonesMetroII,
        calibracionGlpMetroDos: metros.calibracionMetroII,
        galonesVendidoMetroDos: metros.glsVendidoMetroII,
        totalMetroDos: metros.totalVendidoMetroII,
        contadorInicialMetroTres: metros.contadorInicialMetroIII,
        contadorFinalMetroTres: metros.contadorFinalMetroIII,
        galonesMetroTres: metros.galonesMetroIII,
        calibracionGlpMetroTres: metros.calibracionMetroIII,
        galonesVendidoMetroTres: metros.glsVendidoMetroIII,
        totalMetroTres: metros.totalVendidoMetroIII,
        contadorInicialMetroCuatro: metros.contadorInicialMetroIV,
        contadorFinalMetroCuatro: metros.contadorFinalMetroIV,
        galonesMetroCuatro: metros.galonesMetroIV,
        calibracionGlpMetroCuatro: metros.calibracionMetroIV,
        galonesVendidoMetroCuatro: metros.glsVendidoMetroIV,
        totalMetroCuatro: metros.totalVendidoMetroIV,
        contadorInicialMetroCinco: metros.contadorInicialMetroV,
        contadorFinalMetroCinco: metros.contadorFinalMetroV,
        galonesMetroCinco: metros.galonesMetroV,
        calibracionGlpMetroCinco: metros.calibracionMetroV,
        galonesVendidoMetroCinco: metros.glsVendidoMetroV,
        totalMetroCinco: metros.totalVendidoMetroV,
        contadorInicialMetroSeis: metros.contadorInicialMetroVI,
        contadorFinalMetroSeis: metros.contadorFinalMetroVI,
        galonesMetroSeis: metros.galonesMetroVI,
        calibracionGlpMetroSeis: metros.calibracionMetroVI,
        galonesVendidoMetroSeis: metros.glsVendidoMetroVI,
        totalMetroSeis: metros.totalVendidoMetroVI,
        contadorInicialMetroSiete: metros.contadorInicialMetroVII,
        contadorFinalMetroSiete: metros.contadorFinalMetroVII,
        galonesMetroSiete: metros.galonesMetroVII,
        calibracionGlpMetroSiete: metros.calibracionMetroVII,
        galonesVendidoMetroSiete: metros.glsVendidoMetroVII,
        totalMetroSiete: metros.totalVendidoMetroVII,
        contadorInicialMetroOcho: metros.contadorInicialMetroVIII,
        contadorFinalMetroOcho: metros.contadorFinalMetroVIII,
        galonesMetroOcho: metros.galonesMetroVIII,
        calibracionGlpMetroOcho: metros.calibracionMetroVIII,
        galonesVendidoMetroOcho: metros.glsVendidoMetroVIII,
        totalMetroOcho: metros.totalVendidoMetroVIII,
        contadorInicialMetroNueve: metros.contadorInicialMetroIX,
        contadorFinalMetroNueve: metros.contadorFinalMetroIX,
        galonesMetroNueve: metros.galonesMetroIX,
        calibracionGlpMetroNueve: metros.calibracionMetroIX,
        galonesVendidoMetroNueve: metros.glsVendidoMetroIX,
        totalMetroNueve: metros.totalVendidoMetroIX,
        contadorInicialMetroDiez: metros.contadorInicialMetroX,
        contadorFinalMetroDiez: metros.contadorFinalMetroX,
        galonesMetroDiez: metros.galonesMetroX,
        calibracionGlpMetroDiez: metros.calibracionMetroX,
        galonesVendidoMetroDiez: metros.glsVendidoMetroX,
        totalMetroDiez: metros.totalVendidoMetroX,
        contadorInicialMetroDistribucion: metros.contadorInicialMetroDIST,
        contadorFinalMetroDistribucion: metros.contadorInicialMetroDIST,
        galonesMetroDistribucion: metros.galonesMetroDIST,
        calibracionGlpMetroDistribucion: metros.calibracionMetroDIST,
        galonesVendidoMetroDistribucion: metros.glsVendidoMetroDIST,
        totalMetroDistribucion: metros.totalVendidoMetroDIST,
        totalGalonesVendidos: galonesTotales,
        totalDineroVendido: totalPre,
        ...anotaciones,
        despositoEntity: depositos,
        usuarioEntity: {
            userId: 68, //viene del props
            nombre: "string",
            apellido: "string",
            email: "string",
            password: "string",
            envasadoraEntity: [
              {
                envasadoraId: 0,
                empresaEntity: {
                  empresaId: 0,
                  nombre: "string",
                  estado: true
                },
                envasadoraNombre: "string",
                capacidadTanque: 0,
                capacidadMaximaTanque: 0,
                capacidadIntermediaTanque: 0,
                capacidadMinimaTanque: 0,
                longitud: "string",
                latitud: "string",
                direccion: "string",
                telefono: "string",
                fechaCreacion: "2022-09-28T18:43:47.337Z",
                estatus: true
              }
            ],
            estado: true
          },
          fechaCierre: "2022-09-28T18:43:47.337Z",
          horaCierre: "2022-09-28T18:43:47.337Z",
          estado: true
        };
        try {
            const cuadreRequest = await fetch('http://10.1.105.205:8080/webapp.metrogas/cuadre/save', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(bloque)
            });
            if (cuadreRequest.ok) {
                const json = await cuadreRequest.json();
                console.log(json)
            } else {
                throw 'hubo un problema con el request';
            }
        } catch (error) {
            alert(error);
        }
    };

    return (
        <div className="cuadre-cont">
            <div className="cuadre-page">
                <div className="cuadre-logo">
                    <img alt='logo-img' src={logoImg.default} className='registration-page-logo' />
                </div>
                <h1 className="cuadre-header seccion mx-auto">CUADRE DIARIO PLANTA</h1>
                <div className="envasadora-fecha seccion d-flex justify-content-between pt-4 pb-4 w-50">
                    <h3 className="envasadora top-dato">Envasadora:</h3>
                </div>
                <div className="capacidad-registro seccion">
                    <div className="capacidad cap-reg">
                        <h4 className="capacidad-header">Capacidad del Tanque: {/**traer del api o estado o props */}</h4>
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
                                {/**El precio se traera del API */}
                                <td><input className="td-cuadre-input" name="precioMetroI" value={precioFormatado} disabled type="text"/></td>
                                <td><input className="td-cuadre-input" name="precioMetroII" value={precioFormatado} disabled type="text"/></td>
                                <td><input className="td-cuadre-input" name="precioMetroIII" value={precioFormatado} disabled type="text"/></td>
                                <td><input className="td-cuadre-input" name="precioMetroIV" value={precioFormatado} disabled type="text"/></td>
                                <td><input className="td-cuadre-input" name="precioMetroV" value={precioFormatado} disabled type="text"/></td>
                                <td><input className="td-cuadre-input" name="precioMetroVI" value={precioFormatado} disabled type="text"/></td>
                                <td><input className="td-cuadre-input" name="precioMetroVII" value={precioFormatado} disabled type="text"/></td>
                                <td><input className="td-cuadre-input" name="precioMetroVIII" value={precioFormatado} disabled type="text"/></td>
                                <td><input className="td-cuadre-input" name="precioMetroIX" value={precioFormatado} disabled type="text"/></td>
                                <td><input className="td-cuadre-input" name="precioMetroX" value={precioFormatado} disabled type="text"/></td>
                                <td><input className="td-cuadre-input" name="precioMetroDIST" value={precioFormatado} disabled type="text"/></td>
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
                                <td><input className="td-cuadre-input" name="galonesMetroI" value={metros.galonesMetroI}  onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="galonesMetroII" value={metros.galonesMetroII}  onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="galonesMetroIII" value={metros.galonesMetroIII}  onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="galonesMetroIV" value={metros.galonesMetroIV}  onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="galonesMetroV" value={metros.galonesMetroV}  onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="galonesMetroVI" value={metros.galonesMetroVI}  onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="galonesMetroVII" value={metros.galonesMetroVII}  onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="galonesMetroVIII" value={metros.galonesMetroVIII}  onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="galonesMetroIX" value={metros.galonesMetroIX}  onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="galonesMetroX" value={metros.galonesMetroX}  onChange={onInputChange} type="number"/></td>
                                <td><input className="td-cuadre-input" name="galonesMetroDIST" value={metros.galonesMetroDIST}  onChange={onInputChange} type="number"/></td>
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
                    <div className="totales-total">Total GLS: 
                    <input 
                    className="input-totales" 
                    name=" totalGalonesVendidos" 
                    type="number"
                    disabled
                    value={galonesTotales}/>
                    </div>
                    <div className="totales-total">Total RD$: 
                    <input
                    className="input-totales" 
                    name="totalDineroVendido"
                    value={totalDinero}
                    disabled
                    type="text"/>
                    </div>
                </div>
                <div className="anotaciones-y-depositos d-flex justify-content-around seccion">
                    <div className="anotaciones">
                        <div className="anotacion-div">
                            <label>Sobrante GLS:</label>
                            <input className="anotaciones-input" name="sobranteGalones" value={anotaciones.sobranteGalones} onChange={onChangeAnotaciones} type="number" />
                        </div>
                        <div className="anotacion-div">
                            <label>Venta Efectivo:</label>
                            <input className="anotaciones-input" name="ventaEfectivo" value={anotaciones.ventaEfectivo} onChange={onChangeAnotaciones} type="number" />
                        </div>
                        <div className="anotacion-div">
                            <label>Crédito Cliente:</label>
                            <input className="anotaciones-input" name="creditoCliente" value={anotaciones.creditoCliente} onChange={onChangeAnotaciones} type="number" />
                        </div>
                        <div className="anotacion-div">
                            <label>Crédito Tarjeta:</label>
                            <input className="anotaciones-input" name="creditoTarjeta" value={anotaciones.creditoTarjeta} onChange={onChangeAnotaciones} type="number" />
                        </div>
                        <div className="anotacion-div">
                            <label>Tarjeta Solidaridad:</label>
                            <input className="anotaciones-input" name="tarjetaSolidaridad" value={anotaciones.tarjetaSolidaridad} onChange={onChangeAnotaciones} type="number" />
                        </div>
                        <div className="anotacion-div">
                            <label>Bonos Prepago:</label>
                            <input className="anotaciones-input" name="bonoPrepago" value={anotaciones.bonoPrepago} onChange={onChangeAnotaciones} type="number" />
                        </div>
                        <div className="anotacion-div">
                            <label>Cheques:</label>
                            <input className="anotaciones-input" name="cheque" value={anotaciones.cheque} onChange={onChangeAnotaciones} type="number" />
                        </div>
                        <div className="anotacion-div">
                            <label>Total:</label>
                            <input className="anotaciones-input" name="total" value={anotaciones.total} onChange={onChangeAnotaciones} type="number" />
                        </div>
                        <div className="anotacion-div anotacion-deposito">
                            <label>Depósito RD$:</label>
                            <input className="anotaciones-input deposito" name="deposito" value={anotaciones.deposito} onChange={onChangeAnotaciones} type="number" />
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
                                { bancos.map((banco) => (<Depositos bancoName={banco.nombre} functionSet={setDepositos} key={banco.nombre}/>)) }
                            </tbody>
                        </table>
                    </div>
                </div>
                <button type="button" className="cuadre-submit-btn" onClick={cuadreSubmitF}></button>
            </div>
        </div>

    );

};