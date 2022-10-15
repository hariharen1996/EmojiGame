// Write your code here.
import {Component} from 'react'
import './index.css'

class WinOrLoseCard extends Component {
  render() {
    const {restartGame, resultOfSmiley, data} = this.props

    const imageChange = resultOfSmiley
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

    const textChange = resultOfSmiley ? 'You Won' : 'You Lose'

    return (
      <div className="result-container">
        <div className="results-card">
          <div className="result-text">
            <h1 className="win-text">{textChange}</h1>
            <p className="res-score">
              {resultOfSmiley ? 'Best Score' : 'Score'}
            </p>
            <p className="res-mark">{data.length}/12</p>
            <div>
              <button type="button" className="btn" onClick={restartGame}>
                Play Again
              </button>
            </div>
          </div>
          <div className="img-container">
            <img src={imageChange} className="res-img" alt="win or lose" />
          </div>
        </div>
      </div>
    )
  }
}

export default WinOrLoseCard
