import { useContext } from 'react'
import ThemeContext from '../themeContext/themeContext'
import './dictionaryContainer.scss'

const DefinitionDesc = ({ definitions, synonyms, partOfSpeech, fontClass }) => {
  const { theme } = useContext(ThemeContext)

  return partOfSpeech ? (
    <section className="description">
      <div className={`grammar ${fontClass} ${theme}`}>{partOfSpeech}</div>
      <div className="meaningDetails">
        <div className={`meaningTitle ${fontClass}`}>Meaning</div>
        <ul className={`meanings ${fontClass}`}>
          {definitions?.map(({ definition }, index) => (
            <li key={index} className={theme}>
              {definition}
            </li>
          ))}
        </ul>
      </div>
      {synonyms.length > 0 ? (
        <div className="synonyms">
          <span className="synonymTitle">Synonyms</span>
          <span className="synonymValue">{synonyms[0]}</span>
        </div>
      ) : null}
    </section>
  ) : null
}

export default DefinitionDesc
