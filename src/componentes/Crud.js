import React, {useEffect, useState} from 'react';
import { usePath } from './PathContext';
import { CuadreRow } from './CuadreRow';
import './estilos/Crud.css';

export const Crud = () => {

    const path = usePath();
    const [listaCuadres, setListaCuadres] = useState([]);
    const [listaDepositos, setListaDepositos] = useState([]);
    const [listaBonos, setListaBonos] = useState([]);
    const [listaLotes, setListaLotes] = useState([]);
    const [metros, setMetros] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        const getInfo = async () => {
            try {
                const request = await fetch(`${path}cuadre/all`, {signal: controller.signal});
                if (!request.ok) {
                    alert('Hubo un error al tratar de consumir la base de datos, favor revisar conexion o contactar soporte')
                } else {
                    const cuadres = await request.json();
                    setListaCuadres(cuadres)
                }
            } catch (error) {
                
            }
        };
        getInfo();
        return () => controller.abort();
    }, [])

    const listaFinal = listaCuadres.filter((el) => el.envasadoraIdEnvasadora.envasadoraNombre !== "Tecnología envasadora")
    .sort((a,b) => b.cuadreId - a.cuadreId);

    const splitString = (str) => {
        if (typeof str === 'string') {
            const string = str.split(' ');
            const lastEl = string[string.length -1];
            return lastEl
        }
        return
    };

    const reduceArray = (arr) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(arr.reduce((acc, obj) => acc + obj.monto  ,0));
    }

    return (
           <div className='crud-main'>
                <h1 className='titulo-registro'>Registros de Cuadres</h1>
                <div className='seccion-de-filtros'>
                    <p className='flltrar-tag'>filtrar por:</p>
                    <div className='filtros'>
                        <input type='date' name='fecha' className='filtro-input' placeholder='fecha'/>
                        <input type='date' name='fecha' className='filtro-input' placeholder='fecha'/>
                        <input type='text' name='envasadora' className='filtro-input' placeholder='envasadora'/>
                        <input type='text' name='encargado' className='filtro-input' placeholder='encargado'/>
                        <button type='button' className='btn-filtros'>Aplicar</button>
                    </div>
                </div>
                <div className='tabla-div una'>
                        <h5 className='cc'>Lista de Cuadres:</h5>
                        <table className='tabla-de-cuadres'>
                            {/* <colgroup>
                                <col span="1" style={{width: '5%'}}/>
                                <col span="2" style={{width: '20%'}}/>
                                <col span="3" style={{width: '5%'}}/>
                                <col span="4" style={{width: '5%'}}/>
                                <col span="5" style={{width: '5%'}}/>
                                <col span="6" style={{width: '5%'}}/>
                                <col span="7" style={{width: '5%'}}/>
                                <col span="8" style={{width: '5%'}}/>
                            </colgroup> */}
                            <thead>
                                <tr>
                                    <th className='td-crud'>ID</th>
                                    <th className='td-crud'>Fecha</th>
                                    <th className='td-crud'>Envasadora</th>
                                    <th className='td-crud'>Precio</th>
                                    <th className='td-crud'>Depositos</th>
                                    <th className='td-crud'>Tarjetas</th>
                                    <th className='td-crud'>Bonogas</th>
                                    <th className='td-crud'>Crédito Cliente</th>
                                    <th className='td-crud'>sobrante Galones</th>
                                    <th className='td-crud'>Galones Vendidos</th>
                                    <th className='td-crud'>Total RD$</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listaFinal.map((el, index) => <CuadreRow
                                el={el}
                                setMetros={setMetros}
                                key={el.cuadreId}
                                envasadora={el.envasadoraIdEnvasadora.envasadoraNombre}
                                id={el.cuadreId}
                                fechaCierre={el.fechaCuadre}
                                precio={el.precioActual}
                                totalVendido={new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(el.totalDineroVendido)}
                                deposito={reduceArray(el.depositoEntity)}
                                depositos={el.depositoEntity}
                                tarjeta={reduceArray(el.loteEntity)}
                                tarjetas={el.loteEntity}
                                bono={reduceArray(el.bonogasEntity)}
                                bonos={el.bonogasEntity}
                                creditoCliente={el.creditoCliente}
                                sobrante={el.sobranteGalones}
                                setListaDepositos={setListaDepositos}
                                setListaBonos={setListaBonos}
                                setListaLotes={setListaLotes}/>)}
                            </tbody>
                        </table>
                    </div>
                <div className='lista-de-cuadres d-flex'>
                    <div className='tabla-div dos'>
                        {
                            listaDepositos.length ?
                            <div className='sec-cont'> 
                                <h5 className='titulo-sec'>Detalles de Depósito:</h5>
                                <table className='tabla-de-cuadres'>
                                    <thead>
                                        <tr>
                                            <th className='td-crud'>ID</th>
                                            <th className='td-crud'>Código</th>
                                            <th className='td-crud'>Monto</th>
                                            <th className='td-crud'>Descripción</th>
                                            <th className='td-crud'>Banco</th>
                                            <th className='td-crud'>envasadora</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {listaDepositos.map((el) => <tr key={el.id}>
                                                <td className='td-crud'>{el.depositoId}</td>
                                                <td className='td-crud'>{el.codigo}</td>
                                                <td className='td-crud'>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(el.monto)}</td>
                                                <td className='td-crud'>{el.descripcion}</td>
                                                <td className='td-crud'>{el.bancoEntity.nombre}</td>
                                                <td className='td-crud'>{el.envasadoraEntity.envasadoraNombre}</td>
                                            </tr>
                                        )}
                                    </tbody>
                                    </table>
                                </div> :
                                <h5 className='empty-arr-span'>Favor seleccione una lista</h5>
                        }
                    </div>
                    <div className='tabla-div tres'>
                        {
                            listaLotes.length ?
                            <div className='sec-cont'>
                                <h5 className='titulo-sec'>Detalles de Lotes:</h5>
                                    <table className='tabla-de-cuadres tres'>
                                        <thead>
                                            <tr>
                                                <th className='td-crud'>ID</th>
                                                <th className='td-crud'>Código</th>
                                                <th className='td-crud'>Monto</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {listaLotes.map((el) => <tr key={el.id}>
                                                <td className='td-crud'>{el.id}</td>
                                                <td className='td-crud'>{el.codigo}</td>
                                                <td className='td-crud'>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(el.monto)}</td>
                                            </tr>
                                        )}
                                        </tbody>
                                    </table>
                                </div>     :
                                <h5 className='empty-arr-span'>Favor seleccione una lista</h5>
                            }
                    </div>
                    <div className='tabla-div cuatro'>
                        {
                            listaBonos.length ?
                            <div className='sec-cont'>
                                    <h5 className='titulo-sec'>Detalles de Montos Bonogas:</h5>
                                    <table className='tabla-de-cuadres tres'>
                                        <thead>
                                            <tr>
                                                <th className='td-crud'>ID</th>
                                                <th className='td-crud'>Código</th>
                                                <th className='td-crud'>Monto</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {listaBonos.map((el) => <tr key={el.id}>
                                                <td className='td-crud'>{el.id}</td>
                                                <td className='td-crud'>{el.codigo}</td>
                                                <td className='td-crud'>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(el.monto)}</td>
                                            </tr>
                                        )}
                                        </tbody>
                                    </table>
                                </div> :
                                <h5 className='empty-arr-span'>Favor seleccione una lista</h5>
                            }
                    </div>
                </div>
                <div className='tabla-div cinco'>
                    {
                        metros ? 
                        <div className='sec-cont'>
                            <h5 className='titulo-sec'>Detalles de Metros envasadora:</h5>
                            <table className='tabla-de-cuadres'>
                            <thead>
                                <tr>
                                    <th className='td-crud'>Tipo</th>
                                    <th className='td-crud'>Metro I</th>
                                    <th className='td-crud'>Metro II</th>
                                    <th className='td-crud'>Metro III</th>
                                    <th className='td-crud'>Metro IV</th>
                                    <th className='td-crud'>Metro V</th>
                                    <th className='td-crud'>Metro VI</th>
                                    <th className='td-crud'>Metro VII</th>
                                    <th className='td-crud'>Metro VIII</th>
                                    <th className='td-crud'>Metro IX</th> 
                                    <th className='td-crud'>Metro X</th>
                                    <th className='td-crud'>Metro DIST</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='td-crud'>Gls Vendido</td>
                                    <td className='td-crud'>{metros.gls1}</td>
                                    <td className='td-crud'>{metros.gls2}</td>
                                    <td className='td-crud'>{metros.gls3}</td>
                                    <td className='td-crud'>{metros.gls4}</td>
                                    <td className='td-crud'>{metros.gls5}</td>
                                    <td className='td-crud'>{metros.gls6}</td>
                                    <td className='td-crud'>{metros.gls7}</td>
                                    <td className='td-crud'>{metros.gls8}</td>
                                    <td className='td-crud'>{metros.gls9}</td>
                                    <td className='td-crud'>{metros.gls10}</td>
                                    <td className='td-crud'>{metros.glsDIST}</td>
                                </tr>
                                <tr>
                                    <td className='td-crud'>Total Vendido</td>
                                    <td className='td-crud'>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(metros.ttl1)}</td>
                                    <td className='td-crud'>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(metros.ttl2)}</td>
                                    <td className='td-crud'>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(metros.ttl3)}</td>
                                    <td className='td-crud'>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(metros.ttl4)}</td>
                                    <td className='td-crud'>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(metros.ttl5)}</td>
                                    <td className='td-crud'>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(metros.ttl6)}</td>
                                    <td className='td-crud'>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(metros.ttl7)}</td>
                                    <td className='td-crud'>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(metros.ttl8)}</td>
                                    <td className='td-crud'>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(metros.ttl9)}</td>
                                    <td className='td-crud'>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(metros.ttl10)}</td>
                                    <td className='td-crud'>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(metros.ttlDIST)}</td>
                                </tr>
                            </tbody>
                            </table>
                        </div> :
                        <h5 className='empty-arr-span'>Favor seleccione una lista</h5>
                    }
                    
                </div>
            </div> 
    );
};