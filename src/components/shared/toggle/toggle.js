import { useContext } from 'react'
import ThemeContext from '../../themeContext/themeContext'
import './toggle.scss'

const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  const handleThemeChange = () => {
    const isCurrentLight = theme === 'light'
    setTheme(isCurrentLight ? 'dark' : 'light')
  }

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={theme === 'dark'}
        onChange={handleThemeChange}
      />
      <span className="slider round"></span>
    </label>
  )
}

export default Toggle
