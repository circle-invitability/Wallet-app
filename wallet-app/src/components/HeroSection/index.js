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
            <Button to="signup">
              Get Started {hover? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
    </>
  )
}

export default HeroSection