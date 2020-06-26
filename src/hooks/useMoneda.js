import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const Select = styled.select`
    width: 100%;
    display:block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`

const useMoneda = (label, stateStart, opcitions) => {

    const [state, setstate] = useState(stateStart);

    const SelectMoneda = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select
                name="monedas"
                id="monedas"
                onChange={(e) => setstate(e.target.value)}
                value={state}
            >
                <option value="">-- SELECCIONE --</option>
                {opcitions.map(resp => (
                    <option key={resp.COD} value={resp.COD}> {resp.NAME}</option>
                ))}

            </Select>
        </Fragment>
    );
    return [state, SelectMoneda, setstate];

}

export default useMoneda;