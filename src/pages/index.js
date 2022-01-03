import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Plateform from '../components/Plateformes';
import { SliderData } from '../components/Plateformes/Images';
import Sidebar from '../components/Sidebar';
import Publications from '../components/Publications';
import Themes from '../components/Themes';
import Footer from '../components/Footer'


function Home() {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle} />
          <Themes /> 
          <Plateform slides={SliderData} /> 
          <Publications/>
          <Footer/>
        </>
    )
}

export default Home
