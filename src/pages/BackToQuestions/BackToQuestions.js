import QuestionCard from "../../components/QuestionCard/QuestionCard";
import {IoMdArrowDropdown} from 'react-icons/io';
import {AiOutlineArrowLeft} from 'react-icons/ai';
import AnswerCard from "../../components/AnswerCard/AnswerCard";
import FeedbackFAB from '../../components/FeedbackFAB/FeedbackFAB';
import '../../pages/BackToQuestions/BackToQuestions.css';

const BackToQuestions = () => {
  return(
    <>
      <div className="backToQuestions">
        <AiOutlineArrowLeft size={40}/>
        <p>Back to Questions</p>
      </div>
      <QuestionCard/>
      <div className="answers">
        <p>Answers (23)</p>
        <div className="sort-by">
          <p className="sortBy-text">Sort By:</p>
          <div className="button1">
          <button className="arrow-button">
            <p>Popular</p>
            <p><IoMdArrowDropdown size={30}/></p>
          </button>
          </div>
        </div>
      </div>
      <AnswerCard/>
      <FeedbackFAB currentPage={'BackToQuestions'}/>
    </>
  )

}

export default BackToQuestions;