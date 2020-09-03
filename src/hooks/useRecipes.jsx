import { useState, useEffect } from "react"

function useRecipes() {
    const [recipes, setRecipes] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch("http://localhost:3000/recipes")
            .then((response) => response.json())
            .then(
                (result) => {
                    setIsLoaded(true)
                    setRecipes(result)
                },
                (error) => {
                    setIsLoaded(true)
                    setError(error)
                }
            )
    }, [])

    return [recipes, isLoaded, error]
}

export default useRecipes
