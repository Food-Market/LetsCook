import React from "react"
import Layout from "../components/Layout"

const RecipeDetails = (props) => {
    const recipeId = { id: props.location.state }
    const recipes = { items: props.location.state }

    console.log(recipeId.id.idRecipe)
    console.log(recipes.items.listRecipes)

    return recipes.items.listRecipes.map((recipe) => {
        if (recipe.num_id === recipeId.id.idRecipe) {
            return (
                <Layout>
                    <section className="main-details">
                        <section className="main-image">
                            <img src={recipe.url_image} alt={recipe.des_name} />
                        </section>
                        <section className="main-introduction">
                            <h1>{recipe.des_name}</h1>
                            <div className="main_introduction__people">
                                2
                                <img
                                    src="https://i.imgur.com/gPvXjmi.png"
                                    className="main-introduction__peopleIcon"
                                    alt=""
                                />
                            </div>
                            <div className="main_introduction__time">
                                <p>{recipe.list_tags.split(",")[0]}</p>

                                <img
                                    src="https://i.imgur.com/KvO2QIm.png"
                                    className="main-introduction__timerIcon"
                                    alt=""
                                />
                            </div>
                            <p>{recipe.des_description}</p>
                            <div className="main-introduction__loveIcon">
                                <a href=""></a>
                            </div>
                            <div className="main-introduction__shareIcon">
                                <a href=""></a>
                            </div>
                        </section>
                        <section className="main-ingredients">
                            <div className="main-ingredients__container1">
                                {recipe.list_ingredients
                                    .split(",")
                                    .map((item) => {
                                        return (
                                            <ul>
                                                <li className="main-ingredientes__name">
                                                    {item}
                                                </li>
                                            </ul>
                                        )
                                    })}

                                <p className="main-ingredients__quantity">
                                    150 g.
                                </p>
                            </div>
                        </section>
                        <section className="main-steps">
                            <h1>Steps</h1>
                            <div className="main-steps__container">
                                <ol>
                                    {recipe.list_steps
                                        .split(",")
                                        .map((item) => {
                                            return <li>{item}</li>
                                        })}
                                </ol>
                            </div>
                        </section>
                        <section className="main-rate">
                            <h1>Rater this recipe</h1>
                            <div className="main-rate__icons">
                                <a href="" className="main-rate__icon"></a>
                                <a href="" className="main-rate__icon"></a>
                                <a href="" className="main-rate__icon"></a>
                                <a href="" className="main-rate__icon"></a>
                                <a href="" className="main-rate__icon"></a>
                            </div>
                        </section>
                        <section className="main-addTo">
                            <button>ADD TO CART</button>
                        </section>
                    </section>
                </Layout>
            )
        }
    })
}

export default RecipeDetails
