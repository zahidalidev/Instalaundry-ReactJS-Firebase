import React, { Component } from 'react';
import { StripeProvider, Elements } from "react-stripe-elements"

import Form from "./Form"

class Paynow extends Component {
    render() {
        return (
            <>
                <StripeProvider apiKey="pk_test_51ISGFTLuBGwlYLhYZv0JuDFVCxSTvXbZ1bEkqNblhSKgL04eWCTDGc94Nfebm2Ywb3IqOA6PfrPWZfc9hPkkpUql00pAXaOiL9" >
                    <Elements>
                        <Form />
                    </Elements>
                </StripeProvider>
            </>
        );
    }
}

export default Paynow;