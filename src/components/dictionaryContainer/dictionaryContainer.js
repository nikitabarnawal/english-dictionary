import dictionaryLogo from '../../images/logo.svg'
import IconMoon from '../../images/icon-moon.svg'
import DropDown from '../shared/dropDown/dropDown'
import IconArrowDown from '../../images/icon-arrow-down.svg'
import IconPlay from '../../images/icon-play.svg'
import SearchBox from '../shared/searchBox/search'
import Toggle from '../shared/toggle/toggle'
import './dictionaryContainer.scss'
import { useApiCall } from '../../hooks/useApiCall'
import DefinitionDesc from './definitionDescription'

const DictionaryContainer = () => {
  const { apiResponse, search, setSearch } = useApiCall()
  const { word, phonetic, meanings } = apiResponse
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
        <SearchBox setSearch={setSearch} search={search} />
      </div>
      {word ? (
        <>
          <section className="title">
            <div className="searchWord">
              <span>{word}</span>
              <span className="phonetic">{phonetic}</span>
            </div>
            <div className="searchAudio">
              <img src={IconPlay} alt="audioPlayIcon" className="iconPlay" />
            </div>
          </section>
          {meanings.map(({ partOfSpeech, definitions, synonyms }) => (
            <DefinitionDesc
              key={partOfSpeech}
              synonyms={synonyms}
              definitions={definitions}
              partOfSpeech={partOfSpeech}
            />
          ))}
          <footer className="footer">
            <span className="source">Source</span>
            <span className="sourceUrl">
              https://en.wiktionary.org/wiki/keyboard
            </span>
          </footer>
        </>
      ) : null}
    </div>
  )
}

export default DictionaryContainer
