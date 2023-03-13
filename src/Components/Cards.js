import React, { useState, useEffect } from 'react'
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

  // Will change the image positions randomly
  function randomizer () {
    let card_elements = Object.keys(card_name_with_titles).length
    let rand_numbers = [], counter = 0
    let tempArr = []
    
    while (counter < 10) {
      let random_number = Math.floor(Math.random() * card_elements)
      if(!rand_numbers.includes(random_number)){
        rand_numbers.push(random_number)
        counter++
      }
    }

    Object.keys(card_name_with_titles).forEach((key, index) => {
      tempArr[rand_numbers[index]] = key
    })

    console.log(tempArr)

  }

  // Checks if the user hasn't selected the same image twice
  function checkSelection () {

  }

  return (
    <div className='cards'>
      <button onClick={randomizer}>kek</button>
      {}
    </div>
  )
}