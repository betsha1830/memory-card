import { useState } from 'react';
import './App.css';
import Cards from './Components/Cards';

function App() {

  const [userChoice, setUserChoice] = useState([])
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(currentScore)
  const [randomItem, setRandomItem] = useState([])
  const instruciton = "Sticky has done lots of things. Will you be able to select all the things he has done without selecting them again?"

  return (
    <div className="App">
      <div className='container'>
        <h1>Memory Game</h1>
        <div className='score-instruction'>
          <div className='score'>
            <h1>Current Score: {currentScore} <br></br> Best Score: {bestScore}</h1>
          </div>
          <div className='instruction'>
            <span>{instruciton}</span>
          </div>
        </div>
        <Cards passRandomItem={randomItem} passSetRandomItem={setRandomItem} passUserChoice={userChoice} passSetUserChoice={setUserChoice} 
        passBestScore={bestScore} passSetBestScore={setBestScore} passCurrentScore={currentScore} passSetCurrentScore={setCurrentScore}/>
      </div>
    </div>
  );
}

export default App;