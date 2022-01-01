import React from 'react';
import StripeCheckout from "react-stripe-checkout";
import {connect} from "react-redux";
import * as actions from '../actions'

function Payments() {
    return (
        <StripeCheckout
            name="Feeby"
            description="$5 for five email credits"
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
            amount={500}
            token={token => actions.handleToken(token)}
        >
        <button className="btn">
            Add Credits
        </button>
        </StripeCheckout>
    );
}

export default connect(null, actions)(Payments);