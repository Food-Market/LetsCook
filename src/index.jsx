import React from 'react'; //para usar JSX (HTMl dentro de JS)
import ReactDOM from 'react-dom';
import './styles/styles.scss';

// import Payments from './pages/Payments';
// ReactDOM.render(<Payments />, document.getElementById('app'));

// import App from './App';
// import Profile from './pages/Profile';
// ReactDOM.render(<Profile />, document.getElementById('app'));
import RecipeDetails from './pages/recipeDetails';
ReactDOM.render(<RecipeDetails />, document.getElementById('app'));
