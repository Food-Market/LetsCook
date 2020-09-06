import { useState, useEffect } from "react"

function useLunch() {
    const [recipes, setRecipes] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch("http://161.35.124.63:3000/api/maestro/type/lunch")
            .then((response) => response.json())
            .then(
                (result) => {
                    setIsLoaded(true)
                    setRecipes(result.body)
                },
                (error) => {
                    setIsLoaded(true)
                    setError(error)
                }
            )
    }, [])

    return [recipes, isLoaded, error]
}

export default useLunch
