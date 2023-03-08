import dictionaryLogo from '../../images/logo.svg'
import IconMoon from '../../images/icon-moon.svg'
import DropDown from '../shared/dropDown/dropDown'
import IconArrowDown from '../../images/icon-arrow-down.svg'
import SearchBox from '../shared/searchBox/search'
import Toggle from '../shared/toggle/toggle'
import './dictionaryContainer.scss'

const DictionaryContainer = () => {
  return (
    <div className="dictionaryContainer">
      <div className="firstSection">
        <img src={dictionaryLogo} alt="dictionaryLogo" />
        <div className="rightSection">
          <div className="dropDown">
            <span className="dropdown-label">Sans Serif</span>
            <img src={IconArrowDown} alt="icon-arrow-down" />
            <DropDown />
          </div>
          <div className="toggle">
            <Toggle />
            <img src={IconMoon} alt="icon-moon" />
          </div>
        </div>
      </div>
      <div className="searchSection">
        <SearchBox />
      </div>
      <section className="title"></section>
      <section className="pronounciationSection"></section>
      <section className="firstDesc"></section>
      <section className="secondDesc"></section>
      <footer className="footer"></footer>
    </div>
  )
}

export default DictionaryContainer
