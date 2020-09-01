import React from "react"
import { Link } from "react-router-dom"

import Logo from "../styles/assets/images/Logo.png"

const ErrorPage = () => {
    return (
        <section className="notFound">
            <div className="notFound__message">
                <img src={Logo} alt="Logo LetsCook" />
                <h2>Oops!</h2>
                <h1> Error 404</h1>
                <h3>This is not the web page you are looking for.</h3>
                <Link className="notFound__message--return" to="/">
                    <span> Back to the main page </span>
                </Link>
            </div>
        </section>
    )
}

export default ErrorPage
