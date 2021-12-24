import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SplitCardForm from './SplitCardForm'

const stripePromise = loadStripe('pk_test_51K6o6hEL0JKKKmq88Yqdhkbol0TG36x5s2gtDunm7GgAebDtzLL4n7540uRlt3TosXCENLuUJmZ9bd2sFAsU0qtW00q3Tg7xxY');

const ProccessPayment=()=>{

  return (
    <Elements stripe={stripePromise}>
      <SplitCardForm/>
    </Elements>
  );
};

export default ProccessPayment;