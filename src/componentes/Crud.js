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
                    setListaCuadres(cuadres)
                    console.log(listaCuadres)
                }
            } catch (error) {
                
            }
        };
        getInfo();
    }, [])

    // const bonos = listaCuadres[0].bonogasEntity.reduce(((r, a) => r + a.monto), 0)

    return (
        <div className='crud-cont'>
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
                        <thead>
                            <tr>
                                <th className='td-crud'>ID</th>
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
        </div>
    );
};