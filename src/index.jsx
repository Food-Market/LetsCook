import React from "react" //para usar JSX (HTMl dentro de JS)
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"

import "./styles/styles.scss"

import App from "./App"

// import RecipeDetails from "./pages/RecipeDetails"
//import Payments from "./pages/Payments"
//import RecipeDetails from "./pages/RecipeDetails"
// import Recipes from "./pages/Recipes"
// import ErrorPage from "./pages/ErrorPage"

ReactDOM.render(<App />, document.getElementById("app"))
