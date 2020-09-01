import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Layout from "./components/Layout"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Recipes from "./pages/Recipes"
import OrderConfirmation from "./pages/OrderConfirmation"
import OrderChecked from "./pages/OrderChecked"
import Payments from "./pages/Payments"
import RecipeDetails from "./pages/RecipeDetails"

const App = () => {
    Route.path = "/"
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={SignUp} />
                <Layout>
                    <Route exact path="/recipes" component={Recipes} />
                </Layout>

                <Layout>
                    <Route
                        exact
                        path="/recipe-details"
                        component={RecipeDetails}
                    />
                </Layout>

                <Route
                    exactpath="/order-confirmation"
                    component={OrderConfirmation}
                />
                <Layout>
                    <Route exact path="/payments" component={Payments} />
                </Layout>

                <Route exact path="/order-checked" component={OrderChecked} />
            </Switch>
        </BrowserRouter>
    )
}

export default App
