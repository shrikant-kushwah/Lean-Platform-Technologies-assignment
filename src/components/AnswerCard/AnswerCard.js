import './AnswerCard.css';
import { BiLike } from 'react-icons/bi';
import { PiChatCenteredDotsLight } from 'react-icons/pi';
import Ellipse from '../../assets/Ellipse.png';
import Vector from '../../assets/Vector.png';

const AnswerCard = () => {
  return (
    <div className='ans-card-frame'>
      <div className='ans-card'>
        <div className='ans-header'>
          <div className='user-image'>
            <img src={Ellipse} alt='img' />
            <div className='answer-user-name'>
              <p className='name'>Neha Bhat <span className='you'>(You)</span></p>
              <p className='date'>Jun 27, 2023</p>
            </div>
          </div>
          <div className='edit-button'>
            <img className='vector-image' src={Vector} alt='img' />
            <p>Edit</p>
          </div>
        </div>
        <p className='answer-description'>
          Lorem ipsum dolor sit amet consectetur. Elit et ut at vestibulum enim ornare feugi vitae. Eget proin aliquam blandit eget vitae erat fermentum lacus. Dignissim done mi vel fermentum. Id ultrices risus sit pel sit elit morbi. Mi sed mauris aenean odio egestas ullamcorper. Dignissim in vel fusce id. Sit blandit diam ridiculus ipsum <span style={{color:"gray"}}>interdum ut velit quam. Bibendum amet mi.... </span>Show more
        </p>
        <div className='ans-footer'>
          <div className='thumb-like-message'>
            <BiLike size={20} />
            <p className='likeButton'>Like</p>
            <PiChatCenteredDotsLight size={25} />
          </div>
          <input className='input-box' type="text" placeholder='Add a comment' />
          <button className='post-button'>Post</button>
        </div>
      </div>
    </div>
  )
}

export default AnswerCard;