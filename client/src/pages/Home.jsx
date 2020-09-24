import React from 'react'
import Footer from '../components/Footer'
import Hero from './partials/Hero'
import HowItWorks from './partials/HowItWorks'
import Picks from './partials/Picks'
import SubOptions from './partials/SubOptions'
import Unboxing from './partials/Unboxing'
import WhatsInTheBox from './partials/WhatsInTheBox'

const Home = () => {
    return (
        <div className="home">
            <Hero />
            <HowItWorks />
            <Picks />
            <WhatsInTheBox />
            <SubOptions />
            <Unboxing />

            <Footer />    
        </div>
    )
}

export default Home
