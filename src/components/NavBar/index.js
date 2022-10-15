import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  render() {
    const {count, lengthOfSmiley, clickSmiley} = this.props
    if (clickSmiley) {
      return null
    }
    return (
      <nav className="navbar">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
            alt="emoji logo"
            className="logo-img"
          />
          <h1 className="text">Emoji Game</h1>
        </div>
        <div className="text-flex">
          <p className="text">Score: {lengthOfSmiley}</p>
          <p className="text">Top Score: {count}</p>
        </div>
      </nav>
    )
  }
}

export default NavBar
