import React from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import Order from './Order';

function Form (props) {
    const {entries, inputChange, inputChange2, checkboxInput, inputErrors, disability, formSubmit} = props;

    return (
        <form onSubmit={formSubmit}>
            <h2>Welcome to Lambda Eats: Where our food will make you say, "Oh Mega!"</h2>
            <div className='mainFormDiv'>
                <label>Your Name:&nbsp;</label>
                <input type='text' name='custName' value={entries.custName} maxLength='15' onChange={inputChange} />
            </div>
            <div className='mainFormDiv'>
                <label>Address:&nbsp;</label>
                <input type='text' name='custAddr' value={entries.custAddr} maxLength='40' onChange={inputChange} />
            </div>
            <div className='mainFormDiv'>
                <label>Phone Number:&nbsp;</label>
                <input type='phone' name='custPhone' value={entries.custPhone} onChange={inputChange} />
            </div>
            <div className='mainFormDiv'>
                <label>Pickup or Delivery:&nbsp;</label>
                <input type='radio' name='puDelivery' value='Pickup' onChange={inputChange} />Pickup&nbsp;
                <input type='radio' name='puDelivery' value='Delivery' onChange={inputChange} />Delivery
            </div>
            <div className='errorMessages'>
                <div>{inputErrors.custName}</div>
                <div>{inputErrors.custAddr}</div>
                <div>{inputErrors.custPhone}</div>
                <div>{inputErrors.puDelivery}</div>
                <div>{inputErrors.pizzaSize}</div>
                <div>{inputErrors.sauce}</div>
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
                <div className="toppingsList">
                    <div>
                        <input type='checkbox' name='xtraCheese' checked={entries.xtraCheese} onChange={checkboxInput} />Extra Cheese<br />
                        <input type='checkbox' name='pepperoni' checked={entries.pepperoni} onChange={checkboxInput} />Pepperoni<br />
                        <input type='checkbox' name='sausage' checked={entries.sausage} onChange={checkboxInput} />Sausage<br />
                        <input type='checkbox' name='canadianBacon' checked={entries.canadianBacon} onChange={checkboxInput} />Canadian Bacon<br />
                        <input type='checkbox' name='breakfastBacon' checked={entries.breakfastBacon} onChange={checkboxInput} />Breakfast Bacon<br />
                        <input type='checkbox' name='salami' checked={entries.salami} onChange={checkboxInput} />Salami<br />
                        <input type='checkbox' name='groundBeef' checked={entries.groundBeef} onChange={checkboxInput} />Ground Beef<br />
                        <input type='checkbox' name='chicken' checked={entries.chicken} onChange={checkboxInput} />Chicken<br />
                        <input type='checkbox' name='pulledPork' checked={entries.pulledPork} onChange={checkboxInput} />Pulled Pork<br />
                        <input type='checkbox' name='shrimp' checked={entries.shrimp} onChange={checkboxInput} />Shrimp<br />
                    </div>
                    <div>
                        <input type='checkbox' name='mushrooms' checked={entries.mushrooms} onChange={checkboxInput} />Mushrooms<br />
                        <input type='checkbox' name='greenPeppers' checked={entries.greenPeppers} onChange={checkboxInput} />Green Peppers<br />
                        <input type='checkbox' name='redPeppers' checked={entries.redPeppers} onChange={checkboxInput} />Red Peppers<br />
                        <input type='checkbox' name='onions' checked={entries.onions} onChange={checkboxInput} />Onions<br />
                        <input type='checkbox' name='spinach' checked={entries.spinach} onChange={checkboxInput} />Spinach<br />
                        <input type='checkbox' name='artichoke' checked={entries.artichoke} onChange={checkboxInput} />Artichoke<br />
                        <input type='checkbox' name='blackOlives' checked={entries.blackOlives} onChange={checkboxInput} />Black Olives<br />
                        <input type='checkbox' name='sundriedTomatoes' checked={entries.sundriedTomatoes} onChange={checkboxInput} />Sun-dried Tomatoes<br />
                        <input type='checkbox' name='jalapeno' checked={entries.jalapeno} onChange={checkboxInput} />Jalapeno<br />
                        <input type='checkbox' name='pineapple' checked={entries.pineapple} onChange={checkboxInput} />Pineapple<br />
                    </div>
                </div>
            </div>
            <div>
                <label>Special Instructions:</label><br />
                <textarea name='spcInstructions' value={entries.spcInstructions} onChange={inputChange2}></textarea>
            </div>
            <button type='submit' name='submitOrder' disabled={disability}>Confirm Order</button>
        </form>
    );
}

export default Form;