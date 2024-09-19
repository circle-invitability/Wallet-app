import  React  from 'react'
import Sidebar from '../components/Sidebar/index.js'
import Navbar from '../components/Navbar/index.js'
import {useState} from 'react'
import HeroSection from '../components/HeroSection/index.js'

function Home() {
const [isOpen, setIsOpen] = useState(false)

const toggle = () => {
  setIsOpen(!isOpen);
};

  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>
    <HeroSection />
    
    </>
  )
}

export default Home