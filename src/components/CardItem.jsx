import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons"

import useRecipes from "../hooks/useRecipes"

const CardItem = () => {
    const { recipes, error, isLoaded } = useRecipes()
    if (error) {
        return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else {
        {
            recipes.map((recipe) => {
                return (
                    <div className="main__carousel__cards__item">
                        <div className="main__carousel__cards__item--img">
                            <img
                                key={recipe.num_id}
                                src={recipe.url_image}
                                alt={recipe.des_name}
                            />
                        </div>
                        <div className="main__carousel__cards__item--titles">
                            <h3 key={recipe.num_id}>{recipe.des_name}</h3>
                            <FontAwesomeIcon icon={faShoppingBasket} />
                        </div>
                    </div>
                )
            })
        }
    }
}

export default CardItem
