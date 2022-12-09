import React, { useState, useEffect } from 'react';
import { useNavigate, Routes, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { NewCuadre } from './componentes/NewCuadre';
import { Registration } from './componentes/Registration';
import { RegistratroAlmacen } from './componentes/RegistroAlmacen';
import { Crud } from './componentes/Crud';
import { logOut } from './redux/user/userInfo';
import * as logoBlanco from '../src/componentes/estilos/imagenes/logo_metrogas_blanco.png';
import './App.css';

function App() {

  const navigate = useNavigate(); 
  let loggedInUser = false;
  useEffect(() => {
    loggedInUser = localStorage.getItem("Authenticated");
  }, []);;

  const userBlock = useSelector((state) => state.userInfo);
  const [envasadora, setEnvasadora] = useState(userBlock.envasadoraEntity[0]);

  const capacidadTanque = envasadora.capacidadTanqueUno;
  const capacidadMinima = envasadora.capacidadMinimaTanqueUno;
  const capacidadMaxima = envasadora.capacidadMaximaTanqueUno;
  const capacidadIntermedia = envasadora.capacidadIntermediaTanqueUno;

  const envasadoraId = envasadora.envasadoraId;
  const userId = userBlock.userId;
  const userName = userBlock.nombre;
  const lastName = userBlock.apellido;

  const envName = envasadora.envasadoraNombre;

  const dispatch = useDispatch();

  const logout = () => {
    localStorage.removeItem('Authenticated');
    dispatch(logOut());
    navigate('/');
};

const replace = (str) => {
    if (typeof str === 'string') {
      return str.replace(/^\w/, c => c.toUpperCase())
    }
    else return
};

const changeFunc = (e) => {
  const id = e.target.value;
  setEnvasadora(userBlock.envasadoraEntity[id]);
};

  return (
    <div className="App">
      <div className='header'>
        <div className='top-nav-links'>
          <img className='top-left-logo' alt='logo-metrogas' src={logoBlanco.default}/>
          <div className='top-right-links'>
            <p className='user-name'>{`${replace(userName)} ${replace(lastName)}`}</p>
            <button type="button" className="nav-btns log-out-btn" onClick={logout}>logout</button>
            <button type="button" className="nav-btns log-out-btn"style={{'backgroundColor': '#007332'}} onClick={()=>{window.location.reload()}}>refrescar</button>
          </div>
        </div>
        <div className='bottom-nav-links' style={{position: 'relative'}}>
          { userBlock.rol.rolId === 5 ?
            <div>
              <Link to='PaginaCuadre' className='botton-link'>Cuadre</Link>
              <Link to='HistorialCuadres' className='botton-link'>Historial cuadres </Link>
              {/* <Link to='registration' className='botton-link'>Registro</Link> */}
            </div> : ''
            }
            {/* { userBlock.rol.rolId === 2 ?
            <div>
              <Link to='HistorialCuadres' className='botton-link'>Historial cuadres </Link>
            </div> : ''
            }
            { userBlock.rol.rolId === 2 ?
            <div>
              <Link to='HistorialCuadres' className='botton-link'>Historial cuadres </Link>
            </div> : ''
            } */}
            {userBlock.envasadoraEntity.length > 1 ?
              <select name="selectEnv" style={{position: 'absolute', 'right': '7%', 'background': 'transparent', 'padding': '2px', 'border': 'black 2px solid', 'borderRadius': '10px', 'fontWeight': '700'}} onChange={(e)=>{changeFunc(e)}}>
                {userBlock.envasadoraEntity.map((el, index) => 
                  <option value={index}>{userBlock.envasadoraEntity[index].envasadoraNombre}</option>
                )}
              </select> : ''
            }
        </div>
      </div>
      <div className='main-sec'>
        <Routes>
          <Route path='HistorialCuadres' element={ <Crud/>} />
          <Route path='PaginaCuadre'element={<NewCuadre
              envasadora={envasadora} 
              envasadoraId={envasadoraId} 
              envName={envName}
              userId={userId}
              capacidadTanque={capacidadTanque}
              capacidadMaxima={capacidadMaxima}
              capacidadIntermedia={capacidadIntermedia}
              capacidadMinima={capacidadMinima}
              />}
          />
          <Route path='registration' element= {<RegistratroAlmacen />} />
        </Routes>
      </div>
      <div className='bottom'></div>
    </div>
  );
}

export default App;
