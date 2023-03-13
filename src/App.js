import { useState, useEffect } from 'react'
import DictionaryContainer from './components/dictionaryContainer/dictionaryContainer'
import ThemeContext from './components/themeContext/themeContext'
import './App.scss'

function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    switch (theme) {
      case 'dark':
        document.body.classList.remove('light')
        document.body.classList.add('dark')
        break
      case 'light':
      default:
        document.body.classList.remove('dark')
        document.body.classList.remove('light')
        break
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`App ${theme}`}>
        <DictionaryContainer />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
