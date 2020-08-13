import "./styles/styles.css"
import "./js/hambur-menu"
import Recipes from "./pages/Recipes"
import router from "./router/index.routes"

window.addEventListener("load", () => {
    let content = document.getElementById("main")
    content.appendChild(Recipes())
})

window.addEventListener("hashchange", () => {
    router(window.location.hash)
})
