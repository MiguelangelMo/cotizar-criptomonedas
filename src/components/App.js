import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import '../css/App.css';
import Form from './Form';
import Cotizar from './Cotizar';
import Spinner from './Spinner';

const Contenedor = styled.div`
max-width: 900px;
margin: 0 auto;
@media (min-width:992px) {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
}
`;

const Imagen = styled.img`
max-width: 100%;
margin-top: 5rem;
`;
const Heading = styled.h1`
font-family: 'Bebas Neue', cursive;
color: #FFF;
text-align:left;
font-weight: 700;
font-size: 50px;
margin-bottom: 50px;
margin-top: 80px;
&::after {
content: '';
width: 100px;
height: 6px;
background-color: #66A2FE;
display:block;
}
`;

function App() {

  // imagen Cripto Moneda
  const imagen = "/images/cryptomonedas.png";

  // Manejo de estados
  const [moneda, handleMoneda] = useState('');
  const [cripto, handleCripto] = useState('');
  const [respAPI, saveRespApi] = useState({});
  const [spinner, handleSpinner] = useState(false);

  // Arranca el Effect
  useEffect(() => {

    const cotizarMoneda = async () => {
      if (moneda.length < 1 && cripto.length < 1) return null;
      const consultAPI = await axios.get(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`);
      handleSpinner(true)

      setTimeout(() => {
        handleSpinner(false)
        saveRespApi(consultAPI.data.DISPLAY[cripto][moneda])
      }, 3000)

    }
    cotizarMoneda()
  }, [moneda, cripto])

  const Show = () => {
    if (spinner) {
      return (
        <Spinner />
      )
    } else {
      return (
        <Cotizar respAPI={respAPI} />
      )
    }
  }

  return (
    <Contenedor>
      <div>
        <Imagen
          src={imagen}
          alt="Moneda Cripto"
        />
      </div>
      <div>
        <Heading>
          Cotizar Cripto
        </Heading>
        <Form handleMoneda={handleMoneda} handleCripto={handleCripto} />
        <Show/>
      </div>
    </Contenedor>
  );
}

export default App;
