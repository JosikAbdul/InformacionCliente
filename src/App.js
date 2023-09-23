import './App.css';
import Boton from './components/Boton.js';
import logoJosik from './img/2FrontJosik.png';
import IngresoData from './components/IngresoData';
import React, { useState } from 'react';
import Resumen from './components/Resumen';
import { Routes, Route } from 'react-router-dom';



function App() {

  const [disabled, setDisabled] = useState(true);

    return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img 
          src={logoJosik}
          className='logoJosik'
          alt='logo'/>
      </div>
      <Routes>
        <Route path='/' element={ <div className='contenedorUser'>
           <div><h1>Ingreso de información</h1></div>
           <IngresoData setDisabled={setDisabled}></IngresoData>
           <div className='BotonIni'>
        <Boton disabled={disabled}></Boton>
      </div>
    </div>}>
      </Route>
      </Routes>
     
    </div>

    
  );
}

export default App;
