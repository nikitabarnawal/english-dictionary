import { useRef, useEffect, useContext } from 'react'
import IconSearch from '../../../images/icon-search.svg'
import ThemeContext from '../../themeContext/themeContext'
import './search.scss'

const SearchBox = ({ search, setSearch }) => {
  const inputRef = useRef(null)
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <div className="searchContainer">
      <input
        className={`searchInput ${theme}`}
        ref={inputRef}
        value={search || ''}
        type="text"
        placeholder="search for any word..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <img src={IconSearch} className="searchIcon" alt="search" />
    </div>
  )
}

export default SearchBox
