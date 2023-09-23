import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios'; // Importa axios

function IngresoData(props) {
  const [numeroDocumento, setNumeroDocumento] = useState('');
  const [numeroDocumentoFormateado, setNumeroDocumentoFormateado] = useState('');
  const [tipoDocumento, setTipoDocumento] = useState('');
  const [paises, setPaises] = useState([]); // Estado para almacenar la lista de países

  useEffect(() => {
    const formattedNumber = numberWithCommas(numeroDocumento);
    setNumeroDocumentoFormateado(formattedNumber);

    // Realiza la solicitud para obtener la lista de países cuando el componente se monta
    axios.get('https://restcountries.com/v3.1/all')
      .then((response) => {
        // Extrae los nombres de los países de la respuesta
        const countryNames = response.data.map((country) => country.name.common);
        setPaises(countryNames);
      })
      .catch((error) => {
        console.error('Error al obtener la lista de países:', error);
      });
  }, [numeroDocumento]);

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const handleTipoDocumentoChange = (e) => {
    setTipoDocumento(e.target.value);
    checkButtonStatus(e.target.value, numeroDocumento);
  };

  const handleChange = (e) => {
    const inputValue = e.target.value.replace(/[^0-9]/g, ''); // Eliminar caracteres no numéricos
    if (inputValue.length >= 8 && inputValue.length <= 11) {
      setNumeroDocumento(inputValue);
      checkButtonStatus(tipoDocumento, inputValue);
    } else {
      setNumeroDocumento('');
      checkButtonStatus(tipoDocumento, '');
    }
    setNumeroDocumentoFormateado(inputValue);
  };

  const checkButtonStatus = (selectedTipoDocumento, enteredNumeroDocumento) => {
    if (selectedTipoDocumento !== '' && enteredNumeroDocumento !== '') {
      props.setDisabled(false);
    } else {
      props.setDisabled(true);
    }
  };

  return (
    <div>
      <Form.Group className="mb-3">
        <Form.Label>Tipo de documento</Form.Label>
        <Form.Select
          value={tipoDocumento}
          onChange={handleTipoDocumentoChange}
        >
          <option value="">Seleccione un tipo de documento</option>
          <option value="1">Cédula de ciudadanía</option>
          <option value="2">Pasaporte</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" placeholder='Numero documento'>
        <Form.Label>Numero documento</Form.Label>
        <Form.Control
          placeholder="Numero Documento"
          value={numeroDocumentoFormateado}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>País</Form.Label>
        <Form.Select>
          <option>País</option>
          {paises.map((pais, index) => (
            <option key={index} value={pais}>
              {pais}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
    </div>
  );
}

export default IngresoData;
