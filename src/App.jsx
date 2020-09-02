import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Recipes from './pages/Recipes';
import Profile from './pages/Profile';
import RecipeDetails from './pages/RecipeDetails';
import OrderConfirmation from './pages/OrderConfirmation';
import OrderChecked from './pages/OrderChecked';
import Payments from './pages/Payments';
import ErrorPage from './pages/ErrorPage';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
        <Layout>
          <Route path='/profile' component={Profile} />
          <Route path='/recipes' component={Recipes} />
          <Route path='/recipe-details' component={RecipeDetails} />
          <Route path='/payments' component={Payments} />
        </Layout>
        <Route path='/order-confirmation' component={OrderConfirmation} />
        <Route path='/order-checked' component={OrderChecked} />
        <Layout>
          <Route component={ErrorPage} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
