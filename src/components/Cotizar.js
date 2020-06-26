import React, { useState } from 'react';
import styled from '@emotion/styled';

const DIV = styled.div`
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
    background-color: rgba(0,0,0,0.4);
    padding: .5em;
`;

const P = styled.p`
    font-size: 18px;
    span {
        font-weight:bold;
    }
`;

const P2 = styled.p`
    font-size: 1.5rem;
        span {
            font-weight:bold;
        }
`;

const Cotizar = (props) => {

    if(Object.keys(props.respAPI).length < 1) return null

    console.log(props.respAPI)

    return ( 
        <DIV>
            <P>El Precio es: <span>{props.respAPI.PRICE}</span></P>
            <P2>El precio alto del día: <span>{props.respAPI.HIGHDAY}</span></P2>
            <P2>El precio bajo del día: <span>{props.respAPI.LOWDAY}</span></P2>
            <P2>Variación último 24 horas: <span>{props.respAPI.CHANGEPCT24HOUR}</span></P2>
            <P2>Última Actualización: <span>{props.respAPI.LASTUPDATE}</span></P2>
        </DIV>
     );
}
 
export default Cotizar;