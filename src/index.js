import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RegistrationMailer } from './componentes/RegistrationMailer';
// import { Login } from './componentes/Login';
// import { Registration } from './componentes/Registration';
// import App from './App';
// import { CuadreDiario } from './componentes/CuadreDiario';
import { NewCuadre } from './componentes/NewCuadre';
// import { CuadreDiarioMobile } from './componentes/CuadreDiarioMobile';
// import { CuadreDiarioMobile } from './componentes/CuadreDiarioMobile';
// import { EnvasadoraReg } from './componentes/EnvasadoraReg';
// import { Test } from './componentes/Test';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path='/PaginaCuadre' element={<NewCuadre /> } />
        <Route path='/Mailer' element={<RegistrationMailer /> } />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals