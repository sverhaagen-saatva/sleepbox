import React from 'react'
import './Picks.css'

import {Link} from 'react-router-dom'

const Picks = () => {
    return (
        <div className="picks col">
            <div className="picks__inner row">
                <div className="col half">
                    <h1 className="margin-bottom-1">We Pick Five. You Pick Your Faves.</h1>
                    <h2 className="pale margin-bottom-3">Treat yourself to a luxury experience at home</h2>
                    <img className="image" src="/images/_imageSleeping@2x.jpg" alt="" />
                </div>

                <div className="col half centered-horizontally">
                    <h3 className="margin-bottom-1">Spend a little bit of time and energy to create your sleep haven</h3>
                    <p className="margin-0">Let us deliver a small bit of comfort, creativity, and connection — from the Saatva  team to you. Get 5+ quarterly/yearly bedding and sleep aid picks from our holistic health professionals and sleep therapy curators, delivered right to your doorstep.</p>
                    <ul className="margin-bottom-3">
                        <li>Top products selected by Saatva sleep experts</li>
                        <li>Always FREE shipping with every delivery</li>
                        <li>At least 1 Saatva bedding item in every quarterly delivery</li>
                        <li>New member gift: a bonus gift valued at $45+</li>
                        <li>A personal note with sleep health tips and exclusive offers</li>
                    </ul>

                    <Link className="button" to="/signup">Become a member</Link>
                </div>
            </div>
        </div>
    )
}

export default Picks
