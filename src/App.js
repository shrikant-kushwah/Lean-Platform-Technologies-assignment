import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BackToQuestions from './pages/BackToQuestions/BackToQuestions';
import UnderConstruction from './pages/UnderConstruction';


const App = ()=> {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<BackToQuestions/>}></Route>
          <Route path='/concept-cards' element={<UnderConstruction/>}></Route>
          <Route path='/practice-qs' element={<UnderConstruction/>}></Route>
          <Route path='/quizzes' element={<UnderConstruction/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
