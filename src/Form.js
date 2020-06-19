import React from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import Order from './Order';

function Form (props) {
    const {entries, inputChange, inputErrors, disability, formNext} = props;

    return (
        <form>
            <h2>Welcome to Lambda Eats: Where our food will make you say, "Oh Mega!"</h2>
            <p>This homepage form should include:<br />
            Name, Address, Phone Number, Pickup/Delivery option, Store Location dropdown</p>
            <div class='mainFormDiv'>
                <label>Your Name:&nbsp;</label>
                <input type='text' name='custName' />
            </div>
            <div class='mainFormDiv'>
                <label>Address:&nbsp;</label>
                <input type='text' name='custAddr' />
            </div>
            <div class='mainFormDiv'>
                <label>Phone Number:&nbsp;</label>
                <input type='phone' name='custPhone' />
            </div>
            <div class='mainFormDiv'>
                <label>Pickup or Delivery:&nbsp;</label>
                <input type='radio' name='puDelivery' value='Pickup' />Pickup&nbsp;
                <input type='radio' name='puDelivery' value='Delivery' />Delivery
            </div>
            <BrowserRouter>
                <Link to='/pizza'><button type='submit' name='submitBtn' disabled={disability}>Customize Pizza</button></Link>
                <Route path='/pizza' component={Order} />
            </BrowserRouter>
        </form>
    );
}

export default Form;