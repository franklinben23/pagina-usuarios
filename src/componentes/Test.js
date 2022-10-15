import React, { useState } from "react";

export const Test = () => {
    /**body: JSON.stringify({
                envasadoraIdEnvasadora: {
                    envasadoraId: 0
                },
                ...capacidadRegistro,
                conduceNumero: 0,
                cantiGalonesRecibidos: 0,
                precioActual: precio,
                contadorInicialMetroUno: metros.contadorInicialMetroI,
                contadorFinalMetroUno: metros.contadorFinalMetroI,
                galonesMetroUno: metros.galonesMetroI,
                calibracionGlpMetroUno: metros.calibracionMetroI,
                galonesVendidoMetroUno: metros.glsVendidoMetroI,
                totalMetroUno: metros.totalVendidoMetroI,
                contadorInicialMetroDos: metros.contadorInicialMetroII,
                contadorFinalMetroDos: metros.contadorFinalMetroII,
                galonesMetroDos: metros.galonesMetroII,
                calibracionGlpMetroDos: metros.calibracionMetroII,
                galonesVendidoMetroDos: metros.glsVendidoMetroII,
                totalMetroDos: metros.totalVendidoMetroII,
                contadorInicialMetroTres: metros.contadorInicialMetroIII,
                contadorFinalMetroTres: metros.contadorFinalMetroIII,
                galonesMetroTres: metros.galonesMetroIII,
                calibracionGlpMetroTres: metros.calibracionMetroIII,
                galonesVendidoMetroTres: metros.glsVendidoMetroIII,
                totalMetroTres: metros.totalVendidoMetroIII,
                contadorInicialMetroCuatro: metros.contadorInicialMetroIV,
                contadorFinalMetroCuatro: metros.contadorFinalMetroIV,
                galonesMetroCuatro: metros.galonesMetroIV,
                calibracionGlpMetroCuatro: metros.calibracionMetroIV,
                galonesVendidoMetroCuatro: metros.glsVendidoMetroIV,
                totalMetroCuatro: metros.totalVendidoMetroIV,
                contadorInicialMetroCinco: metros.contadorInicialMetroV,
                contadorFinalMetroCinco: metros.contadorFinalMetroV,
                galonesMetroCinco: metros.galonesMetroV,
                calibracionGlpMetroCinco: metros.calibracionMetroV,
                galonesVendidoMetroCinco: metros.glsVendidoMetroV,
                totalMetroCinco: metros.totalVendidoMetroV,
                contadorInicialMetroSeis: metros.contadorInicialMetroVI,
                contadorFinalMetroSeis: metros.contadorFinalMetroVI,
                galonesMetroSeis: metros.galonesMetroVI,
                calibracionGlpMetroSeis: metros.calibracionMetroVI,
                galonesVendidoMetroSeis: metros.glsVendidoMetroVI,
                totalMetroSeis: metros.totalVendidoMetroVI,
                contadorInicialMetroSiete: metros.contadorInicialMetroVII,
                contadorFinalMetroSiete: metros.contadorFinalMetroVII,
                galonesMetroSiete: metros.galonesMetroVII,
                calibracionGlpMetroSiete: metros.calibracionMetroVII,
                galonesVendidoMetroSiete: metros.glsVendidoMetroVII,
                totalMetroSiete: metros.totalVendidoMetroVII,
                contadorInicialMetroOcho: metros.contadorInicialMetroVIII,
                contadorFinalMetroOcho: metros.contadorFinalMetroVIII,
                galonesMetroOcho: metros.galonesMetroVIII,
                calibracionGlpMetroOcho: metros.calibracionMetroVIII,
                galonesVendidoMetroOcho: metros.glsVendidoMetroVIII,
                totalMetroOcho: metros.totalVendidoMetroVIII,
                contadorInicialMetroNueve: metros.contadorInicialMetroIX,
                contadorFinalMetroNueve: metros.contadorFinalMetroIX,
                galonesMetroNueve: metros.galonesMetroIX,
                calibracionGlpMetroNueve: metros.calibracionMetroIX,
                galonesVendidoMetroNueve: metros.glsVendidoMetroIX,
                totalMetroNueve: metros.totalVendidoMetroIX,
                contadorInicialMetroDiez: metros.contadorInicialMetroX,
                contadorFinalMetroDiez: metros.contadorFinalMetroX,
                galonesMetroDiez: metros.galonesMetroX,
                calibracionGlpMetroDiez: metros.calibracionMetroX,
                galonesVendidoMetroDiez: metros.glsVendidoMetroX,
                totalMetroDiez: metros.totalVendidoMetroX,
                contadorInicialMetroDistribucion: metros.contadorInicialMetroDIST,
                contadorFinalMetroDistribucion: 10,
                galonesMetroDistribucion: metros.galonesMetroDIST,
                calibracionGlpMetroDistribucion: metros.calibracionMetroDIST,
                galonesVendidoMetroDistribucion: metros.glsVendidoMetroDIST,
                totalMetroDistribucion: metros.totalVendidoMetroDIST,
                totalGalonesVendidos: galonesTotales,
                totalDineroVendido: totalPre,
                ...anotaciones,
                despositoEntity: [...depositos],
                usuarioEntity: {
                    userId: 0
                  }
           }) */
    
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
        const [precio, setPrecio] = useState(147.34);
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
        const [capacidadRegistro, setCapacidadRegistro] = useState({
            existenciaInicialVolumen: 0,
            existenciaInicialGalones: 0,
            existenciaInicialTemperatura: 0,
            existenciaFinalVolumen: 0,
            existenciaFinalGalones: 0,
            existenciaFinalTemperatura: 0
        });
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
        const [depositos, setDepositos] = useState([
            {
                codigo: 0,
                monto: 0,
                descripcion: '',
                envasadoraEntity: {
                    envasadoraId: 0
                },
                bancoEntity: {
                    id: 0
                },
                usuarioEntity: {
                    userId: 0
                },
                fecha: '',
                hora: '',
                estado: true 
            },
            {
                codigo: 0,
                monto: 0,
                descripcion: '',
                envasadoraEntity: {
                    envasadoraId: 0
                },
                bancoEntity: {
                    id: 0
                },
                usuarioEntity: {
                    userId: 0
                },
                fecha: '',
                hora: '',
                estado: true 
            }
        ]);

        const [name, setName] = useState('bonao');
        const [capacidad, setCapacidad] = useState(1200);

        const sendTest = async () => {
            const bloqueRequest = {
                envasadoraIdEnvasadora: {
                    envasadoraId: 0
                },
                ...capacidadRegistro,
                conduceNumero: 0,
                cantiGalonesRecibidos: 0,
                precioActual: precio,
                contadorInicialMetroUno: metros.contadorInicialMetroI,
                contadorFinalMetroUno: metros.contadorFinalMetroI,
                galonesMetroUno: metros.galonesMetroI,
                calibracionGlpMetroUno: metros.calibracionMetroI,
                galonesVendidoMetroUno: metros.glsVendidoMetroI,
                totalMetroUno: metros.totalVendidoMetroI,
                contadorInicialMetroDos: metros.contadorInicialMetroII,
                contadorFinalMetroDos: metros.contadorFinalMetroII,
                galonesMetroDos: metros.galonesMetroII,
                calibracionGlpMetroDos: metros.calibracionMetroII,
                galonesVendidoMetroDos: metros.glsVendidoMetroII,
                totalMetroDos: metros.totalVendidoMetroII,
                contadorInicialMetroTres: metros.contadorInicialMetroIII,
                contadorFinalMetroTres: metros.contadorFinalMetroIII,
                galonesMetroTres: metros.galonesMetroIII,
                calibracionGlpMetroTres: metros.calibracionMetroIII,
                galonesVendidoMetroTres: metros.glsVendidoMetroIII,
                totalMetroTres: metros.totalVendidoMetroIII,
                contadorInicialMetroCuatro: metros.contadorInicialMetroIV,
                contadorFinalMetroCuatro: metros.contadorFinalMetroIV,
                galonesMetroCuatro: metros.galonesMetroIV,
                calibracionGlpMetroCuatro: metros.calibracionMetroIV,
                galonesVendidoMetroCuatro: metros.glsVendidoMetroIV,
                totalMetroCuatro: metros.totalVendidoMetroIV,
                contadorInicialMetroCinco: metros.contadorInicialMetroV,
                contadorFinalMetroCinco: metros.contadorFinalMetroV,
                galonesMetroCinco: metros.galonesMetroV,
                calibracionGlpMetroCinco: metros.calibracionMetroV,
                galonesVendidoMetroCinco: metros.glsVendidoMetroV,
                totalMetroCinco: metros.totalVendidoMetroV,
                contadorInicialMetroSeis: metros.contadorInicialMetroVI,
                contadorFinalMetroSeis: metros.contadorFinalMetroVI,
                galonesMetroSeis: metros.galonesMetroVI,
                calibracionGlpMetroSeis: metros.calibracionMetroVI,
                galonesVendidoMetroSeis: metros.glsVendidoMetroVI,
                totalMetroSeis: metros.totalVendidoMetroVI,
                contadorInicialMetroSiete: metros.contadorInicialMetroVII,
                contadorFinalMetroSiete: metros.contadorFinalMetroVII,
                galonesMetroSiete: metros.galonesMetroVII,
                calibracionGlpMetroSiete: metros.calibracionMetroVII,
                galonesVendidoMetroSiete: metros.glsVendidoMetroVII,
                totalMetroSiete: metros.totalVendidoMetroVII,
                contadorInicialMetroOcho: metros.contadorInicialMetroVIII,
                contadorFinalMetroOcho: metros.contadorFinalMetroVIII,
                galonesMetroOcho: metros.galonesMetroVIII,
                calibracionGlpMetroOcho: metros.calibracionMetroVIII,
                galonesVendidoMetroOcho: metros.glsVendidoMetroVIII,
                totalMetroOcho: metros.totalVendidoMetroVIII,
                contadorInicialMetroNueve: metros.contadorInicialMetroIX,
                contadorFinalMetroNueve: metros.contadorFinalMetroIX,
                galonesMetroNueve: metros.galonesMetroIX,
                calibracionGlpMetroNueve: metros.calibracionMetroIX,
                galonesVendidoMetroNueve: metros.glsVendidoMetroIX,
                totalMetroNueve: metros.totalVendidoMetroIX,
                contadorInicialMetroDiez: metros.contadorInicialMetroX,
                contadorFinalMetroDiez: metros.contadorFinalMetroX,
                galonesMetroDiez: metros.galonesMetroX,
                calibracionGlpMetroDiez: metros.calibracionMetroX,
                galonesVendidoMetroDiez: metros.glsVendidoMetroX,
                totalMetroDiez: metros.totalVendidoMetroX,
                contadorInicialMetroDistribucion: metros.contadorInicialMetroDIST,
                contadorFinalMetroDistribucion: 10,
                galonesMetroDistribucion: metros.galonesMetroDIST,
                calibracionGlpMetroDistribucion: metros.calibracionMetroDIST,
                galonesVendidoMetroDistribucion: metros.glsVendidoMetroDIST,
                totalMetroDistribucion: metros.totalVendidoMetroDIST,
                totalGalonesVendidos: 15,
                totalDineroVendido: 20,
                ...anotaciones,
                despositoEntity: [...depositos],
                usuarioEntity: {
                    userId: 0
                }
            }
            const bloqueCombustible = {
                nombre: 'regular',
                tipo: 'gasolina',
                estado: true
            }
            const bloquePrueba = {
                envasadoraId: 0,
                empresaEntity: {
                    empresaId: 63,
                    nombre: "string",
                    estado: true
                },
                envasadoraNombre: name,
                capacidadTanque: capacidad,
                capacidadMaximaTanque: 1000,
                capacidadIntermediaTanque: 600,
                capacidadMinimaTanque: 200,
                longitud: "string",
                latitud: "string",
                direccion: "autopista duarte",
                telefono: "809-999-9999",
                fechaCreacion: "2022-09-21T20:02:02.120Z",
                estatus: true
            }

        const postApi = await fetch('http://10.1.105.205:8080/webapp.metrogas/envasadora/save', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(bloquePrueba)
        });

        const postApiProcesed = await postApi.json();
        if (postApi.status === 201 || postApi.status === 200) {
            console.log(postApiProcesed)
        }
    }
    return (
        <div className="Test-cont">
            <h1>Hello world</h1>
            <button type="button" onClick={sendTest}> enviar</button>
        </div>
    );
};