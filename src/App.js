import './App.scss'
import DictionaryContainer from './components/dictionaryContainer/dictionaryContainer'

function App() {
  const hideDropdown = () => {
    document.getElementsByClassName('dropdown-content')[0].style.display =
      'none'
  }

  return (
    <div className="App" onClick={hideDropdown}>
      <DictionaryContainer />
    </div>
  )
}

export default App
