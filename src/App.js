import React, { useState, useEffect } from "react";
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import * as yup from 'yup';
import {v4} from 'uuid';
import Form from './Form';
import Order from './Order';

const formSchema = yup.object().shape({
  custName: yup
    .string()
    .min(2, "Your name must be at least 2 characters")
    .required("A name is required to place the order")
});

const blankForm = {
  custName: '',
  custAddr: '',
  custPhone: '',
  puDelivery: ''
};

const blankErrors = {
  custName: '',
  custAddr: '',
  custPhone: '',
  puDelivery: ''
};

const App = () => {
  const [users, setUsers] = useState([]);
  const [mainEntries, updateEntries] = useState(blankForm);
  const [mainErrors, updateErrors] = useState(blankErrors);
  const [isDisabled, changeDisabled] = useState(true);

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

  const clickedCustomize = function(cEvent) {
    cEvent.preventDefault();

    const newCustomer = {
      id: v4(),
      custName: mainEntries.custName.trim(),
      custAddr: mainEntries.custAddr.trim(),
      custPhone: mainEntries.custPhone.trim(),
      puDelivery: mainEntries.puDelivery
    };
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
        <Route exact path='/pizza' component={Order} />
        <Route exact path='/'>
          <Form entries={mainEntries} inputChange={changedMainForm} inputErrors={mainErrors} disability={isDisabled} formNext={clickedCustomize} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default App;
