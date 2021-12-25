import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../Header/Header';
import ProccessPayment from './ProccessPayment';

const Donate = () => {
    return (
        <>
        <Header></Header>
        <Container style={{textAlign:'center'}}>
            <h2>Donate Here</h2>
            <ProccessPayment></ProccessPayment>
        </Container>
        </>
    );
};

export default Donate;