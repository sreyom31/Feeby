import React from 'react';
import StripeCheckout from "react-stripe-checkout";

function Payments(props) {
    return (
        <StripeCheckout
            name="Feeby"
            description="$5 for five email credits"
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
            amount={500}
            token={token => console.log(token)}
        >
        <button className="btn">
            Add Credits
        </button>
        </StripeCheckout>
    );
}

export default Payments;