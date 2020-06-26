import React, { useState } from 'react';
import styled from '@emotion/styled';

const P = styled.p`
    background-color: #b7322c;
    padding: 1rem;
    color: #FFF;
    font-size: 30px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    font-family: 'Bebas Neue', cursive;
`;

const Error = (props) => {
    return ( 
        <div>
            <P>{props.title}</P>
        </div>
     );
}
 
export default Error;