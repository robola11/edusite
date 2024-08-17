import React from 'react';
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png';

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>

            <h1>We Ensure Better Education For A Better World</h1>
            <p>Etiam vitae tortor. Vivamus consectetuer hendrerit lacus. Etiam imperdiet imperdiet orci.
                 Etiam feugiat lorem non metus. 
                Cras dapibus.</p>
            <button className='btn'>Explore More <img src={dark_arrow} alt='' /></button>
        </div>
    </div>
  )
}

export default Hero;