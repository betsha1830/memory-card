import React from 'react'
import '../Styles/Footer.css'
import LinkedIn from '../Images/linkedin.png'
import Github from '../Images/github.png'
import SleepingStickman from  '../Images/lazy-stickman-sleeping-on-office-desk.png'
import RunningStickman from '../Images/stickman-running-on-treadmill.png'


export default function Footer() {

  const date = new Date(Date.now())

  return (
    <div className='footer'>
      <div className='left-side'>
        <img className='footer-image running' src={SleepingStickman} alt=''></img>
        
        <a href='https://www.linkedin.com/in/betsue-weldemariam-b05989151/' target='_blank' rel='noopener noreferrer'><img className='footer-image linkedin' src={LinkedIn} alt='linkedin'></img></a>
        <a href='https://github.com/betsha1830/' target='_blank' rel='noreferrer noopener'><img className='footer-image github' src={Github} alt='github'></img></a>
        
      </div>
      
      <div className='right-side'>
        <span>Sticky | {date.getFullYear()}</span>
        <img className='footer-image sleeping' src={RunningStickman} alt=''></img>
      </div>
    </div>
  )
}
