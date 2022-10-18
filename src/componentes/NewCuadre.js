/*eslint-disable react-hooks/exhaustive-deps*/
import React, {useState, useEffect} from "react";
import "./estilos/newCuadre.css";
import { Depositos } from "./Depositos";
import * as logoImg from './estilos/imagenes/metrogas_logo.png';
import * as tanque1 from './estilos/imagenes/tanques/tnaque_sn35.png';
import * as tanque2 from './estilos/imagenes/tanques/tnaque_sn45.png';
import * as tanque3 from './estilos/imagenes/tanques/tnaque_sn50.png';
import * as tanque4 from './estilos/imagenes/tanques/tnaque_sn65.png';
import * as tanque5 from './estilos/imagenes/tanques/tnaque_sn75.png';
import * as tanque6 from './estilos/imagenes/tanques/tnaque_sn85.png';
import { AiOutlineDelete } from 'react-icons/ai';

export const NewCuadre = () => {

    const [tank2, setTank2] = useState(tanque1);
    const [tank1, setTank1] = useState(tanque1)

    const [active, setActive] = useState(1);

    const [capacidadRegistro, setCapacidadRegistro] = useState({
        existenciaInicialVolumen: 35,
        existenciaInicialGalones: 0,
        existenciaInicialTemperatura: 0,
        existenciaFinalVolumen: 35,
        existenciaFinalGalones: 0,
        existenciaFinalTemperatura: 0
    });

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

    // eslint-disable-next-line
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

    const onChangeAnotaciones= e => {
        const { name, value } = e.target;
        setAnotaciones(prev => ({
          ...prev,
          [name]: parseInt(value)
        }));
      };

      // eslint-disable-next-line
    const [depositos, setDepositos] = useState([]);

    //Seccion lotes
    const [loteActive, setLoteActive] = useState(false);
    const [lotesGuardar, setLotesGuardar] = useState([]); // se va a usar tmbn para el request al enviar.
    const [lotes, setLotes] = useState([]);
    const addLote = () => {// este no va a se funcional hasta proximamente, solo show por ahora.
        if (lotes.length < 5) {
            const newLote = {
                id: 0,
                codigo: "string",
                monto: 0,
                descripcion: "string",
                fecha: "2022-10-13T21:07:30.888Z",
                estado: true,
                activo: true
            }
            setLotes(prev => [
                ...prev,
                newLote
            ])
            setLoteActive(true)
        }
    };
    const saveLote = async () => {
        const lastLote = lotes[lotes.length -1];
        try {
            const request = await fetch('http://10.1.105.205:8080/webapp.metrogas/lote/save', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    id: 0,
                    codigo: lastLote.codigo,
                    monto: lastLote.monto,
                    descripcion: lastLote.descripcion,
                    fecha: "2022-10-17T16:10:56.839Z",
                    estado: true
                })
            });
            if (request.ok) {
                const json = await request.json();
                console.log(json)// retirar cuando funcional
                setLoteActive(false);
                setLotesGuardar(prev => [...prev, json]);
                setLotes(prev =>
                    prev.map((element) => element.codigo === lastLote.codigo ? {...element, activo: false} : element)// Aqui chequeo si estoy recibiendo el elemento correcto, luego en el ternany operator devuelvo el elemento con el activo cambiado si si, o el elemento de turno si no.
                );
            } else {
                throw 'there Has been an error'
            }
            
        } catch (error) {
            alert(error);
        }
    };
    const removeLote = async (index) => {
        const loteToDlt = lotes[index];
        if (loteToDlt.activo === true) {
            setLoteActive(false);
            setLotes(prev =>
                prev.filter((obj, id)=> {
                    return prev[id] !== prev[index];//investigar
                })
            );
        } if (loteToDlt.activo === false) {
            const loteToErase = lotesGuardar.find((lote) => lote.codigo === loteToDlt.codigo);
            try {
                const request = await fetch(`http://10.1.105.205:8080/webapp.metrogas/lote/delete/${loteToErase.id}`, {
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json'
                    }
                });
                if (!request.ok) {
                    alert('Hubo un problema con su conexion, favor revise y vuelva a intentar')
                }
            } catch (error) {
                console.log(error)
            }
            setLotes(prev =>
                prev.filter((obj, id)=> {
                    return prev[id] !== prev[index];
                })
            );
        }
    };
    const handleLoteChange = (index, event) => {
        let data = [...lotes];
        data[index][event.target.name] = event.target.value;
        setLotes(data);
    }


    //Seccion montos
    const [MontosB, setMontosB] = useState([]);
    const addMontoB = () => {// este no va a se funcional hasta proximamente, solo show por ahora.
        if (MontosB.length < 5) {
            const newMonto = {
                id: 0,
                codigo: "string",
                monto: 0,
                descripcion: "string",
                fecha: "2022-10-13T21:07:30.888Z",
                estado: true
            }
            setMontosB(prev => [
                ...prev,
                newMonto
            ])
        }
    };
    const removeMonto = (index) => {
        const data = [...MontosB];
        data.splice(index, 1);
        setMontosB(data);
    };
    // prueba para formula de tabla
    useEffect(()=> {
            const galonesMI = metros.contadorFinalMetroI - metros.contadorInicialMetroI;
            setMetros(prev => ({
                ...prev,
                galonesMetroI: galonesMI
            }))
    }, [metros.contadorInicialMetroI, metros.contadorFinalMetroI])
    useEffect(()=> {
        const glvendI = metros.galonesMetroI - metros.calibracionMetroI;
        const totalMI = glvendI * precio;
        setMetros(prev => ({
            ...prev,
            glsVendidoMetroI: glvendI,
            totalVendidoMetroI: totalMI

        }))
    }, [metros.galonesMetroI, metros.calibracionMetroI])

    useEffect(()=> {
        const galonesMI = metros.contadorFinalMetroII - metros.contadorInicialMetroII;
        setMetros(prev => ({
            ...prev,
            galonesMetroII: galonesMI
        }))
    }, [metros.contadorInicialMetroII, metros.contadorFinalMetroII])
    useEffect(()=> {
        const glvendI = metros.galonesMetroII - metros.calibracionMetroII;
        const totalMI = glvendI * precio;
        setMetros(prev => ({
            ...prev,
            glsVendidoMetroII: glvendI,
            totalVendidoMetroII: totalMI

        }))
    }, [metros.galonesMetroII, metros.calibracionMetroII])

    
    useEffect(()=> {
        const galonesMI = metros.contadorFinalMetroIII - metros.contadorInicialMetroIII;
        setMetros(prev => ({
            ...prev,
            galonesMetroIII: galonesMI
        }))
    }, [metros.contadorInicialMetroIII, metros.contadorFinalMetroIII])
    useEffect(()=> {
        const glvendI = metros.galonesMetroIII - metros.calibracionMetroIII;
        const totalMI = glvendI * precio;
        setMetros(prev => ({
            ...prev,
            glsVendidoMetroIII: glvendI,
            totalVendidoMetroIII: totalMI

        }))
    }, [metros.galonesMetroIII, metros.calibracionMetroIII])

    
    useEffect(()=> {
        const galonesMI = metros.contadorFinalMetroIV - metros.contadorInicialMetroIV;
        setMetros(prev => ({
            ...prev,
            galonesMetroIV: galonesMI
        }))
    }, [metros.contadorInicialMetroIV, metros.contadorFinalMetroIV])
    useEffect(()=> {
        const glvendI = metros.galonesMetroIV - metros.calibracionMetroIV;
        const totalMI = glvendI * precio;
        setMetros(prev => ({
            ...prev,
            glsVendidoMetroIV: glvendI,
            totalVendidoMetroIV: totalMI

        }))
    }, [metros.galonesMetroIV, metros.calibracionMetroIV])

    
    useEffect(()=> {
        const galonesMI = metros.contadorFinalMetroV - metros.contadorInicialMetroV;
        setMetros(prev => ({
            ...prev,
            galonesMetroV: galonesMI
        }))
    }, [metros.contadorInicialMetroV, metros.contadorFinalMetroV])
    useEffect(()=> {
        const glvendI = metros.galonesMetroV - metros.calibracionMetroV;
        const totalMI = glvendI * precio;
        setMetros(prev => ({
            ...prev,
            glsVendidoMetroV: glvendI,
            totalVendidoMetroV: totalMI

        }))
    }, [metros.galonesMetroV, metros.calibracionMetroV])

    useEffect(()=> {
        const galonesMI = metros.contadorFinalMetroVI - metros.contadorInicialMetroVI;
        setMetros(prev => ({
            ...prev,
            galonesMetroVI: galonesMI
        }))
    }, [metros.contadorInicialMetroVI, metros.contadorFinalMetroVI])
    useEffect(()=> {
        const glvendI = metros.galonesMetroVI - metros.calibracionMetroVI;
        const totalMI = glvendI * precio;
        setMetros(prev => ({
            ...prev,
            glsVendidoMetroVI: glvendI,
            totalVendidoMetroVI: totalMI

        }))
    }, [metros.galonesMetroVI, metros.calibracionMetroVI])

    
    useEffect(()=> {
        const galonesMI = metros.contadorFinalMetroVII - metros.contadorInicialMetroVII;
        setMetros(prev => ({
            ...prev,
            galonesMetroVII: galonesMI
        }))
    }, [metros.contadorInicialMetroVII, metros.contadorFinalMetroVII])
    useEffect(()=> {
        const glvendI = metros.galonesMetroVII - metros.calibracionMetroVII;
        const totalMI = glvendI * precio;
        setMetros(prev => ({
            ...prev,
            glsVendidoMetroVII: glvendI,
            totalVendidoMetroVII: totalMI

        }))
    }, [metros.galonesMetroVII, metros.calibracionMetroVII])

    
    useEffect(()=> {
        const galonesMI = metros.contadorFinalMetroVIII - metros.contadorInicialMetroVIII;
        setMetros(prev => ({
            ...prev,
            galonesMetroVIII: galonesMI
        }))
    }, [metros.contadorInicialMetroVIII, metros.contadorFinalMetroVIII])
    useEffect(()=> {
        const glvendI = metros.galonesMetroVIII - metros.calibracionMetroVIII;
        const totalMI = glvendI * precio;
        setMetros(prev => ({
            ...prev,
            glsVendidoMetroVIII: glvendI,
            totalVendidoMetroVIII: totalMI

        }))
    }, [metros.galonesMetroVIII, metros.calibracionMetroVIII])

    
    useEffect(()=> {
        const galonesMI = metros.contadorFinalMetroIX - metros.contadorInicialMetroIX;
        setMetros(prev => ({
            ...prev,
            galonesMetroIX: galonesMI
        }))
    }, [metros.contadorInicialMetroIX, metros.contadorFinalMetroIX])
    useEffect(()=> {
        const glvendI = metros.galonesMetroIX - metros.calibracionMetroIX;
        const totalMI = glvendI * precio;
        setMetros(prev => ({
            ...prev,
            glsVendidoMetroIX: glvendI,
            totalVendidoMetroIX: totalMI

        }))
    }, [metros.galonesMetroIX, metros.calibracionMetroIX])

    
    useEffect(()=> {
        const galonesMI = metros.contadorFinalMetroX - metros.contadorInicialMetroX;
        setMetros(prev => ({
            ...prev,
            galonesMetroX: galonesMI
        }))
    }, [metros.contadorInicialMetroX, metros.contadorFinalMetroX])
    useEffect(()=> {
        const glvendI = metros.galonesMetroX - metros.calibracionMetroX;
        const totalMI = glvendI * precio;
        setMetros(prev => ({
            ...prev,
            glsVendidoMetroX: glvendI,
            totalVendidoMetroX: totalMI

        }))
    }, [metros.galonesMetroX, metros.calibracionMetroX])

    
    useEffect(()=> {
        const galonesMI = metros.contadorFinalMetroDIST - metros.contadorInicialMetroDIST;
        setMetros(prev => ({
            ...prev,
            galonesMetroDIST: galonesMI
        }))
    }, [metros.contadorInicialMetroDIST, metros.contadorFinalMetroDIST])
    useEffect(()=> {
        const glvendI = metros.galonesMetroDIST - metros.calibracionMetroDIST;
        const totalMI = glvendI * precio;
        setMetros(prev => ({
            ...prev,
            glsVendidoMetroDIST: glvendI,
            totalVendidoMetroDIST: totalMI

        }))
    }, [metros.galonesMetroDIST, metros.calibracionMetroDIST])
    // cierre de prueba

    // eslint-disable-next-line
    const [precio, setPrecio] = useState(147.60);
    const precioFormatado = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(precio);

    const onInputChange = e => {
        const { name, value } = e.target;
        setMetros(prev => ({
          ...prev,
          [name]: parseInt(value)
        }));
      };

    const onInputChangeCapacidad = (e) => {
        const { name, value } = e.target;
            setCapacidadRegistro(prev => ({
              ...prev,
              [name]: parseFloat(value)
            }));
    };

    const onInputChangeCapacidad2 = (e) => {// cambiar a rangos por la etiqueta de input, remover if statement a futuro.
        const { name, value } = e.target;
        if (value >= 35 && value <= 85) {
            setCapacidadRegistro(prev => ({
              ...prev,
              [name]: parseFloat(value)
            }));
        } else {

        }
    };

    useEffect(() => {
        if (capacidadRegistro.existenciaFinalVolumen <= 35) {
            setTank2(tanque1)
        } if (capacidadRegistro.existenciaFinalVolumen >= 45) {
            setTank2(tanque2)
        } if (capacidadRegistro.existenciaFinalVolumen >= 50) {
            setTank2(tanque3)
        } if (capacidadRegistro.existenciaFinalVolumen >= 65) {
            setTank2(tanque4)
        } if (capacidadRegistro.existenciaFinalVolumen >= 75) {
            setTank2(tanque5)
        } if (capacidadRegistro.existenciaFinalVolumen >= 80) {
            setTank2(tanque6)
        }

    }, [capacidadRegistro.existenciaFinalVolumen]);

    useEffect(() => {
        if (capacidadRegistro.existenciaInicialVolumen <= 35) {
            setTank1(tanque1)
        } if (capacidadRegistro.existenciaInicialVolumen >= 45) {
            setTank1(tanque2)
        } if (capacidadRegistro.existenciaInicialVolumen >= 50) {
            setTank1(tanque3)
        } if (capacidadRegistro.existenciaInicialVolumen >= 65) {
            setTank1(tanque4)
        } if (capacidadRegistro.existenciaInicialVolumen >= 75) {
            setTank1(tanque5)
        } if (capacidadRegistro.existenciaInicialVolumen >= 80) {
            setTank1(tanque6)
        }

    }, [capacidadRegistro.existenciaInicialVolumen]);

    const changeTotalGalones = () => {
        const totalGalones = metros.glsVendidoMetroI + metros.glsVendidoMetroII + metros.glsVendidoMetroIII +  metros.glsVendidoMetroIV + metros.glsVendidoMetroV + metros.glsVendidoMetroVI + metros.glsVendidoMetroVII + metros.glsVendidoMetroVIII + metros.glsVendidoMetroIX + metros.glsVendidoMetroX + metros.glsVendidoMetroDIST;

        return totalGalones;
    };
    const totalGlsBrutos = () => {
        const totalGalones = metros.galonesMetroI + metros.galonesMetroII + metros.galonesMetroIII + metros.galonesMetroIV + metros.galonesMetroV + metros.galonesMetroVI + metros.galonesMetroVII + metros.galonesMetroVIII + metros.galonesMetroIX + metros.galonesMetroX + metros.galonesMetroDIST;

        return totalGalones;
    };
    const totalCalibracion = () => {
        const totalGalones = metros.calibracionMetroI + metros.calibracionMetroII + metros.calibracionMetroIII + metros.calibracionMetroIV + metros.calibracionMetroV + metros.calibracionMetroVI + metros.calibracionMetroVII + metros.calibracionMetroVIII + metros.calibracionMetroIX + metros.calibracionMetroX + metros.calibracionMetroDIST;

        return totalGalones;
    }

    // Ver forma de usar useMemo para estos valores. y hacer a prueba de NaN.
    const galonesVendidos = changeTotalGalones();
    const galonesBrutos = totalGlsBrutos();
    const galonesCalibracion = totalCalibracion();


    const totalPre = parseFloat(galonesVendidos * precio);
    const totalDinero = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalPre);

    return (
        <div className="cuadre-cont">
            <div className="cuadre-inner-cont">
                <div className="name-logo-section d-flex justify-content-between">
                    <div className="logo">
                        <img alt="ig-logo" src={logoImg.default} className="cuadre-mobile-logo"/>
                    </div>
                    <div className="names-section d-flex flex-column">
                        <div className="page-name">
                            <h1 className="cuadre-mobile-page-h1">Cuadre Diario de Planta</h1>
                        </div>
                        <div className="envasadora d-flex justify-content-between">
                            <p className="envasadora-tag"></p>
                            <span className="envasadora-span">{/* aqui va el nombre de la envasadora tal */}Quebrada Honda </span>
                        </div>
                        <div className="daily-price d-flex justify-content-between w-35 align-self-end">
                            <p className="price-tag">Precio:</p>
                            <span className="price-span">{precioFormatado}</span>
                        </div>
                    </div>
                </div>
                <div className="main-section">
                    <div className="nav-tabs w-100 d-flex">
                        <div className={active === 1 ? "nav-tab nav-tab-active" : "nav-tab"} onClick={()=>{setActive(1)}}>
                            Estado del Tanque
                        </div>
                        <div className={active === 2 ? "nav-tab nav-tab-active" : "nav-tab"} onClick={()=>{setActive(2)}}>
                            Relacion de Metros
                        </div>
                        <div className={active === 3 ? "nav-tab nav-tab-active" : "nav-tab"} onClick={()=>{setActive(3)}}>
                            Depositos
                        </div>
                        <div className={active === 4 ? "nav-tab nav-tab-active" : "nav-tab"} onClick={()=>{setActive(4)}}>
                            Cuadre de Planta
                        </div>
                    </div>
                    <div className="cuadre-contents">
                        <div className={active === 1 ? "cuadre-section estado-tanque main-active" : "cuadre-section estado-tanque"}>
                            <div className="existencia-inicial estado-tanque-section">
                                <p className="estado-tanque-label">Existencia inicial</p>
                                <div className="input-list">
                                    <div className="input-group">
                                        <span className="input-group-tag">Volumen</span>
                                        <input
                                        className="volumen-inicial-input" 
                                        type="number"
                                        value={capacidadRegistro.existenciaInicialVolumen}
                                        name="existenciaInicialVolumen"
                                        onChange={onInputChangeCapacidad2}/>
                                    </div>
                                    <div className="input-group">
                                        <span className="input-group-tag">Galones</span>
                                        <input
                                        className="volumen-inicial-input" 
                                        type="number"
                                        value={capacidadRegistro.existenciaInicialGalones}
                                        name="existenciaInicialGalones"
                                        onChange={onInputChangeCapacidad}/>
                                    </div>
                                    <div className="input-group">
                                        <span className="input-group-tag">Temperatura</span>
                                        <input
                                        className="volumen-inicial-input" 
                                        type="number"
                                        value={capacidadRegistro.existenciaInicialTemperatura}
                                        name="existenciaInicialTemperatura"
                                        onChange={onInputChangeCapacidad}/>
                                    </div>
                                </div>
                            </div>

                            <div className="existencia-final estado-tanque-section">
                                <p className="estado-tanque-label">Existencia Final</p>
                                <div className="input-list">
                                    <div className="input-group">
                                        <span className="input-group-tag">Volumen</span>
                                        <input
                                        className="volumen-inicial-input" 
                                        type="number"
                                        value={capacidadRegistro.existenciaFinalVolumen}
                                        name="existenciaFinalVolumen"
                                        onChange={onInputChangeCapacidad2}/>
                                    </div>
                                    <div className="input-group">
                                        <span className="input-group-tag">Galones</span>
                                        <input
                                        className="volumen-inicial-input" 
                                        type="number"
                                        value={capacidadRegistro.existenciaFinalGalones}
                                        name="existenciaFinalGalones"
                                        onChange={onInputChangeCapacidad}/>
                                    </div>
                                    <div className="input-group">
                                        <span className="input-group-tag">Temp.</span>
                                        <input
                                        className="volumen-inicial-input" 
                                        type="number"
                                        value={capacidadRegistro.existenciaFinalTemperatura}
                                        name="existenciaFinalTemperatura"
                                        onChange={onInputChangeCapacidad}/>
                                    </div>
                                </div>
                                
                            </div>

                            <div className="ilustrations estado-tanque-section">
                                <div className="initial-ilustration ilustration">

                                    <div className="tank-graphic">
                                        <p className="tanque-tag"> Existencia Inicial</p>
                                        <p className="tank-tag">{capacidadRegistro.existenciaInicialVolumen}%</p>
                                        <img src={tank1.default} alt="img-1" className="tank-img-graphic"/>
                                    </div>
                                </div>
                                <div className="final-ilustration ilustration">
                                    <div className="tank-graphic">
                                        <p className="tanque-tag"> Existencia Final</p>
                                        <p className="tank-tag">{capacidadRegistro.existenciaFinalVolumen}%</p>
                                        <img src={tank2.default} alt="img-1" className="tank-img-graphic"/>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="existencia-final estado-section">
                                <p className="estado-tanque-label d-block">Existencia Final</p>
                            </div>
                            <div className="ilustrations estado-section">

                            </div> */}

                        </div>
                        <div className={active === 2 ? "cuadre-section relacion-metros main-active flex-column" : "cuadre-section relacion-metros"}>
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
                                            <td className="td-h">Contador Incial</td>
                                            <td><input className="td-cuadre-input" name="contadorInicialMetroI" min="0" value={metros.contadorInicialMetroI} onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="contadorInicialMetroII" min="0" value={metros.contadorInicialMetroII} onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="contadorInicialMetroIII" min="0" value={metros.contadorInicialMetroIII} onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="contadorInicialMetroIV" min="0" value={metros.contadorInicialMetroIV} onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="contadorInicialMetroV" min="0" value={metros.contadorInicialMetroV} onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="contadorInicialMetroVI" min="0" value={metros.contadorInicialMetroVI} onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="contadorInicialMetroVII" min="0" value={metros.contadorInicialMetroVII} onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="contadorInicialMetroVIII" min="0" value={metros.contadorInicialMetroVIII} onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="contadorInicialMetroIX" min="0" value={metros.contadorInicialMetroIX} onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="contadorInicialMetroX" min="0" value={metros.contadorInicialMetroX} onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="contadorInicialMetroDIST" min="0" value={metros.contadorInicialMetroDIST} onChange={onInputChange} type="number"/></td>
                                        </tr>
                                        <tr>
                                            <td className="td-h">Contador Final</td>
                                            <td><input className="td-cuadre-input" name="contadorFinalMetroI" min="0" value={metros.contadorFinalMetroI} onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="contadorFinalMetroII" min="0" value={metros.contadorFinalMetroII} onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="contadorFinalMetroIII" min="0" value={metros.contadorFinalMetroIII} onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="contadorFinalMetroIV" min="0" value={metros.contadorFinalMetroIV} onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="contadorFinalMetroV" min="0" value={metros.contadorFinalMetroV} onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="contadorFinalMetroVI" min="0" value={metros.contadorFinalMetroVI} onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="contadorFinalMetroVII" min="0" value={metros.contadorFinalMetroVII} onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="contadorFinalMetroVIII" min="0" value={metros.contadorFinalMetroVIII} onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="contadorFinalMetroIX" min="0" value={metros.contadorFinalMetroIX} onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="contadorFinalMetroX" min="0" value={metros.contadorFinalMetroX} onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="contadorFinalMetroDIST" min="0" value={metros.contadorFinalMetroDIST} onChange={onInputChange} type="number"/></td>
                                        </tr>
                                        <tr>
                                            <td className="td-h">Galones</td>
                                            <td><input className="td-cuadre-input" min="0" name="galonesMetroI" disabled value={metros.galonesMetroI}  onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="galonesMetroII" min="0" disabled value={metros.galonesMetroII}  onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="galonesMetroIII" min="0" disabled value={metros.galonesMetroIII}  onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="galonesMetroIV" min="0" disabled value={metros.galonesMetroIV}  onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="galonesMetroV" min="0" disabled value={metros.galonesMetroV}  onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="galonesMetroVI" min="0" disabled value={metros.galonesMetroVI}  onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="galonesMetroVII" min="0" disabled value={metros.galonesMetroVII}  onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="galonesMetroVIII" min="0" disabled value={metros.galonesMetroVIII}  onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="galonesMetroIX" min="0" disabled value={metros.galonesMetroIX}  onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="galonesMetroX" min="0" disabled value={metros.galonesMetroX}  onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="galonesMetroDIST" min="0" disabled value={metros.galonesMetroDIST}  onChange={onInputChange} type="number"/></td>
                                        </tr>
                                        <tr>
                                            <td className="td-h">Calibración GLS</td>
                                            <td><input className="td-cuadre-input" name="calibracionMetroI" min="0" value={metros.calibracionMetroI} onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="calibracionMetroII" min="0" value={metros.calibracionMetroII} onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="calibracionMetroIII" min="0" value={metros.calibracionMetroIII} onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="calibracionMetroIV" min="0" value={metros.calibracionMetroIV} onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="calibracionMetroV" min="0" value={metros.calibracionMetroV} onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="calibracionMetroVI" min="0" value={metros.calibracionMetroVI} onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="calibracionMetroVII" min="0" value={metros.calibracionMetroVII} onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="calibracionMetroVIII" min="0" value={metros.calibracionMetroVIII} onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="calibracionMetroIX" min="0" value={metros.calibracionMetroIX} onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="calibracionMetroX" min="0" value={metros.calibracionMetroX} onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="calibracionMetroDIST" min="0" value={metros.calibracionMetroDIST} onChange={onInputChange} type="number"/></td>
                                        </tr>
                                        <tr>
                                            <td className="td-h">GLS vendido</td>
                                            <td><input className="td-cuadre-input" name="glsVendidoMetroI" min="0" disabled value={metros.glsVendidoMetroI} onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="glsVendidoMetroII" min="0" disabled value={metros.glsVendidoMetroII} onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="glsVendidoMetroIII" min="0" disabled value={metros.glsVendidoMetroIII} onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="glsVendidoMetroIV" min="0" disabled value={metros.glsVendidoMetroIV} onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="glsVendidoMetroV" min="0" disabled value={metros.glsVendidoMetroV} onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="glsVendidoMetroVI" min="0" disabled value={metros.glsVendidoMetroVI} onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="glsVendidoMetroVII" min="0" disabled value={metros.glsVendidoMetroVII} onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="glsVendidoMetroVIII" min="0" disabled value={metros.glsVendidoMetroVIII} onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="glsVendidoMetroIX" min="0" disabled value={metros.glsVendidoMetroIX} onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="glsVendidoMetroX" min="0" disabled value={metros.glsVendidoMetroX} onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="glsVendidoMetroDIST" min="0" disabled value={metros.glsVendidoMetroDIST} onChange={onInputChange} type="number"/></td>
                                        </tr>
                                        <tr>
                                            <td className="td-h">Total RD$</td>
                                            <td><input className="td-cuadre-input" name="totalVendidoMetroI" disabled value={metros.totalVendidoMetroI} onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="totalVendidoMetroII" disabled value={metros.totalVendidoMetroII} onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="totalVendidoMetroIII" disabled value={metros.totalVendidoMetroIII} onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="totalVendidoMetroIV" disabled value={metros.totalVendidoMetroIV} onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="totalVendidoMetroV" disabled value={metros.totalVendidoMetroV} onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="totalVendidoMetroVI" disabled value={metros.totalVendidoMetroVI} onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="totalVendidoMetroVII" disabled value={metros.totalVendidoMetroVII} onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="totalVendidoMetroVIII" disabled value={metros.totalVendidoMetroVIII} onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="totalVendidoMetroIX" disabled value={metros.totalVendidoMetroIX} onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="totalVendidoMetroX" disabled value={metros.totalVendidoMetroX} onChange={onInputChange} type="number"/></td>
                                            <td><input className="td-cuadre-input" name="totalVendidoMetroDIST" disabled value={metros.totalVendidoMetroDIST} onChange={onInputChange} type="number"/></td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            <div className="totales seccion d-flex">
                                <div className="totales-side side-1">
                                    <div className="totales-total">Total Galones: 
                                        <input 
                                        className="input-totales" 
                                        name=" totalGalonesVendidos" 
                                        type="number"
                                        disabled
                                        value={galonesBrutos}/>
                                    </div>
                                    <div className="totales-total abajo">Total Calibración: 
                                        <input
                                        className="input-totales" 
                                        name="totalDineroVendido"
                                        value={galonesCalibracion}
                                        disabled
                                        type="text"/>
                                    </div>
                                </div>
                                <div className="totales-side side-2">
                                    <div className="totales-total">GLS Vendido: 
                                        <input 
                                        className="input-totales" 
                                        name=" totalGalonesVendidos" 
                                        type="number"
                                        disabled
                                        value={galonesVendidos}/>
                                    </div>
                                    <div className="totales-total abajo">Total RD$: 
                                        <input
                                        className="input-totales" 
                                        name="totalDineroVendido"
                                        value={totalDinero}
                                        disabled
                                        type="text"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={active === 3 ? "cuadre-section depositos-cont main-active" : "cuadre-section depositos-cont"}>
                            <div className="depositos">
                                <h5 className="deposito-header"> Depositos</h5>
                                <table className="tabla-cuadro justify-self-right">
                                    <thead className="tabla-cuadro-header">
                                        <tr>
                                            <th>Bancos</th>
                                            <th>Depósitos</th>
                                        </tr>
                                    </thead>
                                    <tbody className="tabla-cuadro-body">
                                        { bancos.map((banco) => (<Depositos bancoName={banco.nombre} functionSet={setDepositos} key={banco.nombre}/>)) }
                                    </tbody>
                                </table>
                            </div>
                            <div className="lotes depositos">
                                <h5 className="deposito-header"> Tarjetas</h5>
                                {lotes.map((obj, index) => <form key={index} className="lote-cont d-flex">
                                    <input className="lote-input un" type="text" name="codigo" placeholder="codigo" onChange={(e)=>{handleLoteChange(index, e)}} disabled={obj.activo ? false : true} />
                                    <input className="lote-input deux" type="text" name="monto" placeholder="monto" onChange={(e)=>{handleLoteChange(index, e)}} disabled={obj.activo ? false : true} />
                                    <button type="button" className="btn-lote-delete" onClick={()=>{removeLote(index)}}> <AiOutlineDelete size={23} color="red"/></button>
                                </form>
                                )}
                                {loteActive ? <button type="button" className="lote-btn btn-td-btn" onClick={saveLote}> Guardar Lote</button> : <button type="button" className="lote-btn btn-td-btn" onClick={addLote}> Añadir Lote</button>}
                            </div>
                            <div className="lotes depositos">
                                <h5 className="deposito-header"> Bonogas</h5>
                                {MontosB.map((obj, index) => <form key={index} className="lote-cont d-flex"> {/** esto solo es para enseñar, terminar fucionalidad pendiente */}
                                    <input className="lote-input un" type="text"/>
                                    <input className="lote-input deux" type="text"/>
                                    <button type="button" className="btn-lote-delete" onClick={()=>{removeMonto(index)}}> <AiOutlineDelete size={23} color="red"/></button>
                                </form>
                                )}
                                <button type="button" className="lote-btn btn-td-btn" onClick={addMontoB}> Añadir Monto Bonogas</button>
                            </div>
                        </div>
                        <div className={active === 4 ? "cuadre-section cuadre-cuadre main-active" : "cuadre-section cuadre-cuadre"}>
                            <div className="anotaciones d-flex">
                                <div className="division-uno">
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
                                </div>
                                <div className="division-dos">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};