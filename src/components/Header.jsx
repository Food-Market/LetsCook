import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import {
    faShoppingBasket,
    faBars,
    faTimes,
    faSearch,
    faUser,
} from "@fortawesome/free-solid-svg-icons"

const Header = () => {
    return (
        <header className="header">
            <Link className="header__img" to="/Recipes">
                <img
                    className="header__img--logo"
                    src="https://i.imgur.com/nqsC2vJ.png"
                    alt="logo"
                />
            </Link>
            <section className="header__menu">
                <nav className="header__menu--links">
                    <Link href="#" to="/recipes">
                        Recipes
                    </Link>
                    <a href="#">FAQ</a>
                    <a href="#">Plans</a>
                </nav>
                <div class="header__menu__user">
                    <input type="text" placeholder="Look for your recipe" />
                    <FontAwesomeIcon icon={faSearch} />
                    <div class="header__menu__user--icons">
                        <FontAwesomeIcon icon={faShoppingBasket} />

                        <FontAwesomeIcon icon={faUser} />

                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </div>

                <div className="header__menu__hambur .show">
                    <div className="header__menu__hambur__top">
                        <img
                            src="https://i.imgur.com/nqsC2vJ.png"
                            alt="small-logo"
                        />
                        <FontAwesomeIcon icon={faTimes} />
                    </div>
                    <div className="header__menu__hambur--search">
                        <input type="text" placeholder="Look for your recipe" />
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                    <nav className="header__menu__hambur__menu">
                        <a href="#">Account</a>
                        <a href="#">Cart</a>
                        <Link href="#/recipes">Recipes</Link>
                        <a href="#breakfast">Breakfasts</a>
                        <a href="#lunches">Lunches</a>
                        <a href="#dinners">Dinners</a>
                        <a href="#">Plans</a>
                        <a href="#">FAQ</a>
                    </nav>
                </div>
            </section>
        </header>
    )
}

export default Header
