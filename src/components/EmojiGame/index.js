/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar/index'
import EmojiCard from '../EmojiCard/index'
import './index.css'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {data: [], clickSmiley: false, count: 0}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  setScore = score => {
    const {count} = this.state
    if (score > count) {
      this.setState({count: score})
    }
    this.setState({clickSmiley: true})
  }

  clickEmojiImage = id => {
    const {emojisList} = this.props
    const {data} = this.state
    const lengthOfEmojisData = data.length
    const lengthOfEmojisList = emojisList.length

    if (data.includes(id)) {
      this.setScore(lengthOfEmojisData)
    } else if (lengthOfEmojisList - 1 === lengthOfEmojisData) {
      this.setScore(lengthOfEmojisList)
    }
    this.setState(prevState => ({
      data: [...prevState.data, id],
    }))
  }

  restartGame = () => {
    this.setState({data: [], clickSmiley: false})
  }

  render() {
    const {emojisList} = this.props
    const {clickSmiley, count, data} = this.state
    const shuffledList = this.shuffledEmojisList()
    const lengthOfSmiley = data.length
    const resultOfSmiley = emojisList.length === data.length
    console.log(emojisList.length)
    console.log(lengthOfSmiley)
    return (
      <div className="bg-container">
        <NavBar
          clickSmiley={clickSmiley}
          count={count}
          lengthOfSmiley={lengthOfSmiley}
        />
        <div className="cards">
          {clickSmiley ? (
            <WinOrLoseCard
              restartGame={this.restartGame}
              resultOfSmiley={resultOfSmiley}
              data={data}
            />
          ) : (
            <ul className="list-container">
              {shuffledList.map(item => (
                <EmojiCard
                  key={item.id}
                  item={item}
                  clickEmojiImage={this.clickEmojiImage}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
