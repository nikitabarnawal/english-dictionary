import { useState, useEffect } from 'react'
import { Debounce } from '../helper/debounce'
import { getWordMeaning } from '../api'

export const useApiCall = () => {
  const [apiResponse, setApiResponse] = useState([])
  const [search, setSearch] = useState(null)

  const getDefinition = Debounce(async (signal) => {
    try {
      const response = await getWordMeaning({
        search,
        signal,
      })
      if (response) {
        setApiResponse(response.data[0])
        setSearch(null)
      }
    } catch (err) {
      if (!signal.aborted) {
        console.log(err)
      }
    }
  }, 500)

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
  }
}
