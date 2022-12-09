import React from "react";

export const CuadreRow = (props) => {
    const {el, setMetros, id, fechaCierre, envasadora, precio, totalVendido, deposito, depositos, tarjeta , tarjetas, bono, bonos, creditoCliente, sobrante, setListaDepositos, setListaBonos, setListaLotes} = props; // importar prop-types y arreglar el arr.reduce erros cuando trato de pasar el reduce par aca.

    function addInfo(e) {
        setListaDepositos(depositos);
        setListaLotes(tarjetas);
        setListaBonos(bonos);
        setMetros({
            gls1: el.galonesVendidoMetroUno,
            gls2: el.galonesVendidoMetroDos,
            gls3: el.galonesVendidoMetroTres,
            gls4: el.galonesVendidoMetroCuatro,
            gls5: el.galonesVendidoMetroCinco,
            gls6: el.galonesVendidoMetroSeis,
            gls7: el.galonesVendidoMetroSiete,
            gls8: el.galonesVendidoMetroOcho,
            gls9: el.galonesVendidoMetroNueve,
            gls10: el.galonesVendidoMetroDiez,
            glsDIST: el.galonesVendidoMetroDist,
            ttl1: el.totalMetroUno,
            ttl2: el.totalMetroDos,
            ttl3: el.totalMetroTres,
            ttl4: el.totalMetroCuatro,
            ttl5: el.totalMetroCinco,
            ttl6: el.totalMetroSeis,
            ttl7: el.totalMetroSiete,
            ttl8: el.totalMetroOcho,
            ttl9: el.totalMetroNueve,
            ttl10: el.totalMetroDiez,
            ttlDIST: el.totalMetroDistribucion
        })
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
            <td className='td-crud'>{new Intl.NumberFormat({ style: 'decimal' }).format(el.totalGalonesVendidos)}</td>
            <td className='td-crud'>{totalVendido}</td>
        </tr>
    );
};