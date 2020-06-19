import React from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import Order from './Order';

function Form (props) {
    return (
        <form>
            <h2>Welcome to Lambda Eats: Where the food will make you say, "Oh Mega!"</h2>
            <p>This homepage form should include:<br />
            Name, Address, Phone Number, Pickup/Delivery option, Store Location dropdown</p>
            <div class='mainFormDiv'>
                <label>Your Name:&nbsp;</label>
                <input type='text' />
            </div>
            <div class='mainFormDiv'>
                <label>Address:&nbsp;</label>
                <input type='text' />
            </div>
            <div class='mainFormDiv'>
                <label>Phone Number:&nbsp;</label>
                <input type='phone' />
            </div>
            <div class='mainFormDiv'>
                <label>Pickup or Delivery:&nbsp;</label>
                <input type='radio' name='puDelivery' />Pickup&nbsp;
                <input type='radio' name='puDelivery' />Delivery
            </div>
            <BrowserRouter>
                <Link to='/pizza'><button>Customize Pizza</button></Link>
                <Route path='/pizza' component={Order} />
            </BrowserRouter>
        </form>
    );
}

export default Form;