import React from 'react';
import StripeCheckout from "react-stripe-checkout";

function Payments(props) {
    return (
        <StripeCheckout stripeKey={process.env.REACT_APP_STRIPE_KEY} amount={500} token={token => console.log(token)}/>
    );
}

export default Payments;