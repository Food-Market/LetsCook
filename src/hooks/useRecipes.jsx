import { useState, useEffect } from "react"

const useRecipes = () => {
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        window
            .fetch("http://localhost:3000/recipes")
            .then((response) => response.json())
            .then(
                (response) => {
                    setIsLoaded(true)
                    setRecipes(response)
                    console.log(recipes)
                },
                (error) => {
                    setIsLoaded(true)
                    setError(error)
                }
            )
    }, [])
    return [recipes, error, isLoaded]
}

export default useRecipes
