import React from 'react';
import { Container } from 'react-bootstrap';
import ProccessPayment from './ProccessPayment';

const Donate = () => {
    return (
        <Container style={{textAlign:'center'}}>
            <h2>Donate Here</h2>
            <ProccessPayment></ProccessPayment>
        </Container>
    );
};

export default Donate;