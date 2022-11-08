import React from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logOut } from './redux/user/userInfo';
import * as logoBlanco from '../src/componentes/estilos/imagenes/logo_metrogas_blanco.png';
import './App.css';

function App() {

  const userName = 'Juan Rigoberto Sanchez'; //placeholder por el momento.
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('Authenticated');
    dispatch(logOut());
    navigate('/');
};

  return (
    <div className="App">
      <div className='header'>
        <div className='top-nav-links'>
          <img className='top-left-logo' alt='logo-metrogas' src={logoBlanco.default}/>
          <div className='top-right-links'>
            <p className='user-name'>{userName}</p>
            <button type="button" className="nav-btns log-out-btn" onClick={logout}>logout</button>
          </div>
        </div>
        <div className='bottom-nav-links'>
          <button className='botton-link'>Menu 1</button>
          <button className='botton-link'>Menu 1</button>
          <button className='botton-link'>Menu 1</button>
          <button className='botton-link'>Menu 1</button>
          <button className='botton-link'>Menu 1</button>
        </div>
      </div>
      <div className='main-sec'>
        
      </div>
      <div className='bottom'></div>
    </div>
  );
}

export default App;
