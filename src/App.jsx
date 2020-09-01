import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Layout from "./components/Layout"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Recipes from "./pages/Recipes"
import RecipeDetails from "./pages/RecipeDetails"
import OrderConfirmation from "./pages/OrderConfirmation"
import OrderChecked from "./pages/OrderChecked"
import Payments from "./pages/Payments"
import PageError from "./pages/PageError"

const App = () => {
    Route.path = "/"
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
                <Layout>
                    <Route path="/recipes" component={Recipes} />
                </Layout>

                <Layout>
                    <Route path="/recipe-details" component={RecipeDetails} />
                </Layout>

                <Route
                    path="/order-confirmation"
                    component={OrderConfirmation}
                />
                <Layout>
                    <Route path="/payments" component={Payments} />
                </Layout>

                <Route path="/order-checked" component={OrderChecked} />
                <Route component={PageError} />
            </Switch>
        </BrowserRouter>
    )
}

export default App
