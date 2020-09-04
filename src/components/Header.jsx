import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import SearchInput from "./SearchInput"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faShoppingBasket,
    faBars,
    faUser,
} from "@fortawesome/free-solid-svg-icons"

import HamburMenu from "../components/HamburMenu"

function useHamburMenu() {
    useEffect(() => {
        document
            .getElementById("#hambur-icon")
            .addEventListener("click", () => {
                console.log("click")
                document
                    .querySelector(".header__menu__hambur")
                    .classList.toggle("show")
            })

        document
            .getElementById("#closed-icon")
            .addEventListener("click", () => {
                document
                    .querySelector(".header__menu__hambur")
                    .classList.toggle("show")
            })
    }, [])
}

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
                    <a href="/bad">FAQ</a>
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
                            id="hambur-icon"
                            icon={faBars}
                        />
                    </div>
                </div>

                <HamburMenu />
            </section>
        </header>
    )
}

export default Header
