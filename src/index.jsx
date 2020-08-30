import React from "react" //para usar JSX (HTMl dentro de JS)
import ReactDOM from "react-dom"
import "./styles/styles.scss"
import ImagesSection from './components/ImagesSection';
import HeaderHomeSection from './components/HeaderHomeSection';
import MainHomeSection from './components/MainHomeSection';

// import App from "./App"



ReactDOM.render(
<div className="body-home">
<ImagesSection/>
<HeaderHomeSection/>
<MainHomeSection/>
</div>, document.getElementById("app"))
