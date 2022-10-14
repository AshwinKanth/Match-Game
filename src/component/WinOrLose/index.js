import './index.css'

const WinOrLose = props => {
  const {score, replayGame} = props

  const resetGame = () => {
    replayGame()
  }

  return (
    <div className="trophy-container">
      <div className="inner-trophy-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          className="trophy-image"
        />
        <div>
          <p className="score-text">YOUR SCORE </p>
          <p className="score">{score}</p>
        </div>
        <button type="button" className="reset-btn" onClick={resetGame}>
          <div className="reset-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
              alt="reset"
              className="reset-img"
            />
            <p className="play-again">PLAY AGAIN</p>
          </div>
        </button>
      </div>
    </div>
  )
}

export default WinOrLose
