import React from 'react'
import '../Styles/Cards.css'
import PresentingSticky from '../Images/doodle-man-presenting-graph.png'
import KingSticky from '../Images/king-stickman.png'
import MediatingSticky from '../Images/monk-stickman.png'
import LovingFlowersSticky from '../Images/stick-man-with-flower-pot.png'
import SavingSticky from '../Images/stickman-putting-money-in-piggy-bank.png'
import SleepingSticky from '../Images/stickman-sleeping.png'
import ChillinSticky from '../Images/stickman-watching-tv.png'
import ArchingSticky from '../Images/stickman-with-bow-and-arrow.png'
import CodingSticky from '../Images/stickman-working-on-laptop.png'
import SuperheroSticky from '../Images/super-stickman.png'

export default function Cards(props) {

  const card_name_with_titles = { //ID(card name): card title
    "Stonks Sticky": PresentingSticky,
    "King Sticky": KingSticky,
    "Meditating Sticky": MediatingSticky,
    "Flower Loving Sticky": LovingFlowersSticky,
    "Saving Sticky": SavingSticky,
    "Sleeping Sticky": SleepingSticky,
    "Netflix-n-chillin Sticky": ChillinSticky,
    "Arching Sticky": ArchingSticky,
    "Coding Sticky": CodingSticky,
    "Superhero Sticky": SuperheroSticky,
  }

  return (
    <div className='cards'>
      {Object.keys(card_name_with_titles).map(key => {
        return(
          <div className='display-card'>
            <img className='game-card' src={card_name_with_titles[key]} alt={''}></img>
            <span>{key}</span>
            {console.log(typeof(key))}
          </div>
        )
      })}
    </div>
  )
}