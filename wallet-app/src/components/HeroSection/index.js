import React from 'react'
import video from '../../Videos'
import { HeroContainer,
         HeroBg,
         VideoBg } from './HeroElements.js'

function HeroSection() {
  return (
    <>
    <HeroContainer>
        <HeroBg> 
            <VideoBg autoplay muted loop src={video} type='video/mp4' />
        </HeroBg>
    </HeroContainer>
    </>
  )
}

export default HeroSection