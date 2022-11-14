import React from "react";

export const CuadreRow = (props) => {
    const {id, fechaCierre, envasadora, precio, totalVendido, deposito, depositos, tarjeta , tarjetas, bono, bonos, creditoCliente, sobrante, setListaDepositos, setListaBonos, setListaLotes} = props; // importar prop-types y arreglar el arr.reduce erros cuando trato de pasar el reduce par aca.

    function addInfo(e) {
        setListaDepositos(depositos);
        setListaLotes(tarjetas);
        setListaBonos(bonos);
        const parent =  e.target.parentNode;
        const div = Array.from(parent.parentNode.children)
        div.forEach((el) => {
            el.classList.remove("active");
        })

        parent.classList.add("active")
    }

    return (
        <tr onClick={(e)=> {addInfo(e)}} style={{cursor: "pointer"}}>
            <td className='td-crud'>{id}</td>
            <td className='td-crud'>{fechaCierre}</td>
            <td className='td-crud'>{envasadora}</td>
            <td className='td-crud'>{precio}</td>
            <td className='td-crud'>{deposito}</td>
            <td className='td-crud'>{tarjeta}</td>
            <td className='td-crud'>{bono}</td>
            <td className='td-crud'>{creditoCliente}</td>
            <td className='td-crud'>{sobrante}</td>
            <td className='td-crud'>{totalVendido}</td>
        </tr>
    );
};