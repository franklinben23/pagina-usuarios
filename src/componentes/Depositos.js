import React, { useState } from "react";
import { usePath } from "./PathContext";
import './estilos/Depositos.css';
import { Deposito } from './Deposito';
import { CgCloseO } from 'react-icons/cg';
import { BsPlusLg } from 'react-icons/bs';

export const Depositos = (props) => {
    const { bancoName, functionSet, idEnvasadora, idBanco, idUser, setBancoAfuera } = props;

    // const pathHeroku = 'https://cuadre-diario-planta.herokuapp.com/';
    const pathLocal = usePath();

    const [ trigger, setTrigger] = useState(false);
    const [depositosGuardados, setdepositosGuardados] = useState([]);
    const [depositoGuardar, setdepositoGuardar] = useState({
        codigo: 0,
        monto: 0,
        descripcion: ''
    });
    const [totalDepBanco, setTotalBanco] = useState(0);

    const [cargando, setCargando] = useState(false);

     const handleFormChangeSave = (event) => {
        const {name, value} = event.target;
        setdepositoGuardar(prev => ({
            ...prev,
            [name]: value
        }));
     };

     const newHandleForm = async () => {
        setCargando(true);
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

        const request = await fetch(`${pathLocal}deposito/save`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newField)
        });
        if (request.ok) {
            const json = await request.json();
            setCargando(false);
            setdepositosGuardados(prev => ([
                json,
                ...prev
            ]));
        } if (!request.ok) {
          setCargando(false);
          alert('Hay un problema con la conexion, favor revisar accesos a internet o contactar soporte')
        }
        setdepositoGuardar({
          codigo: 0,
          monto: 0,
          descripcion: ''
        })
     };

     const handleKeyPress = (event) => {
      if(event.key === 'Enter'){
        newHandleForm();
      }
    }

     const summarizeDepositos = () => {
        let datosDep = [...depositosGuardados];
        if (datosDep.length === 0 && totalDepBanco === 0){
          return
        } if (datosDep.length >= 1) {
            let total = 0;
            const totalDep = datosDep.map((deposito) => (total += parseFloat(deposito.monto)));
            const value = totalDep[totalDep.length -1];
            functionSet(prev => ([
                ...prev,
                ...depositosGuardados
            ]));
            setBancoAfuera(value);
            setTotalBanco(value);
            setTrigger(false);
        } if (datosDep.length === 0 && totalDepBanco !== 0) {
          setBancoAfuera(0);
          setTotalBanco(0);
          setTrigger(false);
        }
     };

     let curr1 = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalDepBanco);

    return (
            <tr>
                <td><button className="btn-td-btn w-100" onClick={()=> setTrigger(true)}> {bancoName}</button></td>
                <td><input className="td-cuadro-input" name="depositosI" type="text" value={curr1} disabled/></td>
                <td>
                {trigger ? <div className="popup-cont">
                    <div className="popup-inner">
                        <label  className="banco-label">{bancoName}</label>
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
                                                    <td className="td-d"> <input name="codigo" type="number" value={depositoGuardar.codigo} onChange={handleFormChangeSave} onKeyPress={handleKeyPress}  className="deposito-input"/> </td>
                                                    <td className="td-d"> <input name="monto" type="number" value={depositoGuardar.monto} onChange={handleFormChangeSave} onKeyPress={handleKeyPress}  className="deposito-input"/> </td>
                                                    <td className="td-d"> <input name="descripcion" type="text" value={depositoGuardar.descripcion} onKeyPress={handleKeyPress} onChange={handleFormChangeSave} className="deposito-input"/> </td>
                                                </tr>
                                                {cargando ? <tr className="cargando-span">Cargando...</tr> : ''}
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