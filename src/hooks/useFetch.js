import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = url => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchResource = async () => {
            try {
                let response = await axios.get(url)
                setData(response.data.results)
            } catch(error){
                setError(error)
            }
        }
        fetchResource()
    }, [url])

    return { data, error }
}

export default useFetch