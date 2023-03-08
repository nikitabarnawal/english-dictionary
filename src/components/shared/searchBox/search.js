import { useState, useEffect } from 'react'
import IconSearch from '../../../images/icon-search.svg'
import './search.scss'

const SearchBox = () => {
  const [search, setSearch] = useState(null)

  return (
    <div className="searchContainer">
      <input
        type="text"
        placeholder="search for any word..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <img src={IconSearch} className="searchIcon" alt="search" />
    </div>
  )
}

export default SearchBox
