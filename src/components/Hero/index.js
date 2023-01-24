import React, {useState} from 'react'
import Navbar from '../navbar'
import Sidebar from '../Sidebar'
import {HeroContainer, HeroContent, HeroItems, HeroH1, Herop, HeroBtn} from './HeroElements'

const Hero = () => {
  const [isOpen, setisOpen] = useState(false)

  const toggle = () => {
    setisOpen(!isOpen)
  }
  return(

  <HeroContainer>
    <Navbar toggle= {toggle}/>
    <Sidebar isOpen= {isOpen} toggle={toggle}/>
    <HeroContent>
      <HeroItems>
        <HeroH1>Greatest Pizza Ever</HeroH1>
        <Herop>Ready in 60 seconds</Herop>
        <HeroBtn>Place order</HeroBtn>
      </HeroItems>
    </HeroContent>
   </HeroContainer>
  )
}

export default Hero
