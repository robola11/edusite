import React from 'react';
import './About.css';

import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';


const About = ({setPlayState}) => {
  return (
    <div className='about'>
         <div className='about-left'>
            <img src={about_img} alt='' className='about-img'/>
            <img src={play_icon} alt='' className='play-icon' onClick={()=>{
              setPlayState(true)
            }}/>
         </div>
        <div className='about-right'>
            <h3>About University</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Vivamus euismod mauris. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc,
                 vitae euismod ligula urna in dolor. Nam commodo suscipit quam. Donec sodales sagittis magna. Nunc nulla.</p>
       
                 <p>Vivamus euismod mauris. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc,
                 vitae euismod ligula urna in dolor. Nam commodo suscipit quam. Donec sodales sagittis magna. Nunc nulla.</p>
                 <p>Vivamus euismod mauris. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc,
                 vitae euismod ligula urna in dolor. Nam commodo suscipit quam. Donec sodales sagittis magna. Nunc nulla.</p>
        </div>
       
    </div>
  )
}

export default About;