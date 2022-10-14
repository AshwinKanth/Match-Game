import './index.css'

const NavBar = props => {
  const {score, timer} = props

  return (
    <nav className="nav-container ">
      <ul className="list-container">
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
            className="website-logo-dim"
          />
        </li>
        <li>
          <div className="score-container">
            <p className="score-text">
              Score: <span>{score} </span>
            </p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              className="timer-img "
              alt="timer"
            />
            <p className="timer-text">{timer} sec</p>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
