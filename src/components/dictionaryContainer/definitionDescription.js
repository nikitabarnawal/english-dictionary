import './dictionaryContainer.scss'

const DefinitionDesc = ({ definitions, synonyms, partOfSpeech, fontClass }) => {
  return partOfSpeech ? (
    <section className="description">
      <div className={`grammar ${fontClass}`}>{partOfSpeech}</div>
      <div className="meaningDetails">
        <div className={`meaningTitle ${fontClass}`}>Meaning</div>
        <ul className={`meanings ${fontClass}`}>
          {definitions?.map(({ definition }, index) => (
            <li key={index}>{definition}</li>
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
