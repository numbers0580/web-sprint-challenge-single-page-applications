import React from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import Order from './Order';

function Form (props) {
    const {entries, inputChange, inputErrors, disability, formSubmit} = props;

    return (
        <form onSubmit={formSubmit}>
            <h2>Welcome to Lambda Eats: Where our food will make you say, "Oh Mega!"</h2>
            <div class='mainFormDiv'>
                <label>Your Name:&nbsp;</label>
                <input type='text' name='custName' value={entries.custName} maxLength='15' onChange={inputChange} />
            </div>
            <div class='mainFormDiv'>
                <label>Address:&nbsp;</label>
                <input type='text' name='custAddr' value={entries.custAddr} maxLength='40' onChange={inputChange} />
            </div>
            <div class='mainFormDiv'>
                <label>Phone Number:&nbsp;</label>
                <input type='phone' name='custPhone' value={entries.custPhone} onChange={inputChange} />
            </div>
            <div class='mainFormDiv'>
                <label>Pickup or Delivery:&nbsp;</label>
                <input type='radio' name='puDelivery' value='Pickup' onChange={inputChange} />Pickup&nbsp;
                <input type='radio' name='puDelivery' value='Delivery' onChange={inputChange} />Delivery
            </div>
            {/* <BrowserRouter>
                <Link to='/pizza'><button type='submit' name='submitBtn' disabled={disability}>Customize Pizza</button></Link>
                <Route path='/pizza' component={Order} />
            </BrowserRouter> */}
            <h2>Build Your Own Pizza</h2>
            <div>
                <label>Pizza Size:&nbsp;</label>
                <select name='pizzaSize' onChange={inputChange}>
                    <option value=''>--- Please Select a Size ---</option>
                    <option value='Small'>Small (8 inch)</option>
                    <option value='Medium'>Medium (11 inch)</option>
                    <option value='Large'>Large (14 inch)</option>
                    <option value='XL'>X-Large (16 inch)</option>
                </select>
            </div>
            <div>
                <label>Pizza Sauce:&nbsp;</label>
                <input type='radio' name='sauce' value='Tomato Sauce' onChange={inputChange} />Tomato Pizza Sauce&nbsp;
                <input type='radio' name='sauce' value='Alredo Sauce' onChange={inputChange} />Alfredo Sauce&nbsp;
                <input type='radio' name='sauce' value='BBQ Sauce' onChange={inputChange} />BBQ Sauce&nbsp;
            </div>
            <div>
                <label>Toppings:</label>
                <div class="toppingsList">
                    <div>
                        <input type='checkbox' name='Xtra Cheese' />Extra Cheese<br />
                        <input type='checkbox' name='Pepperoni' />Pepperoni<br />
                        <input type='checkbox' name='Sausage' />Sausage<br />
                        <input type='checkbox' name='Canadian Bacon' />Canadian Bacon<br />
                        <input type='checkbox' name='Breakfast Bacon' />Breakfast Bacon<br />
                        <input type='checkbox' name='Salami' />Salami<br />
                        <input type='checkbox' name='Ground Beef' />Ground Beef<br />
                        <input type='checkbox' name='Chicken' />Chicken<br />
                        <input type='checkbox' name='Pulled Pork' />Pulled Pork<br />
                        <input type='checkbox' name='Shrimp' />Shrimp<br />
                    </div>
                    <div>
                        <input type='checkbox' name='Mushrooms' />Mushrooms<br />
                        <input type='checkbox' name='Green Peppers' />Green Peppers<br />
                        <input type='checkbox' name='Red Peppers' />Red Peppers<br />
                        <input type='checkbox' name='Onions' />Onions<br />
                        <input type='checkbox' name='Spinach' />Spinach<br />
                        <input type='checkbox' name='Artichoke' />Artichoke<br />
                        <input type='checkbox' name='Black Olives' />Black Olives<br />
                        <input type='checkbox' name='Sun-dried Tomatoes' />Sun-dried Tomatoes<br />
                        <input type='checkbox' name='Jalapeno' />Jalapeno<br />
                        <input type='checkbox' name='Pineapple' />Pineapple<br />
                    </div>
                </div>
            </div>
            <div>
                <label>Special Instructions:</label><br />
                <textarea name='spcInstructions'></textarea>
            </div>
            <button type='submit' name='submitOrder' disabled={disability}>Confirm Order</button>
        </form>
    );
}

export default Form;