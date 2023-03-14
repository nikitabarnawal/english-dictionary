import { useState, useEffect } from 'react'
import { Debounce } from '../helper/debounce'
import { getWordMeaning } from '../api'

export const useApiCall = () => {
  const [apiResponse, setApiResponse] = useState([])
  const [search, setSearch] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const getDefinition = Debounce(async (signal) => {
    setIsLoading(true)
    try {
      const response = await getWordMeaning({
        search,
        signal,
      })
      if (response) {
        setApiResponse(response.data[0])
        setSearch(null)
        setIsLoading(false)
      }
    } catch (err) {
      if (!signal.aborted) {
        console.log(err)
        setApiResponse(err.response.data)
        setSearch(null)
        setIsLoading(false)
      }
    }
  }, 200)

  useEffect(() => {
    const abortController = new AbortController()
    if (!search) return
    getDefinition(abortController.signal)
    return () => {
      abortController.abort()
    }
  }, [search])

  return {
    apiResponse,
    search,
    setSearch,
    isLoading,
  }
}
