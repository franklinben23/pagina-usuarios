/*eslint-disable react-hooks/exhaustive-deps*/
import React, {useState, useEffect, useMemo} from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { usePath } from "./PathContext.js";
import "./estilos/newCuadre.css";
import { Depositos } from "./Depositos";
import { logOut } from "../redux/user/userInfo";
import * as logoImg from './estilos/imagenes/metrogas_logo.png';
import * as tanque1 from './estilos/imagenes/tanques/tnaque_sn35.png';
import * as tanque2 from './estilos/imagenes/tanques/tnaque_sn45.png';
import * as tanque3 from './estilos/imagenes/tanques/tnaque_sn50.png';
import * as tanque4 from './estilos/imagenes/tanques/tnaque_sn65.png';
import * as tanque5 from './estilos/imagenes/tanques/tnaque_sn75.png';
import * as tanque6 from './estilos/imagenes/tanques/tnaque_sn85.png';
import { AiOutlineDelete } from 'react-icons/ai';

export const NewCuadre = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem('Authenticated')) || false;
        if (!loggedInUser) {
            navigate('/');
        }
        const getApiInfo = async () => {
           try {
               const precioRequest = await fetch(`${pathLocal}precio/getglp`); //hablar para cambiar endpoints
               if (precioRequest.ok) {
                const json = await precioRequest.json();
                const un = json[0];
                const precio = un.precio;
                setPrecio(precio);
               }
               else {
                   throw 'no se pudo realizar la conexion, revise la conexion o contacte soporte'
               }
           } catch (error) {
               alert(error) //investigar styling de alerts
           }
       }
       const getInventario = async () => {
        try {
            const request = await fetch(`${pathLocal}/inventario/altual`);
            const json = await request.json();
            if(request.ok) {
                const obj = json.findLast(el => el.envasadoraEntity.envasadoraId === envasadoraId);
                setGlpPercentage(obj.porcentajeGLP);
                setGlpEx(obj.existenciaGLP)
                setInventarioId(obj.inventarioId);
                setMetros(prev => ({
                    ...prev,
                    contadorInicialMetroI: obj.nuevoContadorInicialMetroUno,
                    contadorInicialMetroII: obj.nuevoContadorInicioMetroDos,
                    contadorInicialMetroIII: obj.nuevoContadorInicioMetroTres,
                    contadorInicialMetroIV: obj.nuevoContadorInicioMetroCuatro,
                    contadorInicialMetroV: obj.nuevoContadorInicioMetroCinco,
                    contadorInicialMetroVI: obj.nuevoContadorInicioMetroSeis,
                    contadorInicialMetroVII: obj.nuevoContadorInicioMetroSiete,
                    contadorInicialMetroVIII: obj.nuevoContadorInicioMetroOcho,
                    contadorInicialMetroIX: obj.nuevoContadorInicioMetroNueve,
                    contadorInicialMetroX: obj.nuevoContadorInicioMetroDiez,
                    contadorInicialMetroDIST: obj.nuevoContadorInicioMetroDistribucion,
                    contadorFinalMetroI: obj.nuevoContadorInicialMetroUno,
                    contadorFinalMetroII: obj.nuevoContadorInicioMetroDos,
                    contadorFinalMetroIII: obj.nuevoContadorInicioMetroTres,
                    contadorFinalMetroIV: obj.nuevoContadorInicioMetroCuatro,
                    contadorFinalMetroV: obj.nuevoContadorInicioMetroCinco,
                    contadorFinalMetroVI: obj.nuevoContadorInicioMetroSeis,
                    contadorFinalMetroVII: obj.nuevoContadorInicioMetroSiete,
                    contadorFinalMetroVIII: obj.nuevoContadorInicioMetroOcho,
                    contadorFinalMetroIX: obj.nuevoContadorInicioMetroNueve,
                    contadorFinalMetroX: obj.nuevoContadorInicioMetroDiez,
                    contadorFinalMetroDIST: obj.nuevoContadorInicioMetroDistribucion,
                }))
            }if(!request.ok) {
                alert('inventario end point ha tenido problemas')
            }
        } catch (error) {
            
        }
       }
       getApiInfo();
       getInventario();
       
   }, [])

    const pathLocal = usePath();

    const userBlock = useSelector((state) => state.userInfo);

    const envasadora = userBlock.envasadoraEntity[0];
    const capacidadTanque = envasadora.capacidadTanqueUno;
    const capacidadMinima = envasadora.capacidadMinimaTanqueUno;
    const capacidadMaxima = envasadora.capacidadMaximaTanqueUno;
    const capacidadIntermedia = envasadora.capacidadIntermediaTanqueUno;

    const envasadoraId = envasadora.envasadoraId;
    const userId = userBlock.userId;
    const bancoId = envasadora.bancoEntity.id;

    const envName = envasadora.envasadoraNombre; // intentar decunstructing

    const bancos = (envasadora.bancoEntity);
    console.log(bancos);
    const [precio, setPrecio] = useState(0);
    const precioFormatado = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(precio);
    const  [glpPercentage, setGlpPercentage] = useState('');
    const  [glpEx, setGlpEx] = useState('');

    const [inventarioId, setInventarioId] = useState('');

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

    const [tank1, setTank1] = useState(tanque1)
    const [active, setActive] = useState(2);

    // eslint-disable-next-line

    const [anotaciones, setAnotaciones] = useState({
        sobranteGalones: 0,
        ventaEfectivo: 0,
        creditoCliente: 0,
        creditoTarjeta: 0,
        tarjetaSolidaridad: 0,
        bonoPrepago: 0,
        cheque: 0,
        total: 0,
        deposito: 0,
        otros: 0,
        existenciaFinal: 0
    });
    const onChangeAnotaciones= e => {
        const { name, value } = e.target;
        setAnotaciones(prev => ({
          ...prev,
          [name]: parseInt(value)
        }));
      };

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
            const request = await fetch(`${pathLocal}lote/save`, {
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
                const request = await fetch(`${pathLocal}lote/delete/${loteToErase.id}`, {
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
            setLotesGuardar(prev =>
                prev.filter((obj) => {
                    return obj.codigo !== loteToErase.codigo;
                }
                )
            );
        }
    };
    const handleLoteChange = (index, event) => {
        let data = [...lotes];
        data[index][event.target.name] = event.target.value;
        setLotes(data);
    }


    //Seccion montos
    const [montoActive, setMontoActive] = useState(false);
    const [MontosB, setMontosB] = useState([]);
    const [montosGuardar, setMontosGuardar] = useState([]);
    const addMontoB = () => {
        if (MontosB.length < 5) {
            const newMonto = {
                id: 0,
                codigo: "string",
                monto: 0,
                descripcion: "string",
                fecha: "2022-10-13T21:07:30.888Z",
                activo: true,
                estado: true
            }
            setMontosB(prev => [
                ...prev,
                newMonto
            ]);
            setMontoActive(true);
        }
    };
    const saveMonto = async () => {
        const LastMonto = MontosB[MontosB.length -1];
        try {
            const request = await fetch(`${pathLocal}bonogas/save`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    id: 0,
                    codigo: LastMonto.codigo,
                    monto: LastMonto.monto,
                    descripcion: LastMonto.descripcion,
                    fecha: "2022-10-17T16:10:56.839Z",
                    estado: true
                })
            });
            if (request.ok) {
                const json = await request.json();
                setMontoActive(false);
                setMontosGuardar(prev => [...prev, json]);
                setMontosB(prev =>
                    prev.map((element) => element.codigo === LastMonto.codigo ? {...element, activo: false} : element)// Aqui chequeo si estoy recibiendo el elemento correcto, luego en el ternany operator devuelvo el elemento con el activo cambiado si si, o el elemento de turno si no.
                );
            } else {
                throw 'there Has been an error'
            }
            
        } catch (error) {
            alert(error);
        }
    };
    const removeMonto = async (index) => {
        const montoToDlt = MontosB[index];
        if (montoToDlt.activo === true) {
            setMontoActive(false);
            setMontosB(prev =>
                prev.filter((obj, id)=> {
                    return prev[id] !== prev[index];
                })
            );
        } if (montoToDlt.activo === false) {
            const montoToErase = montosGuardar.find((monto) => monto.codigo === montoToDlt.codigo);
            try {
                const request = await fetch(`${pathLocal}bonogas/delete/${montoToErase.id}`, {
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
            setMontosB(prev =>
                prev.filter((obj, id)=> {
                    return prev[id] !== prev[index];
                })
            );
            setMontosGuardar(prev =>
                prev.filter((obj) => {
                    return obj.codigo !== montoToErase.codigo;
                }
                )
            );
        }
    };
    const handleMontoChange = (index, event) => {
        let data = [...MontosB];
        data[index][event.target.name] = event.target.value;
        setMontosB(data);
    };

          // eslint-disable-next-line
          const [depositos, setDepositos] = useState([]);
          const [depositoAdentro, setDepositoAdentro] = useState(0);
          const depositosFormatado = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(depositoAdentro);
      
          const lotesFunction = () => lotesGuardar.reduce((r, a ) => r + a.monto, 0);
          const totalLotePre = useMemo(() => {
              const actlotes = lotesFunction();
              return actlotes
          }, [lotesGuardar]);
          const lotesFormatado = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalLotePre);
      
          const montosFunction = () => montosGuardar.reduce((r, a ) => r + a.monto, 0);
          const totalMontoPre = useMemo(() => {
              const actMontos = montosFunction();
              return actMontos
          }, [montosGuardar]);
          const MontosFormatado = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalMontoPre);


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

    const onInputChange = e => {
        const { name, value } = e.target;
        setMetros(prev => ({
          ...prev,
          [name]: parseFloat(value)
        }));
      };

    useEffect(() => {
        if (glpPercentage <= 35) {
            setTank1(tanque1)
        } if (glpPercentage >= 45) {
            setTank1(tanque2)
        } if (glpPercentage >= 50) {
            setTank1(tanque3)
        } if (glpPercentage >= 65) {
            setTank1(tanque4)
        } if (glpPercentage >= 75) {
            setTank1(tanque5)
        } if (glpPercentage >= 80) {
            setTank1(tanque6)
        }

    }, [glpPercentage]);

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

    // const TotalesCalc = () => {
    //     const counter = anotaciones.creditoCliente + depositoAdentro + totalMontoPre + anotaciones.bonoPrepago + anotaciones.cheque;
    //     return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(counter);
    // }
    // const totalTotal = TotalesCalc();

    const [cuadreNuevo, setCuadreNuevo] = useState(false);

    // const [requestSent, setRequestSent] = useState();
    const saveInventario = async () => {
        const glsActual = parseInt(glpEx) - galonesVendidos - anotaciones.otros;
        const porcentajeGlp = glsActual / parseInt(capacidadTanque) * 100;

        const block = {
            "inventarioId": 0,
            "envasadoraEntity": {
              "envasadoraId": envasadoraId,
              "empresaEntity": {
                "empresaId": 0,
                "nombre": "string",
                "estado": true
              },
              "bancoEntity": {
                "id": 0,
                "nombre": "string",
                "cuenta": "string",
                "ejecutivo": "string",
                "responsable": "string",
                "fecha_creacion": "2022-10-24T13:08:24.363Z",
                "estado": true
              },
              "envasadoraNombre": "string",
              "cantidadDeTanque": 0,
              "capacidadTanqueUno": 0,
              "capacidadMaximaTanqueUno": 0,
              "capacidadIntermediaTanqueUno": 0,
              "capacidadMinimaTanqueUno": 0,
              "total_disponible": 0,
              "metroCantidad": 0,
              "longitud": "string",
              "latitud": "string",
              "direccion": "string",
              "telefono": "string",
              "fechaCreacion": "2022-10-24T13:08:24.363Z",
              "estatus": true
            },
            "existenciaGLP":  anotaciones.existenciaFinal,
            "porcentajeGLP": porcentajeGlp,
            "fechaInventario": "2022-10-24T13:08:24.363Z",
            "horaInventario": "2022-10-24T13:08:24.363Z",
            "actualmente": "string",
            "nuevoContadorInicialMetroUno": metros.contadorFinalMetroI,
            "nuevoContadorInicioMetroDos": metros.contadorFinalMetroII,
            "nuevoContadorInicioMetroTres": metros.contadorFinalMetroIII,
            "nuevoContadorInicioMetroCuatro": metros.contadorFinalMetroIV,
            "nuevoContadorInicioMetroCinco": metros.contadorFinalMetroV,
            "nuevoContadorInicioMetroSeis": metros.contadorFinalMetroVI,
            "nuevoContadorInicioMetroSiete": metros.contadorFinalMetroVII,
            "nuevoContadorInicioMetroOcho": metros.contadorFinalMetroVIII,
            "nuevoContadorInicioMetroNueve": metros.contadorFinalMetroIX,
            "nuevoContadorInicioMetroDiez": metros.contadorFinalMetroX,
            "nuevoContadorInicioMetroDistribucion": metros.contadorFinalMetroDIST,
            "status": true
        }

        try {
            const request = await fetch(`${pathLocal}inventario/save`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(block)
            });
            if (!request.ok) {
                alert('Algo anda mal con su conexion, favor revise antes de continuar')
            } else {
                window.location.reload();
            }
        } catch (error) {
            
        }
    };

    const inventarioPut = async () => {
        const block = {
            "inventarioId": 0,
            "envasadoraEntity": {
              "envasadoraId": 0,
              "empresaEntity": {
                "empresaId": 0,
                "nombre": "string",
                "estado": true
              },
              "bancoEntity": {
                "id": 0,
                "nombre": "string",
                "cuenta": "string",
                "ejecutivo": "string",
                "responsable": "string",
                "fecha_creacion": "2022-10-24T12:34:16.999Z",
                "estado": true
              },
              "envasadoraNombre": "string",
              "cantidadDeTanque": 0,
              "capacidadTanqueUno": 0,
              "capacidadMaximaTanqueUno": 0,
              "capacidadIntermediaTanqueUno": 0,
              "capacidadMinimaTanqueUno": 0,
              "total_disponible": 0,
              "metroCantidad": 0,
              "longitud": "string",
              "latitud": "string",
              "direccion": "string",
              "telefono": "string",
              "fechaCreacion": "2022-10-24T12:34:16.999Z",
              "estatus": true
            },
            "existenciaGLP": 0,
            "porcentajeGLP": 0,
            "fechaInventario": "2022-10-24T12:34:16.999Z",
            "horaInventario": "2022-10-24T12:34:16.999Z",
            "actualmente": "string",
            "nuevoContadorInicialMetroUno": 0,
            "nuevoContadorInicioMetroDos": 0,
            "nuevoContadorInicioMetroTres": 0,
            "nuevoContadorInicioMetroCuatro": 0,
            "nuevoContadorInicioMetroCinco": 0,
            "nuevoContadorInicioMetroSeis": 0,
            "nuevoContadorInicioMetroSiete": 0,
            "nuevoContadorInicioMetroOcho": 0,
            "nuevoContadorInicioMetroNueve": 0,
            "nuevoContadorInicioMetroDiez": 0,
            "nuevoContadorInicioMetroDistribucion": 0,
            "status": true
        }
        try {
            const request = await fetch(`${pathLocal}inventario/update/altual/${inventarioId}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(block)
            });
            if(!request.ok) {
                alert('Algo anda mal con su conexion, favor revise antes de continuar (inventario put)')
            }
        } catch (error) {
            
        }
    };

    const inventarioRequest = () => {
        inventarioPut();
        saveInventario();
    };

    const galsRest = parseInt(glpEx) - galonesVendidos - anotaciones.otros;// Ver si glpEx se puede cambiar a 0.
    const cuadreSubmitF = async (e) => {
        e.preventDefault();
        const glsRest = parseInt(glpEx) - galonesVendidos - anotaciones.otros;
        let kms = false;
        Object.entries(metros).forEach(([key, val]) => {
            if (isNaN(val) || val < 0) {
                alert('No puede introducir numeros negativos o dejar casillas vacias, favor revisar');
                setActive(2);
                kms = true
                return
            }
        });
        if (kms) return
        const block = {
            "cuadreId": 0,
            "envasadoraIdEnvasadora": {
              "envasadoraId": envasadoraId,
              "empresaEntity": {
                "empresaId": 0,
                "nombre": "string",
                "estado": true
              },
              "bancoEntity": {
                "id": 0,
                "nombre": "string",
                "cuenta": "string",
                "ejecutivo": "string",
                "responsable": "string",
                "fecha_creacion": "2022-10-21T20:29:30.067Z",
                "estado": true
              },
              "envasadoraNombre": "string",
              "cantidadDeTanque": 0,
              "capacidadTanqueUno": 0,
              "capacidadMaximaTanqueUno": 0,
              "capacidadIntermediaTanqueUno": 0,
              "capacidadMinimaTanqueUno": 0,
              "total_disponible": 0,
              "metroCantidad": 0,
              "longitud": "string",
              "latitud": "string",
              "direccion": "string",
              "telefono": "string",
              "fechaCreacion": "2022-10-21T20:29:30.067Z",
              "estatus": true
            },
            "existenciaInicialVolumen": 0,
            "existenciaInicialGalones": parseInt(glpEx),
            "existenciaInicialTemperatura": 0,
            "existenciaFinalVolumen": 0,
            "existenciaFinalGalones": anotaciones.existenciaFinal,
            "existenciaFinalTemperatura": 0,
            "conduceNumero": 0,
            "cantiGalonesRecibidos": 0,
            "precioActual": precio,
            "contadorInicialMetroUno": metros.contadorInicialMetroI,
            "contadorFinalMetroUno": metros.contadorFinalMetroI,
            "galonesMetroUno": metros.galonesMetroI,
            "calibracionGlpMetroUno": metros.calibracionMetroI,
            "galonesVendidoMetroUno": metros.glsVendidoMetroI,
            "totalMetroUno": metros.totalVendidoMetroI,
            "contadorInicialMetroDos": metros.contadorInicialMetroII,
            "contadorFinalMetroDos":  metros.contadorFinalMetroII,
            "galonesMetroDos":  metros.galonesMetroII,
            "calibracionGlpMetroDos":  metros.calibracionMetroII,
            "galonesVendidoMetroDos":  metros.glsVendidoMetroII,
            "totalMetroDos":  metros.totalVendidoMetroII,
            "contadorInicialMetroTres":  metros.contadorInicialMetroIII,
            "contadorFinalMetroTres":  metros.contadorFinalMetroIII,
            "galonesMetroTres":  metros.galonesMetroIII,
            "calibracionGlpMetroTres":  metros.calibracionMetroIII,
            "galonesVendidoMetroTres":  metros.glsVendidoMetroIII,
            "totalMetroTres":  metros.totalVendidoMetroIII,
            "contadorInicialMetroCuatro":  metros.contadorInicialMetroIV,
            "contadorFinalMetroCuatro":  metros.contadorFinalMetroIV,
            "galonesMetroCuatro":  metros.galonesMetroIV,
            "calibracionGlpMetroCuatro":  metros.calibracionMetroIV,
            "galonesVendidoMetroCuatro":  metros.glsVendidoMetroIV,
            "totalMetroCuatro":  metros.totalVendidoMetroIV,
            "contadorInicialMetroCinco":  metros.contadorInicialMetroV,
            "contadorFinalMetroCinco":  metros.contadorFinalMetroV,
            "galonesMetroCinco":  metros.galonesMetroV,
            "calibracionGlpMetroCinco": metros.calibracionMetroV,
            "galonesVendidoMetroCinco": metros.glsVendidoMetroV,
            "totalMetroCinco": metros.totalVendidoMetroV,
            "contadorInicialMetroSeis": metros.contadorInicialMetroVI,
            "contadorFinalMetroSeis": metros.contadorFinalMetroVI,
            "galonesMetroSeis": metros.galonesMetroVI,
            "calibracionGlpMetroSeis": metros.calibracionMetroVI,
            "galonesVendidoMetroSeis": metros.glsVendidoMetroVI,
            "totalMetroSeis": metros.totalVendidoMetroVI,
            "contadorInicialMetroSiete": metros.contadorInicialMetroVII,
            "contadorFinalMetroSiete": metros.contadorFinalMetroVII,
            "galonesMetroSiete": metros.galonesMetroVII,
            "calibracionGlpMetroSiete": metros.calibracionMetroVII,
            "galonesVendidoMetroSiete": metros.glsVendidoMetroVII,
            "totalMetroSiete": metros.totalVendidoMetroVII,
            "contadorInicialMetroOcho": metros.contadorFinalMetroVIII,
            "contadorFinalMetroOcho": metros.contadorFinalMetroVIII,
            "galonesMetroOcho": metros.galonesMetroVIII,
            "calibracionGlpMetroOcho": metros.calibracionMetroVIII,
            "galonesVendidoMetroOcho": metros.glsVendidoMetroVIII,
            "totalMetroOcho": metros.totalVendidoMetroVIII,
            "contadorInicialMetroNueve": metros.contadorFinalMetroIX,
            "contadorFinalMetroNueve": metros.contadorFinalMetroIX,
            "galonesMetroNueve": metros.galonesMetroIX,
            "calibracionGlpMetroNueve": metros.calibracionMetroIX,
            "galonesVendidoMetroNueve": metros.glsVendidoMetroIX,
            "totalMetroNueve": metros.totalVendidoMetroIX,
            "contadorInicialMetroDiez": metros.contadorInicialMetroX,
            "contadorFinalMetroDiez": metros.contadorFinalMetroX,
            "galonesMetroDiez": metros.galonesMetroX,
            "calibracionGlpMetroDiez": metros.calibracionMetroX,
            "galonesVendidoMetroDiez": metros.glsVendidoMetroX,
            "totalMetroDiez": metros.totalVendidoMetroX,
            "contadorInicialMetroDistribucion": metros.contadorInicialMetroDIST,
            "contadorFinalMetroDistribucion": metros.contadorFinalMetroDIST,
            "galonesMetroDistribucion": metros.galonesMetroDIST,
            "calibracionGlpMetroDistribucion": metros.calibracionMetroDIST,
            "galonesVendidoMetroDistribucion": metros.glsVendidoMetroDIST,
            "totalMetroDistribucion": metros.totalVendidoMetroDIST,
            "totalGalonesVendidos": galonesVendidos,
            "totalDineroVendido": totalPre,
            "sobranteGalones": anotaciones.existenciaFinal - glsRest,
            "ventaEfectivo": anotaciones.ventaEfectivo,
            "creditoCliente": anotaciones.creditoCliente,
            "creditoTarjeta": anotaciones.creditoTarjeta,
            "tarjetaSolidaridad": anotaciones.tarjetaSolidaridad,
            "bonoPrepago": anotaciones.bonoPrepago,
            "cheque": anotaciones.cheque,
            "total": anotaciones.total,
            "deposito": anotaciones.deposito,
            "depositoEntity": depositos,
            "loteEntity": lotesGuardar,
            "bonogasEntity": montosGuardar,
            "usuarioEntity": {
              "userId": userId,
              "nombre": "string",
              "apellido": "string",
              "email": "string",
              "password": "string",
              "envasadoraEntity": [
                {
                  "envasadoraId": 0,
                  "empresaEntity": {
                    "empresaId": 0,
                    "nombre": "string",
                    "estado": true
                  },
                  "bancoEntity": {
                    "id": 0,
                    "nombre": "string",
                    "cuenta": "string",
                    "ejecutivo": "string",
                    "responsable": "string",
                    "fecha_creacion": "2022-10-21T20:29:30.068Z",
                    "estado": true
                  },
                  "envasadoraNombre": "string",
                  "cantidadDeTanque": 0,
                  "capacidadTanqueUno": 0,
                  "capacidadMaximaTanqueUno": 0,
                  "capacidadIntermediaTanqueUno": 0,
                  "capacidadMinimaTanqueUno": 0,
                  "total_disponible": 0,
                  "metroCantidad": 0,
                  "longitud": "string",
                  "latitud": "string",
                  "direccion": "string",
                  "telefono": "string",
                  "fechaCreacion": "2022-10-21T20:29:30.068Z",
                  "estatus": true
                }
              ],
              "estado": true
            },
            "fechaCierre": "2022-10-21T20:29:30.068Z",
            "horaCierre": "2022-10-21T20:29:30.068Z",
            "estado": true,
            "galonesRestante": glsRest,
            "otroTotalGalonesVendidos": anotaciones.otros,
            "resultadoOperacional": "string"
          }  
        try {
            const cuadreRequest = await fetch(`${pathLocal}cuadre/save`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(block)
            });
            // const json = await cuadreRequest.json();
            if(!cuadreRequest.ok) {
                alert('Algo anda mal con su conexion, favor revise antes de continuar');
            } else {
                // console.log(json)
                setCuadreNuevo(true);
                // setMetros({
                //     contadorInicialMetroI: json.contadorInicialMetroUno,
                //     contadorInicialMetroII: json.contadorInicialMetroDos,
                //     contadorInicialMetroIII: json.contadorInicialMetroTres,
                //     contadorInicialMetroIV: json.contadorInicialMetroCuatro,
                //     contadorInicialMetroV: json.contadorInicialMetroCinco,
                //     contadorInicialMetroVI: json.contadorInicialMetroSeis,
                //     contadorInicialMetroVII: json.contadorInicialMetroSiete,
                //     contadorInicialMetroVIII: json.contadorInicialMetroOcho,
                //     contadorInicialMetroIX: json.contadorInicialMetroNueve,
                //     contadorInicialMetroX: json.contadorInicialMetroDiez,
                //     contadorInicialMetroDIST: json.contadorInicialMetroDistribucion,
                //     contadorFinalMetroI: json.contadorFinalMetroUno,
                //     contadorFinalMetroII: json.contadorFinalMetroDos,
                //     contadorFinalMetroIII: json.contadorFinalMetroTres,
                //     contadorFinalMetroIV: json.contadorFinalMetroCuatro,
                //     contadorFinalMetroV: json.contadorFinalMetroCinco,
                //     contadorFinalMetroVI: json.contadorFinalMetroSeis,
                //     contadorFinalMetroVII: json.contadorFinalMetroSiete,
                //     contadorFinalMetroVIII: json.contadorFinalMetroOcho,
                //     contadorFinalMetroIX: json.contadorFinalMetroNueve,
                //     contadorFinalMetroX: json.contadorFinalMetroDiez,
                //     contadorFinalMetroDIST: json.contadorFinalMetroDistribucion,
                //     galonesMetroI: json.galonesMetroUno,
                //     galonesMetroII: json.galonesMetroDos,
                //     galonesMetroIII: json.galonesMetroTres,
                //     galonesMetroIV: json.galonesMetroCuatro,
                //     galonesMetroV: json.galonesMetroCinco,
                //     galonesMetroVI: json.galonesMetroSeis,
                //     galonesMetroVII: json.galonesMetroSiete,
                //     galonesMetroVIII: json.galonesMetroOcho,
                //     galonesMetroIX: json.galonesMetroNueve,
                //     galonesMetroX: json.galonesMetroDiez,
                //     galonesMetroDIST: json.galonesMetroDistribucion,
                //     calibracionMetroI: json.calibracionGlpMetroUno,
                //     calibracionMetroII: json.calibracionGlpMetroDos,
                //     calibracionMetroIII: json.calibracionGlpMetroTres,
                //     calibracionMetroIV: json.calibracionGlpMetroCuatro,
                //     calibracionMetroV: json.calibracionGlpMetroCinco,
                //     calibracionMetroVI: json.calibracionGlpMetroSeis,
                //     calibracionMetroVII: json.calibracionGlpMetroSiete,
                //     calibracionMetroVIII: json.calibracionGlpMetroOcho,
                //     calibracionMetroIX: json.calibracionGlpMetroNueve,
                //     calibracionMetroX: json.calibracionGlpMetroDiez,
                //     calibracionMetroDIST: json.calibracionGlpMetroDistribucion,
                //     glsVendidoMetroI: json.galonesVendidoMetroUno,
                //     glsVendidoMetroII: json.galonesVendidoMetroDos,
                //     glsVendidoMetroIII: json.galonesVendidoMetroTres,
                //     glsVendidoMetroIV: json.galonesVendidoMetroCuatro,
                //     glsVendidoMetroV: json.galonesVendidoMetroCinco,
                //     glsVendidoMetroVI: json.galonesVendidoMetroSeis,
                //     glsVendidoMetroVII: json.galonesVendidoMetroSiete,
                //     glsVendidoMetroVIII: json.galonesVendidoMetroOcho,
                //     glsVendidoMetroIX: json.galonesVendidoMetroNueve,
                //     glsVendidoMetroX: json.galonesVendidoMetroDiez,
                //     glsVendidoMetroDIST: json.galonesVendidoMetroDist,
                //     totalVendidoMetroI: json.totalMetroUno,
                //     totalVendidoMetroII: json.totalMetroDos,
                //     totalVendidoMetroIII: json.totalMetroTres,
                //     totalVendidoMetroIV: json.totalMetroCuatro,
                //     totalVendidoMetroV: json.totalMetroCinco,
                //     totalVendidoMetroVI: json.totalMetroSeis,
                //     totalVendidoMetroVII: json.totalMetroSiete,
                //     totalVendidoMetroVIII: json.totalMetroOcho,
                //     totalVendidoMetroIX: json.totalMetroNueve,
                //     totalVendidoMetroX: json.totalMetroDiez,
                //     totalVendidoMetroDIST: json.totalMetroDistribucion,
                // })
                // setAnotaciones(prev => ({
                //     ...prev,
                //     otros: json.otroTotalGalonesVendidos
                // }))
            }
        } catch (error) {
            alert(error);
        }
    };

    const logout = () => {
        localStorage.removeItem('Authenticated');
        dispatch(logOut());
        navigate('/');
    };
        return (
            <div className="cuadre-cont">
                <div className="cuadre-inner-cont">
                    <div className="name-logo-section d-flex justify-content-between">
                        <div className="logo">
                            <img alt="ig-logo" src={logoImg.default} className="cuadre-mobile-logo"/>
                        </div>
                        <div className="initial-ilustration ilustration">
                            <div className="tank-graphic">
                                <img src={tank1.default} alt="img-1" className="tank-img-graphic"/>
                            </div>
                            <div className="tank-graphic-labels">
                                <p>C. Tanque: <span>{capacidadTanque}</span></p>
                                <p>C. Maxima: <span>{capacidadMaxima}</span></p>
                                <p>C. Minima: <span>{capacidadMinima}</span></p>
                                <p>C. Inter.: <span>{capacidadIntermedia}</span></p>
                                <p>GLP: <span>{glpEx}</span></p>
                                <p>GLP%: <span>{Math.floor(glpPercentage)}</span></p>
                            </div>
                            <div className="flying-tag">{Math.floor(glpPercentage)}%</div>
                        </div>
                        <div className="names-section d-flex flex-column">
                            <div className="page-name align-self-end">
                                <h1 className="cuadre-mobile-page-h1">Cuadre Diario de Planta</h1>
                            </div>
                            <div className="envasadora d-flex justify-content-between">
                                <p className="envasadora-tag"></p>
                                <span className="envasadora-span">{envName} </span>
                            </div>
                            <div className="daily-price d-flex justify-content-between align-self-end">
                                <p className="price-tag">Precio:</p>
                                <span className="price-span">{precioFormatado}</span>
                            </div>
                            <div className="logout-refresh-btns align-self-end">
                                <button type="button" className="nav-btns refresh" onClick={()=>{window.location.reload()}}>Refrescar</button>
                                <button type="button" className="nav-btns log-out" onClick={logout}>logout</button>
                            </div>
                        </div>
                    </div>
                    <div className="main-section">
                        <div className="nav-tabs w-100 d-flex">
                            {/* <div className={active === 1 ? "nav-tab nav-tab-active" : "nav-tab"} onClick={()=>{setActive(1)}}>
                            Estado del Tanque
                            </div> */}
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
                            {/* <div className={active === 1 ? "cuadre-section estado-tanque main-active" : "cuadre-section estado-tanque"}>
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

                                </div>
                                {/* <div className="existencia-final estado-section">
                                    <p className="estado-tanque-label d-block">Existencia Final</p>
                                </div>
                                <div className="ilustrations estado-section">
    
                                </div> */}
    
                            {/* </div> */}
                            <div className={active === 2 ? "cuadre-section relacion-metros main-active flex-column" : "cuadre-section relacion-metros"}>
                                <div className="cuadre-principal seccion">
                                    <table className="tabla-cuadre-principal">
                                        <thead className="tabla-cuadre-principal-header">
                                            <tr>
                                                <th className="th-th">TIPO</th>
                                                <th className="th-th">METRO I</th>
                                                <th className="th-th">METRO II</th>
                                                <th className="th-th">METRO III</th>
                                                <th className="th-th">METRO IV</th>
                                                <th className="th-th">METRO V</th>
                                                <th className="th-th">METRO VI</th>
                                                <th className="th-th">METRO VII</th>
                                                <th className="th-th">METRO VIII</th>
                                                <th className="th-th">METRO IX</th>
                                                <th className="th-th">METRO X</th>
                                                <th className="th-th">METRO DISTRIBUCION</th>
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
                                            type="number"/>
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
                                            { bancos.map((banco) => (<Depositos bancoName={banco.nombre} functionSet={setDepositos} setBancoAfuera={setDepositoAdentro} key={banco.nombre} idEnvasadora={envasadoraId} idUser={userId} idBanco={bancoId}/>)) }
                                        </tbody>
                                    </table>
                                    <div className="total-depositos-1 totales-1 d-flex">
                                        <label className="totales-depositos-label">Total Depositos:</label>
                                        <input type="text" disabled value={depositosFormatado} className="totales-depositos-input"/>
                                    </div>
                                </div>
                                <div className="lotes depositos">
                                    <h5 className="deposito-header"> Tarjetas</h5>
                                    {lotes.map((obj, index) => <form className="lote-cont d-flex">
                                        <input className="lote-input un" type="text" name="codigo" placeholder="codigo" onChange={(e)=>{handleLoteChange(index, e)}} disabled={obj.activo ? false : true} />
                                        <input className="lote-input deux" type="text" name="monto" placeholder="monto" onChange={(e)=>{handleLoteChange(index, e)}} disabled={obj.activo ? false : true} />
                                        <button type="button" className="btn-lote-delete" onClick={()=>{removeLote(index)}}> <AiOutlineDelete size={23} color="red"/></button>
                                    </form>
                                    )}
                                    {loteActive ? <button type="button" className="lote-btn btn-td-btn btn-add" onClick={saveLote}> Guardar Lote</button> : <button type="button" className="lote-btn btn-td-btn" onClick={addLote}> Añadir Lote</button>}
                                    <div className="total-depositos-1 totales-1 d-flex">
                                        <label className="totales-depositos-label">Total Tarjetas:</label>
                                        <input type="text" disabled value={lotesFormatado} className="totales-depositos-input"/>
                                    </div>
                                </div>
                                <div className="lotes depositos">
                                    <h5 className="deposito-header"> Bonogas</h5>
                                    {MontosB.map((obj, index) => <form className="lote-cont d-flex"> {/** esto solo es para enseñar, terminar fucionalidad pendiente */}
                                        <input className="lote-input un" name="codigo" type="text" placeholder="codigo Bonogas" onChange={(e) =>{handleMontoChange(index, e)}} disabled={obj.activo ? false : true}/>
                                        <input className="lote-input deux" name="monto" type="text" placeholder="monto Bonogas" onChange={(e) =>{handleMontoChange(index, e)}} disabled={obj.activo ? false : true}/>
                                        <button type="button" className="btn-lote-delete" onClick={()=>{removeMonto(index)}}> <AiOutlineDelete size={23} color="red"/></button>
                                    </form>
                                    )}
                                    {montoActive ? <button type="button" className="lote-btn btn-td-btn btn-add" onClick={saveMonto}> Guardar Monto</button> : <button type="button" className="lote-btn btn-td-btn" onClick={addMontoB}> Añadir Monto</button>}
                                    <div className="total-depositos-1 totales-1 d-flex">
                                        <label className="totales-depositos-label">Total Bonogas:</label>
                                        <input type="text" disabled value={MontosFormatado} className="totales-depositos-input"/>
                                    </div>
                                </div>
                            </div>
                            <div className={active === 4 ? "cuadre-section cuadre-cuadre main-active" : "cuadre-section cuadre-cuadre"}>
                                <div className="anotaciones">
                                    <div className="division-uno">
                                    <div className="anotacion-div">
                                        <label>Existencia final:</label>
                                            <input
                                            className="anotaciones-input" 
                                            name="existenciaFinal"
                                            value={anotaciones.existenciaFinal}
                                            onChange={onChangeAnotaciones}
                                            type="number"/>
                                        </div>
                                        <div className="anotacion-div">
                                            <label>Sobrante GLS:</label>
                                            <input className="anotaciones-input" name="sobranteGalones" value={anotaciones.existenciaFinal - galsRest} disabled type="text" />
                                        </div>
                                        <div className="anotacion-div">
                                            <label>Venta Efectivo:</label>
                                            <input className="anotaciones-input" name="ventaEfectivo" value={depositosFormatado} type="text" disabled />
                                        </div>
                                        <div className="anotacion-div">
                                            <label>Crédito Cliente:</label>
                                            <input className="anotaciones-input" name="creditoCliente" value={anotaciones.creditoCliente} onChange={onChangeAnotaciones} type="number" />
                                        </div>
                                        <div className="anotacion-div">
                                            <label>Crédito Tarjeta:</label>
                                            <input className="anotaciones-input" name="creditoTarjeta" disabled value={lotesFormatado} type="text" />
                                        </div>
                                        <div className="anotacion-div">
                                            <label>Tarjeta Solidaridad:</label>
                                            <input className="anotaciones-input" name="tarjetaSolidaridad" disabled value={MontosFormatado} type="text" />
                                        </div>
                                    </div>
                                    <div className="division-dos">
                                        <div className="anotacion-div">
                                            <label>Otros Galones:</label>
                                            <input className="anotaciones-input" name="otros" value={anotaciones.otros} onChange={onChangeAnotaciones} type="number" />
                                        </div>
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
                                            <input className="anotaciones-input" name="total" value={totalDinero} disabled  type="text" />
                                        </div>
                                        <div className="anotacion-div anotacion-deposito">
                                            <label>Depósito RD$:</label>
                                            <input className="anotaciones-input deposito" name="deposito" value={depositosFormatado} type="text" disabled />
                                        </div>
                                    </div>
                                    <div className="cuadre-submit-btn">
                                        {cuadreNuevo ? <button type="button" onClick={inventarioRequest}>Crear Cuadre Nuevo</button> : <button type="button" onClick={cuadreSubmitF}>Guardar Cuadre</button>}
                                        {/* <button type="button" onClick={cuadreSubmitF}>Guardar Cuadre</button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    
};