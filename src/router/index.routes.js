import Recipes from "../pages/Recipes"
import RecipeDetails from "../pages/RecipeDetails"

let content = document.getElementById("main")

const router = (route) => {
    content.innerHTML = ""
    switch (route) {
        case "#/recipes":
            {
                return content.appendChild(Recipes())
            }
            break
        case "#/RecipeDetails":
            {
                return content.appendChild(RecipeDetails())
            }
            break
        case "#/faq":
            console.log("faq")
            break
        case "#/plans":
            console.log("plans")
            break
        case "#/cart":
            console.log("cart")
            break

        case "#/user":
            console.log("user")
            break

        default:
            console.log("404")
    }
}

export default router
