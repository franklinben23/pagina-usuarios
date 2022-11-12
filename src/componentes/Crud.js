import React, {useEffect, useState} from 'react';
import { usePath } from './PathContext';
import { CuadreRow } from './CuadreRow';
import './estilos/Crud.css';

export const Crud = () => {

    const path = usePath();
    const [listaCuadres, setListaCuadres] = useState([]);

    useEffect(() => {
        const getInfo = async () => {
            try {
                const request = await fetch(`${path}cuadre/all`);
                if (!request.ok) {
                    alert('Hubo un error al tratar de consumir la base de datos, favor revisar conexion o contactar soporte')
                } else {
                    const cuadres = await request.json();
                    console.log(cuadres);
                    setListaCuadres(cuadres)
                }
            } catch (error) {
                
            }
        };
        getInfo();
    }, [])

    const splitString = (str) => {
        if (typeof str === 'string') {
            const string = str.split(' ');
            const lastEl = string[string.length -1];
            return lastEl
        }
        return
    };

    return (
           <div className='crud-main'>
                <h1 className='titulo-registro'>Registro de Cuadres</h1>
                <div className='seccion-de-filtros'>
                    <p className='flltrar-tag'>filtrar por:</p>
                    <div className='filtros'>
                        <input type='text' name='fecha' className='filtro-input' placeholder='fecha'/>
                        <input type='text' name='envasadora' className='filtro-input' placeholder='envasadora'/>
                        <input type='text' name='encargado' className='filtro-input' placeholder='encargado'/>
                        <button type='button' className='btn-filtros'>Aplicar</button>
                    </div>
                </div>
                <div className='lista-de-cuadres'>
                    <table className='tabla-de-cuadres'>
                        <colgroup>
                            <col span="1" style={{width: '10%'}}/>
                            <col span="2" style={{width: '10%'}}/>
                            <col span="3" style={{width: '10%'}}/>
                            <col span="4" style={{width: '10%'}}/>
                            <col span="5" style={{width: '10%'}}/>
                            <col span="6" style={{width: '10%'}}/>
                            <col span="7" style={{width: '10%'}}/>
                            <col span="8" style={{width: '10%'}}/>
                        </colgroup>
                        <thead>
                            <tr>
                                <th className='td-crud'>ID</th>
                                <th className='td-crud td-env'>Envasadora</th>
                                <th className='td-crud'>Precio</th>
                                <th className='td-crud'>Total RD$</th>
                                <th className='td-crud'>Depositos</th>
                                <th className='td-crud'>Tarjetas</th>
                                <th className='td-crud'>Bonogas</th>
                                <th className='td-crud'>sobrante Galones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listaCuadres.map((el, index) => <CuadreRow 
                            key={el.cuadreId}
                            envasadora={el.envasadoraIdEnvasadora.envasadoraNombre}
                            id={el.cuadreId}
                            precio={el.precioActual}
                            totalVendido={Math.floor(el.totalDineroVendido)}
                            deposito={Math.floor(el.totalDineroVendido)} 
                            tarjetas={el.creditoCliente}
                            bonos={el.creditoCliente} 
                            sobrante={el.sobranteGalones}/>)}
                        </tbody>
                    </table>
                </div>
            </div> 
    );
};