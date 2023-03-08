import axios from 'axios'

export const getWordMeaning = ({ search, signal }) => {
  return axios.get(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Auth-Origin': true,
      },
      signal,
    }
  )
}
