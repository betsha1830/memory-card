import { useState } from 'react';
import './App.css';
import Cards from './Components/Cards';
import Footer from './Components/Footer';
import WorkingStickman from './Images/contractor-stickman.png'
import FallingStickman from './Images/stickman-falling.png'
import PaintingStickman from './Images/stickman-painting.png'

function App() {

  const [userChoice, setUserChoice] = useState([])
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(currentScore)
  const [randomItem, setRandomItem] = useState([])

  return (
    <div className="App">
      <div className='container'>
        <h1>Sticky</h1>
        <div className='score-instruction'>
          <div className='scores'>
            <h2>Current Score: {currentScore} <br></br> Best Score: {bestScore}</h2>
          </div>
          <div className='instruction'>
            Sticky has done lots of things. Will you be able to select all the things he has done without selecting them again?
          </div>
        </div>
        <Cards passRandomItem={randomItem} passSetRandomItem={setRandomItem} passUserChoice={userChoice} passSetUserChoice={setUserChoice} 
        passBestScore={bestScore} passSetBestScore={setBestScore} passCurrentScore={currentScore} passSetCurrentScore={setCurrentScore}/>
        <Footer />
      </div>
      <img className='filler-image working' src={WorkingStickman} alt=''></img>
      <img className='filler-image falling' src={FallingStickman} alt=''></img>
      <img className='filler-image painting' src={PaintingStickman} alt=''></img>
    </div>
  );
}

export default App;