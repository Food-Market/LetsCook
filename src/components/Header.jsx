import React from "react"
import FontAwesomeIcon from "@fortawesome/react-fontawesome"
import {
    faShoppingBasket,
    faBars,
    faTimes,
    faSearch,
    faUser,
} from "@fortawesome/free-solid-svg-icons"

export const Header = () => {
    return (
        <header className="header">
            <div className="header__img">
                <img
                    className="header__img--logo"
                    src="https://i.imgur.com/nqsC2vJ.png"
                    alt="logo"
                />
            </div>
            <section className="header__menu">
                <nav className="header__menu--links">
                    <a href="#/recipes">Recipes</a>
                    <a href="#/faq">FAQ</a>
                    <a href="#/plans">Plans</a>
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
                        <a href="#/user">Account</a>
                        <a href="#/cart">Cart</a>
                        <a href="#/recipes">Recipes</a>
                        <a href="#breakfast">Breakfasts</a>
                        <a href="#lunches">Lunches</a>
                        <a href="#dinners">Dinners</a>
                        <a href="#/plans">Plans</a>
                        <a href="#/faq">FAQ</a>
                    </nav>
                </div>
            </section>
        </header>
    )
}
