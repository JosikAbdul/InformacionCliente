import React from 'react';
import { Link } from 'react-router-dom';

function Resumen(props) {
  const { location } = props;
  const { tipoDocumento, numeroDocumento, pais } = location.state || {};

  return (
   
    <div>
      <h2>Información Basica</h2>
      <p>Tipo de Documento: {tipoDocumento}</p>
      <p>Numero de Documento: {numeroDocumento}</p>
      <p>País: {pais}</p>
      <Link to="/">
        <button className="btn btn-primary">Volver</button>
      </Link>
    </div>
  );
}

export default Resumen;
