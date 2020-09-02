import React, { useState, useEffect } from "react"

const useRecipes = () => {
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [recipes, setRecipes] = useState({ body: [] })

    useEffect(() => {
        fetch("http://161.35.124.63:3000/api/maestro")
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true)
                    setRecipes({ body: result.body })
                    console.log(recipes)
                },
                (error) => {
                    setIsLoaded(true)
                    setError(error)
                }
            )
    }, [])
    return { recipes, error, isLoaded }
}

export default useRecipes
