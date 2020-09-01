import React from "react"
import SearchInput from "./SearchInput"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import {
    faShoppingBasket,
    faBars,
    faTimes,
    faUser,
} from "@fortawesome/free-solid-svg-icons"

const Header = () => {
    return (
        <header className="header">
            <Link className="header__img" to="/recipes">
                <img
                    className="header__img--logo"
                    src="https://i.imgur.com/nqsC2vJ.png"
                    alt="logo"
                />
            </Link>
            <section className="header__menu">
                <nav className="header__menu--links">
                    <Link to="/recipes">Recipes</Link>
                    <a href="#">FAQ</a>
                    <a href="#">Plans</a>
                </nav>
                <div className="header__menu__user">
                    <SearchInput />
                    <div className="header__menu__user--icons">
                        <FontAwesomeIcon
                            className="header__menu__user--icons--fa"
                            icon={faShoppingBasket}
                        />
                        <Link to="/profile">
                            <FontAwesomeIcon
                                className="header__menu__user--icons--fa"
                                icon={faUser}
                            />
                        </Link>
                        <FontAwesomeIcon
                            className="header__menu__user--icons--fa"
                            icon={faBars}
                        />
                    </div>
                </div>

                <div className="header__menu__hambur .show">
                    <div className="header__menu__hambur__top">
                        <img
                            src="https://i.imgur.com/nqsC2vJ.png"
                            alt="small-logo"
                        />
                        <FontAwesomeIcon
                            className="header__menu__hambur__top--fa"
                            icon={faTimes}
                        />
                    </div>
                    <div className="header__menu__hambur--search">
                        <SearchInput />
                    </div>
                    <nav className="header__menu__hambur__menu">
                        <a href="#">Account</a>
                        <a href="#">Cart</a>
                        <Link to="/recipes">Recipes</Link>
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
