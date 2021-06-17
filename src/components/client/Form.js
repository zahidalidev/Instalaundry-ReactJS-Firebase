import React, { Component } from 'react';
import { CardElement, injectStripe, ReactStripeElements } from "react-stripe-elements";

class Form extends Component {
    state = {
        name: "",
        amount: ''
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let token = await this.props.stripe.createToken({ name: this.state.name })
            console.log(token);
        } catch (error) {
            throw e;
        }
    }
    render() {
        return (
            <main className="container" >
                <form onSubmit={(e) => this.handleSubmit(e)} className="form-group mt-3 border-primary rounded shadow-lg p-3" >
                    <label>Name</label>
                    <input
                        type="text"
                        className="input-group my-1 p-1 border border-dark"
                        value={this.state.name}
                        onChange={(e) => this.setState({ name: e.target.value })}
                    />
                    <label>Amount</label>
                    <input
                        type="text"
                        className="input-group my-1 p-1 border border-dark"
                        value={this.state.amount}
                        onChange={(e) => this.setState({ amount: e.target.value })}
                    />
                    <label>CC Number -- Exp. Date -- CVC</label>
                    <CardElement className="p-2 border border-dark" />
                    <button className="btn btn-primary border border-dark shadow mt-3" >Charge It</button>
                </form>
            </main>
        );
    }
}

export default injectStripe(Form)