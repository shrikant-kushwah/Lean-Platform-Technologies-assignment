import './Navbar.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Ellipse from '../../assets/Ellipse.png';
import { RiArrowDropDownLine } from 'react-icons/ri';

const Navbar = () => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [openLogDrop, setOpenLogDrop] = useState(false);
  const [openLearnMenu, setOpenLearnMenu] = useState(false);
  const [openPracticeMenu, setOpenPracticeMenu] = useState(false);

  return (
    <div className="navbar">
      <div className='title'>
        <p className="comp-name">THE <span id="product">PRODUCT</span> PLATFORM</p>
      </div>
      <div className='nav-links'>
        <div className='learn' onClick={() => setOpenLearnMenu(!openLearnMenu)}>
          <p>Learn</p>
          <span className='down-arrow-learn'><RiArrowDropDownLine size={50}/></span>
        </div>
        <div className={`learn-dropdown ${openLearnMenu ? 'active': 'inactive'}`}>
          <ul>
            <li className='dropdown-item'>
              <Link to={'/'}>Interview Questions</Link>
            </li>
            <li className='dropdown-item'>
              <Link to={'/concept-cards'}>Concept Cards</Link>
            </li>
          </ul>
        </div>
        <div style={{cursor:'pointer'}} onClick={() => setOpenPracticeMenu(!openPracticeMenu)}>
          <p>Practice</p>
          <span className='down-arrow-practice'><RiArrowDropDownLine size={50}/></span>
        </div>
        <div className={`prac-dropdown ${openPracticeMenu ? 'active': 'inactive'}`}>
          <ul>
            <li className='dropdown-item'>
              <Link to={'/practice-qs'}>Practice Questions</Link>
            </li>
            <li className='dropdown-item'>
              <Link to={'/quizzes'}>Quizzes</Link>
            </li>
          </ul>
        </div>
        <div className='user-image' onClick={() => setOpenLogDrop(!openLogDrop)}>
          <img src={Ellipse} alt='img'/>
        </div>
        <div className={`login-dropdown ${openLogDrop? 'active':'inactive'}`}>
          <ul>
            <li className='dropdown-item' onClick={() => setIsLoggedIn(!isLoggedIn)}>
              {isLoggedIn ? 'Logout': 'Login'}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar;