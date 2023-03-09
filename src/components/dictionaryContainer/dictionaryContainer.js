import { useState, useRef } from 'react'
import dictionaryLogo from '../../images/logo.svg'
import IconMoon from '../../images/icon-moon.svg'
import DropDown from '../shared/dropDown/dropDown'
import IconArrowDown from '../../images/icon-arrow-down.svg'
// import IconPlay from '../../images/icon-play.svg'
import SearchBox from '../shared/searchBox/search'
import Toggle from '../shared/toggle/toggle'
import './dictionaryContainer.scss'
import { useApiCall } from '../../hooks/useApiCall'
import DefinitionDesc from './definitionDescription'
import { IconPlay } from '../../icon/iconPlay'

const DictionaryContainer = () => {
  const [fontClass, setFontClass] = useState('sans')
  // const [audioClicked, setAudioClicked] = useState(false)
  const { apiResponse, search, setSearch } = useApiCall()
  const { word, phonetic, meanings, phonetics } = apiResponse
  const contentRef = useRef(null)
  const colorRef = useRef('#A445ED')

  const showDropdown = (e) => {
    contentRef.current.style.display = 'block'
    e.stopPropagation()
  }

  const handleDropdown = (data) => {
    document.getElementsByClassName('dropdown-label')[0].innerHTML = data
    if (data === 'Sans Serif' && fontClass !== 'sans') {
      setFontClass('sans')
    }

    if (data === 'Serif' && fontClass !== 'serif') {
      setFontClass('serif')
    }

    if (data === 'Mono' && fontClass !== 'mono') {
      setFontClass('mono')
    }
  }

  const enableAudio = () => {
    // setAudioClicked((audioClicked) => !audioClicked)
    colorRef.current = '#A445ED' ? '#ccc' : '#A445ED'
    document.getElementById('audio-play').play()
    return
  }

  return (
    console.log(50, colorRef.current) || (
      <div className="dictionaryContainer">
        <div className="firstSection">
          <img src={dictionaryLogo} alt="dictionaryLogo" />
          <div className="rightSection">
            <div className="dropDown">
              <span
                className={`dropdown-label ${fontClass}`}
                onClick={showDropdown}
              >
                Sans Serif
              </span>
              <img src={IconArrowDown} alt="icon-arrow-down" />
              <DropDown ref={contentRef} handleDropdown={handleDropdown} />
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
              <div className="searchAudio" onClick={enableAudio}>
                <audio id="audio-play">
                  <source src={phonetics[0].audio} type="audio/mp3" />
                </audio>
                <IconPlay
                  ref={colorRef}
                  fill={colorRef.current}
                  opacity={0.25}
                />
                {/* <img
                src={<IconPlay />}
                alt="audioPlayIcon"
                className="iconPlay"
              /> */}
              </div>
            </section>
            {meanings.map(({ partOfSpeech, definitions, synonyms }) => (
              <DefinitionDesc
                key={partOfSpeech}
                synonyms={synonyms}
                definitions={definitions}
                partOfSpeech={partOfSpeech}
                fontClass={fontClass}
              />
            ))}
            <footer className={`footer ${fontClass} `}>
              <span className="source">Source</span>
              <span className="sourceUrl">
                https://en.wiktionary.org/wiki/keyboard
              </span>
            </footer>
          </>
        ) : null}
      </div>
    )
  )
}

export default DictionaryContainer
