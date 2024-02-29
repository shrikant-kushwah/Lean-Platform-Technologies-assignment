import { faPersonDigging } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FeedbackFAB from '../components/FeedbackFAB/FeedbackFAB';
import Navbar from '../components/Navbar/Navbar'

const UnderConstruction = () => {
  return (
    <div style={{textAlign: 'center'}}>
      <FontAwesomeIcon icon={faPersonDigging} size="3x"/>
      <Navbar/>
      <FeedbackFAB currentPage={'conceptCards'}/>
    </div>
  )
}


export default UnderConstruction;