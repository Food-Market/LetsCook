import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons"

const CardItem = () => {
    return (
        <>
            <div class="main__carousel__cards__item">
                <div class="main__carousel__cards__item--img">
                    <img
                        src="https://i.imgur.com/1IVaIZI.png"
                        alt="air fried onion rings"
                    />
                </div>
                <div class="main__carousel__cards__item--titles">
                    <h3>Reciple title</h3>
                    <FontAwesomeIcon icon={faShoppingBasket} />
                </div>
            </div>
        </>
    )
}

export default CardItem
