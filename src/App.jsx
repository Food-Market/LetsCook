import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Recipes from './pages/Recipes';
import OrderConfirmation from './pages/OrderConfirmation';
import OrderChecked from './pages/OrderChecked';
import PageError from './pages/PageError';
import Payments from './pages/Payments';

const App = () => {
  Route.path = '/';
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/recipes' component={Recipes} />
        <Route exact path='/order-confirmation' component={OrderConfirmation} />
        <Route exact path='/order-checked' component={OrderChecked} />
        <Route exact path='/payments' component={Payments} />
        <Route component={PageError} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
