import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons"

import useRecipes from "../utils/useRecipes"

const CardItem = () => {
    const { recipes, error, isLoaded } = useRecipes()
    if (error) {
        return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else {
        return (
            <div className="main__carousel__cards__item">
                <div className="main__carousel__cards__item--img">
                    {recipes.map((recipe) => (
                        <img
                            key={recipe.des_name}
                            src={recipe.url_image}
                            alt={recipe.des_name}
                        />
                    ))}
                </div>
                <div className="main__carousel__cards__item--titles">
                    <h3>{recipe.des_name}</h3>
                    <FontAwesomeIcon icon={faShoppingBasket} />
                </div>
            </div>
        )
    }
}

export default CardItem
