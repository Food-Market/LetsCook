import React, { useState, useEffect } from "react"

function useRecipes() {
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [recipes, setRecipes] = useState({ recipes: [] })

    useEffect(() => {
        fetch("http://161.35.124.63:3000/api/maestro")
            .then((response) => {
                return response.json()
            })
            .then(
                (result) => {
                    setIsLoaded(true)
                    setRecipes({ recipes: result.body })
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
