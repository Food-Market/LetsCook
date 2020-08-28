import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./components/Layout";
import Recipes from "./pages/Recipes";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PageError from "./pages/PageError";
import RecipeDetails from "./pages/recipeDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/recipes" component={Recipes} />
          <Route exact path="/recipeDetails" component={RecipeDetails} />
          <Route component={PageError} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
