import React, { useState } from "react";
import './estilos/Depositos.css';

export const Depositos = (props) => {
    const { bancoName } = props;
    const [ trigger, setTrigger] = useState(false);
    const [inputFields, setInputFields] = useState([
        {
            id: 0,
            codigo: 0,
            monto: 0,
            descripcion: '',
            fk_envasadora: '',
            fk_banco: '',
            fk_usuario: '',
            fecha: '',
            hora: '',
            estado: true 
        },
        // {
        //     id: 0,
        //     codigo: 0,
        //     monto: 0,
        //     descripcion: '',
        //     fk_envasadora: '',
        //     fk_banco: '',
        //     fk_usuario: '',
        //     fecha: '',
        //     hora: '',
        //     estado: true 
        // },
        // {
        //     id: 0,
        //     codigo: 0,
        //     monto: 0,
        //     descripcion: '',
        //     fk_envasadora: '',
        //     fk_banco: '',
        //     fk_usuario: '',
        //     fecha: '',
        //     hora: '',
        //     estado: true 
        // }
    ]);
    return (
            <tr>
                <button className="btn-td-btn w-100" onClick={()=> setTrigger(true)}> {bancoName}</button>
                <td><input className="td-cuadro-input" name="depositosI" type="text"/></td>
                <td><input className="td-cuadro-input" name="loteTarjetaI" type="text"/></td>
                <td><input className="td-cuadro-input" name="montoTarjetaI" type="text"/></td>
                <td><input className="td-cuadro-input" name="loteBonogasI" type="text"/></td>
                <td><input className="td-cuadro-input" name="montoBonogasI" type="text"/></td>
                <td>
                {trigger ? <div className="popup-cont">
                    <div className="popup-inner">
                        <label>{bancoName}</label>
                        <form className="depositos-form">
                            {inputFields.map((deposito, index) => {
                                return (
                                   <div key={deposito.codigo} className="popup-form-div">

                                    <table>
                                        <thead>
                                            <tr>
                                                <th> <label className="deposito-input-label" htmlFor="codigo">Código:</label> </th>
                                                <th> <label className="deposito-input-label" htmlFor="monto">Monto:</label> </th>
                                                <th> <label className="deposito-input-label" htmlFor="descripcion">Descripción:</label> </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td> <input name="codigo" className="deposito-input"/> </td>
                                                <td> <input name="monto" className="deposito-input"/> </td>
                                                <td> <input name="descripcion" className="deposito-input"/> </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                        {/* Estos fields de abajo se llenaran con info proveniente de los props */}
                                        {/* <input name="fk_envasadora" className="deposito-input" hidden value={fk_env}/>
                                        <input name="fk_banco" className="deposito-input" hidden value={fk_bank}/>
                                        <input name="fk_usuario" className="deposito-input" hidden value={fk_user}/> */}
                                   </div>
                                )
                            })}
                        </form>
                        <button className="close-btn" onClick={ () => setTrigger(false) }>cerrar</button>
                    </div>
                </div> : ''}
                </td>
            </tr>
    )

};