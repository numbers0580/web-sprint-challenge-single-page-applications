import React, { useState, useEffect } from "react";
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import Form from './Form';
import Order from './Order';

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <h1>Lambda Eats</h1>
        <nav>
          <div className="mainBtns">
            <Link to='/'><button>Home</button></Link>
            <button>Menu</button>
            <Link to='/pizza'><button>Order</button></Link>
          </div>
          <div className="rightBtn">
            <button>Sign In</button>
          </div>
        </nav>
      </header>
      <Switch>
        <Route exact path='/'>
          <Form />
        </Route>
        <Route path='/pizza' component={Order} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
