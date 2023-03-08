import './dictionaryContainer.scss'

const DefinitionDesc = ({ definitions, synonyms, partOfSpeech }) => {
  return partOfSpeech ? (
    <section className="description">
      <div className="grammar">{partOfSpeech}</div>
      <div className="meaningDetails">
        <div className="meaningTitle">Meaning</div>
        <ul className="meanings">
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
