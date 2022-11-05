import React from "react";

export const CuadreRow = (props) => {
    const {id, precio, totalVendido, deposito, tarjetas, bonos, sobrante} = props;

    return (
        <tr>
            <td className='td-crud'>{id}</td>
            <td className='td-crud'>{precio}</td>
            <td className='td-crud'>{totalVendido}</td>
            <td className='td-crud'>{deposito}</td>
            <td className='td-crud'>{tarjetas}</td>
            <td className='td-crud'>{bonos}</td>
            <td className='td-crud'>{sobrante}</td>
        </tr>
    );
};