import React from "react"
import FontAwesomeIcon from "@fortawesome/react-fontawesome"
import { fabFacebook, fabInstragram } from "@fortawesome/free-brands-svg-icons"

export const Footer = () => {
    return (
        <footer class="footer">
            <section class="footer__menu">
                <nav class="footer__menu--links">
                    <a href="#/recipes">Recipes</a>
                    <a href="#/faq">FAQ</a>
                    <a href="#/plans">Plans</a>
                </nav>
            </section>
            <section class="footer__social">
                <div class="footer__social--icons">
                    <span>Follow us on the networks!</span>
                    <FontAwesomeIcon icon={fabFacebook} />
                    <FontAwesomeIcon icon={fabInstragram} />
                </div>
            </section>
            <span class="footer__bottom">
                <small class="footer__bottom--small">
                    LetsCook - Food Market © 2020
                </small>
            </span>
        </footer>
    )
}
