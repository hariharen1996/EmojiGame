// Write your code here.
import {Component} from 'react'
import './index.css'

class EmojiCard extends Component {
  render() {
    const {item, clickEmojiImage} = this.props
    const {emojiUrl, emojiName, id} = item

    const emojiId = () => {
      clickEmojiImage(id)
    }

    return (
      <li className="card-container">
        <button type="button" className="btn-img">
          <img
            src={emojiUrl}
            onClick={emojiId}
            alt={emojiName}
            className="emoji-img"
          />
        </button>
      </li>
    )
  }
}

export default EmojiCard
