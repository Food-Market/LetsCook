import React from "react"
import { Link } from "react-router-dom"

import Logo from "../styles/assets/images/Logo.png"

const PageError = () => {
    return (
        <section className="notFound">
            <div className="notFound--message">
                <img src={Logo} alt="Logo LetsCook" />
                <h1>Lo Sentimos</h1>
                <h2>Página no Encontrada</h2>
                <Link to="/">Regresa al Inicio</Link>
            </div>
        </section>
    )
}

export default PageError
