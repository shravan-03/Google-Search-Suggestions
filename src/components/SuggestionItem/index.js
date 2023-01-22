import './index.css'

const SuggestionItem = props => {
  const {eachSuggestion, arrowFunctionInputChange} = props
  const {suggestion} = eachSuggestion
  const onClickingArrow = () => {
    arrowFunctionInputChange(suggestion)
  }
  return (
    <li>
      <div className="suggestion-arrow-container">
        <p className="suggestion">{suggestion}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="arrow"
          alt="arrow"
          onClick={onClickingArrow}
        />
      </div>
    </li>
  )
}

export default SuggestionItem
