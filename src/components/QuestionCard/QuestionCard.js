import './QuestionCard.css'
import {AiFillEye, AiOutlineExclamationCircle} from 'react-icons/ai';
import Startup from '../../assets/startup.png';

const QuestionCard = () => {
  return(
    <div className="ques-card-frame">
      <div className="ques-card">
        <div className="tags">
          <div className='dt'>
          <p>Design</p>
          <p>Technology</p>
          </div>
          <img className='image' src={Startup} alt="img" />
        </div>
        <div className='startup'>
        <p>Startup</p>
        </div>
        <p className="question-headline">
        A travel startup wants Amazon to pre-install their personal travel agent bot on existing Amazon Echos. What is the value of the partnership to the travel startup? 
        </p>
        <p className="question-desc">
        Lorem ipsum dolor sit amet consectetur. Orci elementum aliquet nec viverra tincidunt ? Amet ullamcorper velit tristique scelerisque donec sed viverra arcu. Amet arcu vitae sit scelerisque ultrices magna cursus se? 
        </p>
        <div className="ques-card-footer">
          <div className='eye'><AiFillEye size={15}/> <p>100 Views</p></div>
          <div className='with-sign'><AiOutlineExclamationCircle size={15}/><p>How should you word your answer?</p></div>
        </div>
      </div>
    </div>
  )
}

export default QuestionCard;