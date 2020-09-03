import React from "react"
import { Link } from "react-router-dom"
import CardItem from "../components/CardItem"
import Layout from "../components/Layout"

const Recipes = () => {
    return (
        <Layout>
            <section className="main">
                <div className="main__title">
                    <h1>Recipes of the week</h1>
                    <span>01/08 to 10/08</span>
                </div>

                <section className="main__carousel">
                    <h2 className="main__carousel--subtitles" id="breakfast">
                        BREAKFAST
                    </h2>

                    <div className="main__carousel__cards">
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                    </div>

                    <h2 className="main__carousel--subtitles" id="lunches">
                        LUNCHES
                    </h2>

                    <div className="main__carousel__cards">
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                    </div>

                    <h2 className="main__carousel--subtitles" id="dinners">
                        DINNERS
                    </h2>

                    <div className="main__carousel__cards">
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                    </div>

                    <section className="main__bottom">
                        <div className="main__bottom--center">
                            <Link to="/plans">
                                Do you want to receive the ingredients at HOME?
                            </Link>
                        </div>
                    </section>
                </section>
            </section>
        </Layout>
    )
}

export default Recipes
