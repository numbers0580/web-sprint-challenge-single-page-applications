import React, { useState, useEffect } from "react";
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import * as yup from 'yup';
import {v4} from 'uuid';
import Form from './Form';
import Home from './Home';
import axios from 'axios';

const formSchema = yup.object().shape({
  custName: yup
    .string()
    .min(2, "Your name must be at least 2 characters")
    .required("A name is required to place the order"),
  custAddr: yup
    .string()
    .required("So that we can find you"),
  custPhone: yup
    .number()
    .required("So that we can call you"),
  puDelivery: yup
    .string()
    .required("Please select either Pickup or Delivery"),
  pizzaSize: yup
    .string()
    .required("Please choose which size of Pizza"),
  sauce: yup
    .string()
    .required("Please select which kind of sauce you'd like")
});

const blankForm = {
  custName: '',
  custAddr: '',
  custPhone: '',
  puDelivery: '',
  pizzaSize: '',
  sauce: '',
  xtraCheese: false,
  pepperoni: false,
  sausage: false,
  canadianBacon: false,
  breakfastBacon: false,
  salami: false,
  groundBeef: false,
  chicken: false,
  pulledPork: false,
  shrimp: false,
  mushrooms: false,
  greenPeppers: false,
  redPeppers: false,
  onions: false,
  spinach: false,
  artichoke: false,
  blackOlives: false,
  sundriedTomatoes: false,
  jalapeno: false,
  pineapple: false,
  spcInstructions: ''

};

const blankErrors = {
  custName: '',
  custAddr: '',
  custPhone: '',
  puDelivery: '',
  pizzaSize: '',
  sauce: ''
};

const App = () => {
  const [getPizza, setPizzaInOven] = useState([]);
  const [mainEntries, updateEntries] = useState(blankForm);
  const [mainErrors, updateErrors] = useState(blankErrors);
  const [isDisabled, changeDisabled] = useState(true);

  const submitOrder = function(newOrder) {
    axios.post('https://reqres.in/api/users', newOrder)
      .then(placeOrder => {
        console.log('placeOrder.data is', placeOrder.data);
        setPizzaInOven([...getPizza, placeOrder.data]);
        console.log('getPizza is', getPizza);
      })
      .catch(orderError => {
        console.log('Error in adding customer\'s order');
      })
      .finally(evt => {
        updateEntries(blankForm);
      })
  };

  let newPizzaOrder = getPizza;
  console.log('Data Posted to database is:', newPizzaOrder[0]);

  const changedMainForm = function(event) {
    const {name, value} = event.target;

    yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => {
        updateErrors({...mainErrors, [name]: ""});
      })
      .catch(err => {
        updateErrors({...mainErrors, [name]: err.errors[0]});
      })

    updateEntries({...mainEntries, [name]: value});
  };

  const checkToppings = function(evt) {
    const {name, checked} = evt.target;
    updateEntries({...mainEntries, [name]: checked});
  }

  const changedSpecInst = function(specEvent) {
    const {name, value} = specEvent.target;
    updateEntries({...mainEntries, [name]: value});
  }

  const clickedConfirm = function(cEvent) {
    cEvent.preventDefault();

    const newCustomer = {
      id: v4(),
      custName: mainEntries.custName.trim(),
      custAddr: mainEntries.custAddr.trim(),
      custPhone: mainEntries.custPhone.trim(),
      puDelivery: mainEntries.puDelivery,
      pizzaSize: mainEntries.pizzaSize,
      sauce: mainEntries.sauce,
      xtraCheese: mainEntries.xtraCheese,
      pepperoni: mainEntries.pepperoni,
      sausage: mainEntries.sausage,
      canadianBacon: mainEntries.canadianBacon,
      breakfastBacon: mainEntries.breakfastBacon,
      salami: mainEntries.salami,
      groundBeef: mainEntries.groundBeef,
      chicken: mainEntries.chicken,
      pulledPork: mainEntries.pulledPork,
      shrimp: mainEntries.shrimp,
      mushrooms: mainEntries.mushrooms,
      greenPeppers: mainEntries.greenPeppers,
      redPeppers: mainEntries.redPeppers,
      onions: mainEntries.onions,
      spinach: mainEntries.spinach,
      artichoke: mainEntries.artichoke,
      blackOlives: mainEntries.blackOlives,
      sundriedTomatoes: mainEntries.sundriedTomatoes,
      jalapeno: mainEntries.jalapeno,
      pineapple: mainEntries.pineapple,
      spcInstructions: mainEntries.spcInstructions
    };

    submitOrder(newCustomer);
  }

  useEffect(() => {
    formSchema.isValid(mainEntries).then(valid => {
      changeDisabled(!valid);
    })
  }, [mainEntries]);

  return (
    <BrowserRouter>
      <header>
        <h1>Lambda Eats</h1>
        <nav>
          <div className="mainBtns">
            <Link to='/'><button>Home</button></Link>
            <button>Menu</button>
            {/* <Link to='/pizza'><button>Order</button></Link> */}
          </div>
          <div className="rightBtn">
            <button>Sign In</button>
          </div>
        </nav>
      </header>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/pizza'>
          <Form entries={mainEntries} inputChange={changedMainForm} inputChange2={changedSpecInst} checkboxInput={checkToppings} inputErrors={mainErrors} disability={isDisabled} formSubmit={clickedConfirm} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default App;
