import { Button } from 'react-bootstrap';
import '../hojas-de-estilo/Boton.css'
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


function Boton(props){
    
    const navigate = useNavigate();


   return(
   <div>
   <Button onClick={() => navigate("/Resumen")} disabled={props.disabled} className="btn btn-primary rounded">Buscar</Button>
    </div>
    ) 
    
    
}
export default Boton;