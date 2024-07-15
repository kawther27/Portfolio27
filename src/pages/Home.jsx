import React from 'react'
import Typewriter from 'typewriter-effect';
import '../styles/Home.css'
function Home() {
  return (
    <div className="home-container">
          <h1 className="hero-title">
            <Typewriter
              options={{
                strings: ['I Am Web Designer.'],
                autoStart: true,
                loop: true,
                cursor: '|',
                delay: 75,
              }}
            />
          </h1>
          <div className="scroll-down">
            <a href="#about" className="scroll-link">
              <img src="./src/assets/images/down-arrow.png" alt="Scroll Down" className="scroll-icon" />
            </a>
          </div>
        </div>
   
   
  )
}

export default Home