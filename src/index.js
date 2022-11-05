import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store, persistor } from './redux/configureStore';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { PathProvider } from './componentes/PathContext';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RegistrationMailer } from './componentes/RegistrationMailer';
import { Registration } from './componentes/Registration';
// import App from './App';
// import { CuadreDiario } from './componentes/CuadreDiario';
import { NewLogin } from './componentes/NewLogin';
import { NewCuadre } from './componentes/NewCuadre';
import { Crud } from './componentes/Crud';
// import { EnvasadoraReg } from './componentes/EnvasadoraReg';
// import { Test } from './componentes/Test';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <BrowserRouter>
        <PathProvider>
          <PersistGate loading={null} persistor={persistor}>
            <Provider store={store}>
              <Routes>
                <Route path='/Registration:email' element={<Registration /> } />
                <Route path='/' element={<NewLogin /> } />
                <Route path='/PaginaCuadre' element={<NewCuadre /> } />
                <Route path='/Mailer' element={<RegistrationMailer /> } />
              </Routes>
            </Provider>
          </PersistGate>
        </PathProvider>
      </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals