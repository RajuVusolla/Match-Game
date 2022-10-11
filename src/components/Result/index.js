import './index.css'

const Result = props => {
  const {counter, reStarter} = props

  const restartGame = () => {
    reStarter()
  }

  return (
    <div className="resultContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy"
      />
      <h1>YOUR SCORE</h1>
      <h1 className="count">{counter}</h1>
      <button type="button" className="reset" onClick={restartGame}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png "
          alt="reset"
        />
        PLAY AGAIN
      </button>
    </div>
  )
}
export default Result
