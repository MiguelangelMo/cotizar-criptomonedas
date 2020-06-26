import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda';
import useCripto from '../hooks/useCripto';
import Error from './Error'
import axios from 'axios';

const Form = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        if (stateMoneda.length < 1) handleError(true)
        else handleError(false)

        props.handleMoneda(stateMoneda);
        props.handleCripto(stateCripto);
    }

    const Boton = styled.button`
        margin-top: 20px;
        font-weight: bold;
        font-size: 20px;
        padding: 10px;
        background-color: #66a2fe;
        border: none;
        width: 100%;
        border-radius: 10px;
        color: #FFF;
        transition: background-color .3s ease;
        &:hover {
            background-color: #326AC0;
            cursor:pointer;
        }
    `;

    const MONEDA = [
        { COD: 'BSF', NAME: 'BOLIVAR FUERTE' },
        { COD: 'USD', NAME: 'DOLAR' },
        { COD: 'EUR', NAME: 'EURO' },
        { COD: 'GBP', NAME: 'LIBRE ESTERLINA' },
    ]

    // Aca van los state
    const [stateAPI, changeState] = useState([]);
    const [error, handleError] = useState(false)
    // aca estan los hooks
    const [stateMoneda, SelectMoneda] = useMoneda("Eligue Tu Moneda", '', MONEDA);
    const [stateCripto, SelectMonedaCripto] = useCripto("Eligue Tu Cripto", '', stateAPI);

    useEffect(() => {
        api()
    }, [])

    const api = async () => {
        const consultAPI = await axios.get("https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD");
        // const respuestAPI = await consultAPI.json();
        changeState(consultAPI.data.Data);
    }

    return (
        <form onSubmit={handleSubmit}>
            {error ? <Error title="Todos los campos deben estar completados!" /> : null}
            <SelectMoneda />
            <SelectMonedaCripto />
            <Boton
                type="submit">
                Calcular Cripto
            </Boton>
        </form>
    );
}

export default Form;