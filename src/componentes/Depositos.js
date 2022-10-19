import React, { useState } from "react";
import './estilos/Depositos.css';
import { Deposito } from './Deposito';
import { CgCloseO } from 'react-icons/cg';
import { BsPlusLg } from 'react-icons/bs';

export const Depositos = (props) => {
    const { bancoName, functionSet, idEnvasadora, idBanco, idUser } = props;

    const [ trigger, setTrigger] = useState(false);
    const [depositosGuardados, setdepositosGuardados] = useState([]);
    const [depositoGuardar, setdepositoGuardar] = useState({
        codigo: 0,
        monto: 0,
        descripcion: ''
    });
    const [totalDepBanco, setTotalBanco] = useState(0);

    // useEffect(()=> {
    //     const testFor = JSON.parse({
    //     "cuadreId": 0,
    //     "envasadoraIdEnvasadora": {
    //       "envasadoraId": 0,
    //       "empresaEntity": {
    //         "empresaId": 0,
    //         "nombre": "string",
    //         "estado": true
    //       },
    //       "envasadoraNombre": "string",
    //       "capacidadTanque": 0,
    //       "capacidadMaximaTanque": 0,
    //       "capacidadIntermediaTanque": 0,
    //       "capacidadMinimaTanque": 0,
    //       "longitud": "string",
    //       "latitud": "string",
    //       "direccion": "string",
    //       "telefono": "string",
    //       "fechaCreacion": "2022-09-26T14:36:21.522Z",
    //       "estatus": true
    //     },
    //     "existenciaInicialVolumen": 0,
    //     "existenciaInicialGalones": 0,
    //     "existenciaInicialTemperatura": 0,
    //     "existenciaFinalVolumen": 0,
    //     "existenciaFinalGalones": 0,
    //     "existenciaFinalTemperatura": 0,
    //     "conduceNumero": 0,
    //     "cantiGalonesRecibidos": 0,
    //     "precioActual": 0,
    //     "contadorInicialMetroUno": 0,
    //     "contadorFinalMetroUno": 0,
    //     "galonesMetroUno": 0,
    //     "calibracionGlpMetroUno": 0,
    //     "galonesVendidoMetroUno": 0,
    //     "totalMetroUno": 0,
    //     "contadorInicialMetroDos": 0,
    //     "contadorFinalMetroDos": 0,
    //     "galonesMetroDos": 0,
    //     "calibracionGlpMetroDos": 0,
    //     "galonesVendidoMetroDos": 0,
    //     "totalMetroDos": 0,
    //     "contadorInicialMetroTres": 0,
    //     "contadorFinalMetroTres": 0,
    //     "galonesMetroTres": 0,
    //     "calibracionGlpMetroTres": 0,
    //     "galonesVendidoMetroTres": 0,
    //     "totalMetroTres": 0,
    //     "contadorInicialMetroCuatro": 0,
    //     "contadorFinalMetroCuatro": 0,
    //     "galonesMetroCuatro": 0,
    //     "calibracionGlpMetroCuatro": 0,
    //     "galonesVendidoMetroCuatro": 0,
    //     "totalMetroCuatro": 0,
    //     "contadorInicialMetroCinco": 0,
    //     "contadorFinalMetroCinco": 0,
    //     "galonesMetroCinco": 0,
    //     "calibracionGlpMetroCinco": 0,
    //     "galonesVendidoMetroCinco": 0,
    //     "totalMetroCinco": 0,
    //     "contadorInicialMetroSeis": 0,
    //     "contadorFinalMetroSeis": 0,
    //     "galonesMetroSeis": 0,
    //     "calibracionGlpMetroSeis": 0,
    //     "galonesVendidoMetroSeis": 0,
    //     "totalMetroSeis": 0,
    //     "contadorInicialMetroSiete": 0,
    //     "contadorFinalMetroSiete": 0,
    //     "galonesMetroSiete": 0,
    //     "calibracionGlpMetroSiete": 0,
    //     "galonesVendidoMetroSiete": 0,
    //     "totalMetroSiete": 0,
    //     "contadorInicialMetroOcho": 0,
    //     "contadorFinalMetroOcho": 0,
    //     "galonesMetroOcho": 0,
    //     "calibracionGlpMetroOcho": 0,
    //     "galonesVendidoMetroOcho": 0,
    //     "totalMetroOcho": 0,
    //     "contadorInicialMetroNueve": 0,
    //     "contadorFinalMetroNueve": 0,
    //     "galonesMetroNueve": 0,
    //     "calibracionGlpMetroNueve": 0,
    //     "galonesVendidoMetroNueve": 0,
    //     "totalMetroNueve": 0,
    //     "contadorInicialMetroDiez": 0,
    //     "contadorFinalMetroDiez": 0,
    //     "galonesMetroDiez": 0,
    //     "calibracionGlpMetroDiez": 0,
    //     "galonesVendidoMetroDiez": 0,
    //     "totalMetroDiez": 0,
    //     "contadorInicialMetroDistribucion": 0,
    //     "contadorFinalMetroDistribucion": 0,
    //     "galonesMetroDistribucion": 0,
    //     "calibracionGlpMetroDistribucion": 0,
    //     "galonesVendidoMetroDistribucion": 0,
    //     "totalMetroDistribucion": 0,
    //     "totalGalonesVendidos": 0,
    //     "totalDineroVendido": 0,
    //     "sobranteGalones": 0,
    //     "ventaEfectivo": 0,
    //     "creditoCliente": 0,
    //     "creditoTarjeta": 0,
    //     "tarjetaSolidaridad": 0,
    //     "bonoPrepago": 0,
    //     "cheque": 0,
    //     "total": 0,
    //     "deposito": 0,
    //     "depositoEntity": [
    //       {
    //         "depositoId": 0,
    //         "codigo": "string",
    //         "monto": 0,
    //         "descripcion": "string",
    //         "envasadoraEntity": {
    //           "envasadoraId": 0,
    //           "empresaEntity": {
    //             "empresaId": 0,
    //             "nombre": "string",
    //             "estado": true
    //           },
    //           "envasadoraNombre": "string",
    //           "capacidadTanque": 0,
    //           "capacidadMaximaTanque": 0,
    //           "capacidadIntermediaTanque": 0,
    //           "capacidadMinimaTanque": 0,
    //           "longitud": "string",
    //           "latitud": "string",
    //           "direccion": "string",
    //           "telefono": "string",
    //           "fechaCreacion": "2022-09-26T14:36:21.522Z",
    //           "estatus": true
    //         },
    //         "bancoEntity": {
    //           "id": 0,
    //           "nombre": "string",
    //           "cuenta": "string",
    //           "ejecutivo": "string",
    //           "responsable": "string",
    //           "fecha_creacion": "2022-09-26T14:36:21.522Z",
    //           "estado": true
    //         },
    //         "usuarioEntity": {
    //           "userId": 0,
    //           "nombre": "string",
    //           "apellido": "string",
    //           "email": "string",
    //           "password": "string",
    //           "envasadoraEntity": [
    //             {
    //               "envasadoraId": 0,
    //               "empresaEntity": {
    //                 "empresaId": 0,
    //                 "nombre": "string",
    //                 "estado": true
    //               },
    //               "envasadoraNombre": "string",
    //               "capacidadTanque": 0,
    //               "capacidadMaximaTanque": 0,
    //               "capacidadIntermediaTanque": 0,
    //               "capacidadMinimaTanque": 0,
    //               "longitud": "string",
    //               "latitud": "string",
    //               "direccion": "string",
    //               "telefono": "string",
    //               "fechaCreacion": "2022-09-26T14:36:21.522Z",
    //               "estatus": true
    //             }
    //           ],
    //           "estado": true
    //         },
    //         "fecha": "2022-09-26T14:36:21.522Z",
    //         "hora": "2022-09-26T14:36:21.522Z",
    //         "estado": true
    //       }
    //     ],
    //     "usuarioEntity": {
    //       "userId": 0,
    //       "nombre": "string",
    //       "apellido": "string",
    //       "email": "string",
    //       "password": "string",
    //       "envasadoraEntity": [
    //         {
    //           "envasadoraId": 0,
    //           "empresaEntity": {
    //             "empresaId": 0,
    //             "nombre": "string",
    //             "estado": true
    //           },
    //           "envasadoraNombre": "string",
    //           "capacidadTanque": 0,
    //           "capacidadMaximaTanque": 0,
    //           "capacidadIntermediaTanque": 0,
    //           "capacidadMinimaTanque": 0,
    //           "longitud": "string",
    //           "latitud": "string",
    //           "direccion": "string",
    //           "telefono": "string",
    //           "fechaCreacion": "2022-09-26T14:36:21.522Z",
    //           "estatus": true
    //         }
    //       ],
    //       "estado": true
    //     },
    //     "fechaCierre": "2022-09-26T14:36:21.522Z",
    //     "horaCierre": "2022-09-26T14:36:21.522Z",
    //     "estado": true
    // });
    //     console.log(testFor);
    // }, [])

     const handleFormChangeSave = (event) => {
        const {name, value} = event.target;
        setdepositoGuardar(prev => ({
            ...prev,
            [name]: value
        }));
     };

     const newHandleForm = async () => {
        console.log('is this responding');
        const newField = {
            depositoId: 0,
            codigo: depositoGuardar.codigo,
            monto: depositoGuardar.monto,
            descripcion: depositoGuardar.descripcion,
            envasadoraEntity: {
              envasadoraId: idEnvasadora, //props
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
              fechaCreacion: "2022-09-26T16:26:21.871Z",
              estatus: true
            },
            bancoEntity: {
              id: idBanco, // props
              nombre: "string",
              cuenta: "string",
              ejecutivo: "string",
              responsable: "string",
              fecha_creacion: "2022-09-26T16:26:21.871Z",
              estado: true
            },
            usuarioEntity: {
              userId: idUser, //props
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
                  fechaCreacion: "2022-09-26T16:26:21.871Z",
                  estatus: true
                }
              ],
              estado: true
            },
            fecha: "2022-09-26T16:26:21.871Z",
            hora: "2022-09-26T16:26:21.871Z",
            estado: true
          };

        const request = await fetch('http://10.1.105.205:8080/webapp.metrogas/deposito/save', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newField)
        });
        if (request.status === 201) {
            const json = await request.json();
            console.log(json);
            setdepositosGuardados(prev => ([
                ...prev,
                json
            ]));
        }
        setdepositoGuardar({
          codigo: 0,
          monto: 0,
          descripcion: ''
        })
     };

     const summarizeDepositos = () => {
        let datosDep = [...depositosGuardados];
        let total = 0;
        const totalDep = datosDep.map((deposito) => (total += parseFloat(deposito.monto)));
        const value = totalDep[totalDep.length -1];
        functionSet(prev => ([
            ...prev,
            ...depositosGuardados
        ]))
        setTotalBanco(value);
        setTrigger(false);
     };

     let curr1 = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalDepBanco);



    return (
            <tr>
                <td><button className="btn-td-btn w-100" onClick={()=> setTrigger(true)}> {bancoName}</button></td>
                <td><input className="td-cuadro-input" name="depositosI" type="text" value={curr1} disabled/></td>
                <td>
                {trigger ? <div className="popup-cont">
                    <div className="popup-inner">
                        <label>{bancoName}</label>
                        <div className="anadir-deposito-seccion">
                            <form className="depositos-form">
                                    <div className="popup-form-div d-flex flex-column">
                                        <table className="tt"> {/*Investigar como manejar el ancho del tabla */}
                                            <thead>
                                                <tr>
                                                    <th className="td-d"> <label className="deposito-input-label" htmlFor="codigo">Código:</label> </th>
                                                    <th className="td-d"> <label className="deposito-input-label" htmlFor="monto">Monto:</label> </th>
                                                    <th className="td-d"> <label className="deposito-input-label" htmlFor="descripcion">Descripción:</label> </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="td-d"> <input name="codigo" type="number" value={depositoGuardar.codigo} onChange={handleFormChangeSave} className="deposito-input"/> </td>
                                                    <td className="td-d"> <input name="monto" type="number" value={depositoGuardar.monto} onChange={handleFormChangeSave} className="deposito-input"/> </td>
                                                    <td className="td-d"> <input name="descripcion" type="text" value={depositoGuardar.descripcion} onChange={handleFormChangeSave} className="deposito-input"/> </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                            <div className="input-btn-cont d-flex">
                                              <button type="button" className="crear-field-btn" onClick={newHandleForm}><BsPlusLg size={25} color="green" /></button>
                                            </div>
                                    </div>
                            </form>
                        </div>
                        <form className="depositos-form">
                            {depositosGuardados.map((deposito, index) => (<Deposito key={deposito.depositoId} depositoB={deposito} indexB={index} depositosGuardadosB={depositosGuardados} setdepositosGuardadosB={setdepositosGuardados} />))}
                        </form>
                        <button type="button" className="close-btn" onClick={ () => setTrigger(false) }><CgCloseO size={30} color="rgb(172, 0, 0)" /></button>
                        <button type="button" className="total-depositos"onClick={summarizeDepositos} > guardar</button>
                    </div>
                </div> : ''}
                </td>
            </tr>
    )
};