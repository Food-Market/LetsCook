const Recipes = () => {
    const view = `

    <div class="main__title">
    <h1>Recipes of the week</h1>
    <span>01/08 to 10/08</span>
</div>

<!----------MAIN CARDS-------->

<section class="main__carousel">
        <h2 class="main__carousel--subtitles" id="breakfast">BREAKFAST</h2>

    <div class="main__carousel__cards">
        <a href="#/RecipeDetails">
            <div class="main__carousel__cards__item">
                <div class="main__carousel__cards__item--img">
                    <img
                        src="https://i.imgur.com/1IVaIZI.png"
                        alt="air fried onion rings"
                    />
                </div>
                <div class="main__carousel__cards__item--titles">
                    <h3>Reciple title</h3>
                    <i class="fas fa-shopping-basket"></i>
                </div>
            </div>
        </a>
        <div class="main__carousel__cards__item">
            <div class="main__carousel__cards__item--img">
                <img
                    src="https://i.imgur.com/Nmrp8xV.png"
                    alt="air fried potato chips"
                />
            </div>
            <div class="main__carousel__cards__item--titles">
                <h3>Reciple title</h3>
                <i class="fas fa-shopping-basket"></i>
            </div>
        </div>
        <div class="main__carousel__cards__item">
            <div class="main__carousel__cards__item--img">
                <img src="https://i.imgur.com/MHAM88R.png" alt="" />
            </div>
            <div class="main__carousel__cards__item--titles">
                <h3>Reciple title</h3>
                <i class="fas fa-shopping-basket"></i>
            </div>
        </div>
        <div class="main__carousel__cards__item">
            <div class="main__carousel__cards__item--img">
                <img src="https://i.imgur.com/Ao9sEO0.png" />
            </div>
            <div class="main__carousel__cards__item--titles">
                <h3>Reciple title</h3>
                <i class="fas fa-shopping-basket"></i>
            </div>
        </div>
        <div class="main__carousel__cards__item">
            <div class="main__carousel__cards__item--img">
                <img src="https://i.imgur.com/8EMvIoq.png" />
            </div>
            <div class="main__carousel__cards__item--titles">
                <h3>Reciple title</h3>
                <i class="fas fa-shopping-basket"></i>
            </div>
        </div>
        <div class="main__carousel__cards__item">
            <div class="main__carousel__cards__item--img">
                <img src="https://i.imgur.com/AL3NuI5.jpg" />
            </div>
            <div class="main__carousel__cards__item--titles">
                <h3>Reciple title</h3>
                <i class="fas fa-shopping-basket"></i>
            </div>
        </div>
    </div>

    <h2 class="main__carousel--subtitles" id="lunches">LUNCHES</h2>

    <div class="main__carousel__cards">
        <div class="main__carousel__cards__item">
            <div class="main__carousel__cards__item--img">
                <img src="https://i.imgur.com/CYD57PF.png" />
            </div>
            <div class="main__carousel__cards__item--titles">
                <h3>Reciple title</h3>
                <i class="fas fa-shopping-basket"></i>
            </div>
        </div>
        <div class="main__carousel__cards__item">
            <div class="main__carousel__cards__item--img">
                <img src="https://i.imgur.com/F57Mxdr.png" />
            </div>
            <div class="main__carousel__cards__item--titles">
                <h3>Reciple title</h3>
                <i class="fas fa-shopping-basket"></i>
            </div>
        </div>
        <div class="main__carousel__cards__item">
            <div class="main__carousel__cards__item--img">
                <img src="https://i.imgur.com/3rtNxCH.png" />
            </div>
            <div class="main__carousel__cards__item--titles">
                <h3>Reciple title</h3>
                <i class="fas fa-shopping-basket"></i>
            </div>
        </div>
        <div class="main__carousel__cards__item">
            <div class="main__carousel__cards__item--img">
                <img src="https://i.imgur.com/u4rAC0m.jpg" />
            </div>
            <div class="main__carousel__cards__item--titles">
                <h3>Reciple title</h3>
                <i class="fas fa-shopping-basket"></i>
            </div>
        </div>
        <div class="main__carousel__cards__item">
            <div class="main__carousel__cards__item--img">
                <img src="https://i.imgur.com/qo6Nh1r.jpg" />
            </div>
            <div class="main__carousel__cards__item--titles">
                <h3>Reciple title</h3>
                <i class="fas fa-shopping-basket"></i>
            </div>
        </div>
        <div class="main__carousel__cards__item">
            <div class="main__carousel__cards__item--img">
                <img src="https://i.imgur.com/buLTBZX.jpg" />
            </div>
            <div class="main__carousel__cards__item--titles">
                <h3>Reciple title</h3>
                <i class="fas fa-shopping-basket"></i>
            </div>
        </div>
    </div>

    <h2 class="main__carousel--subtitles" id="dinners">DINNERS</h2>

    <div class="main__carousel__cards">
        <div class="main__carousel__cards__item">
            <div class="main__carousel__cards__item--img">
                <img src="https://i.imgur.com/c99ZueJ.jpg" />
            </div>
            <div class="main__carousel__cards__item--titles">
                <h3>Reciple title</h3>
                <i class="fas fa-shopping-basket"></i>
            </div>
        </div>
        <div class="main__carousel__cards__item">
            <div class="main__carousel__cards__item--img">
                <img src="https://i.imgur.com/yaleXfk.jpg" />
            </div>
            <div class="main__carousel__cards__item--titles">
                <h3>Reciple title</h3>
                <i class="fas fa-shopping-basket"></i>
            </div>
        </div>
        <div class="main__carousel__cards__item">
            <div class="main__carousel__cards__item--img">
                <img src="https://i.imgur.com/GLGMwSU.jpg" />
            </div>
            <div class="main__carousel__cards__item--titles">
                <h3>Reciple title</h3>
                <i class="fas fa-shopping-basket"></i>
            </div>
        </div>
        <div class="main__carousel__cards__item">
            <div class="main__carousel__cards__item--img">
                <img src="https://i.imgur.com/SvwlaiC.jpg" />
            </div>
            <div class="main__carousel__cards__item--titles">
                <h3>Reciple title</h3>
                <i class="fas fa-shopping-basket"></i>
            </div>
        </div>
        <div class="main__carousel__cards__item">
            <div class="main__carousel__cards__item--img">
                <img src="https://i.imgur.com/19RjiSU.jpg" />
            </div>
            <div class="main__carousel__cards__item--titles">
                <h3>Reciple title</h3>
                <i class="fas fa-shopping-basket"></i>
            </div>
        </div>
        <div class="main__carousel__cards__item">
            <div class="main__carousel__cards__item--img">
                <img src="https://i.imgur.com/KSrqj5W.jpg" />
            </div>
            <div class="main__carousel__cards__item--titles">
                <h3>Reciple title</h3>
                <i class="fas fa-shopping-basket"></i>
            </div>
        </div>
    </div>
    <section class="main__bottom">
        <div class="main__bottom--center">
            <a href="/plans"
                >Do you want to receive the ingredients at HOME?</a
            >
        </div>
    </section>
</section>

`

    const element = document.createElement("div")
    element.innerHTML = view

    return element
}

export default Recipes
