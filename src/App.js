import { useState } from 'react';
import './App.css';
import Cards from './Components/Cards';

function App() {

  const [userChoice, setUserChoice] = useState([])
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(currentScore)
  const instruciton = ""

  return (
    <div className="App">
      <div className='container'>
        <h1>Memory Game</h1>
        <h3>Rules are simple. Try to remember the image you've selected and choose all unselected images on the screen to win the game.</h3>
        <Cards />
      </div>
    </div>
  );
}

export default App;