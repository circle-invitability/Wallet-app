import { useState } from 'react'
import React from 'react'
import video from '../../Videos/video.mp4'
import { HeroContainer,
         HeroBg,
         VideoBg,
         HeroContent,
         HeroH1,
         HeroP,
        HeroBtnWrapper,
        Button,
      ArrowForward,
    ArrowRight } from './HeroElements.js'

function HeroSection() {
 
  const [hover, setHover] =useState(false);

  const onHover = () => {
    setHover(!hover);
  }
  
  return (
    <>
    <HeroContainer>
        <HeroBg> 
            <VideoBg autoPlay loop muted src={video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
          <HeroH1>Vitual Banking Made Easy</HeroH1>
          <HeroP>
            Sign up for a new account and receive $250 in credit towards your next payment.
          </HeroP>
          <HeroBtnWrapper>
            <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
              Get Started {hover? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
    </>
  )
}

export default HeroSection