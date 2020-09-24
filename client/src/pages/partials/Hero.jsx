import React from 'react'
import './Hero.css'

import {Link} from 'react-router-dom'

const Hero = () => {
    return (
        <div id="hero" className="home-hero">
            <div className="home-hero__inner">
                <h1 className="margin-bottom-1">
                    The Best in Rest—
                    <br/>
                    At Your Service.
                </h1>
                <h2 className="margin-bottom-1">
                    Join today for only $25 a month
                </h2>
                <p className="margin-bottom-2">
                All of the stress and anxiety you’re experiencing these days can do a serious number on your ability to get a good night’s sleep. While travel is out of the question for the indefinite future, you can still enjoy the benefits of a sleep retreat without leaving your house.
                </p>

                <Link className="button" to="/signup">Become a member</Link>
            </div>
        </div>
    )
}

export default Hero
