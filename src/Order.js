import React from 'react';

function Order (props) {
    return (
        <form>
            <h2>Build Your Own Pizza</h2>
            <div>
                <label>Pizza Size:&nbsp;</label>
                <select>
                    <option>--- Please Select a Size ---</option>
                    <option value='Small'>Small (8 inch)</option>
                    <option value='Medium'>Medium (11 inch)</option>
                    <option value='Large'>Large (14 inch)</option>
                    <option value='XL'>X-Large (16 inch)</option>
                </select>
            </div>
            <div>
                <label>Pizza Sauce:&nbsp;</label>
                <input type='radio' name='sauce' />Tomato Pizza Sauce&nbsp;
                <input type='radio' name='sauce' />Alfredo Sauce&nbsp;
                <input type='radio' name='sauce' />BBQ Sauce&nbsp;
            </div>
            <div>
                <label>Toppings:</label>
                <div class="toppingsList">
                    <div>
                        <input type='checkbox' />Extra Cheese<br />
                        <input type='checkbox' />Pepperoni<br />
                        <input type='checkbox' />Sausage<br />
                        <input type='checkbox' />Canadian Bacon<br />
                        <input type='checkbox' />Breakfast Bacon<br />
                        <input type='checkbox' />Salami<br />
                        <input type='checkbox' />Ground Beef<br />
                        <input type='checkbox' />Chicken<br />
                        <input type='checkbox' />Pulled Pork<br />
                        <input type='checkbox' />Shrimp<br />
                    </div>
                    <div>
                        <input type='checkbox' />Mushrooms<br />
                        <input type='checkbox' />Green Peppers<br />
                        <input type='checkbox' />Red Peppers<br />
                        <input type='checkbox' />Onions<br />
                        <input type='checkbox' />Spinach<br />
                        <input type='checkbox' />Artichoke<br />
                        <input type='checkbox' />Black Olives<br />
                        <input type='checkbox' />Sun-dried Tomatoes<br />
                        <input type='checkbox' />Jalapeno<br />
                        <input type='checkbox' />Pineapple<br />
                    </div>
                </div>
            </div>
            <div>
                <label>Special Instructions:</label><br />
                <textarea></textarea>
            </div>
            <button>Confirm Order</button>
        </form>
    );
}

export default Order;