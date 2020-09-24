import React from 'react'
import './SubOptions.css'

import {Link} from 'react-router-dom'

const SubOptions = () => {
    return (
        <div className="subOptions">
            <h1>Sooner. Later. You decide.</h1>
            <h2 className="pale margin-bottom-3">Sleep Retreat Box Subscription Options</h2>

            <div className="row centered-horizontally subOptions__inner">
                <div className="monthly col subOption centered-vertically">
                    <h3 className="margin-bottom-1 margin-top-1">Monthly</h3>
                    <hr />
                    <h4 className="margin-top-1 margin-bottom-1">$25/Monthly</h4>
                    <ul className="padding-0 t-left">
                        <li>FREE new member gift with your first box!</li>
                        <li>Uniqely curated sleep experience</li>
                        <li>FREE shipping with every delivery</li>
                    </ul>

                    <p className="smol margin-bottom-3">$25 billed every month</p>

                    <Link className="button black bottom" to="/signup">Subscribe Monthly</Link>
                </div>

                <div className="quarterly col subOption centered-vertically">
                    <h3 className="margin-bottom-1 margin-top-1">Quarterly</h3>
                    <hr />
                    <h4 className="margin-top-1 margin-bottom-1">$75/Quarterly</h4>
                    <ul className="padding-0 t-left">
                        <li>FREE new member gift with your first box!</li>
                        <li>Uniqely curated sleep experience</li>
                        <li>One Saatva Luxury Bedding item</li>
                        <li>FREE shipping with every delivery</li>
                    </ul>

                    <p className="smol margin-bottom-3">$75 billed every 3 months</p>

                    <Link className="button black bottom" to="/signup">Subscribe Quarterly</Link>
                </div>

                <div className="yearly col subOption centered-vertically">
                    <h3 className="margin-bottom-1 margin-top-1">Yearly</h3>
                    <hr />
                    <h4 className="margin-top-1 margin-bottom-1">$225/Yearly</h4>
                    <ul className="padding-0 t-left">
                        <li>FREE new member gift with your first box!</li>
                        <li>Uniqely curated sleep experience</li>
                        <li>Four Saatva Luxury Bedding items</li>
                        <li>20% Off on one Saatva Luxury Mattress</li>
                        <li>FREE shipping with every delivery</li>
                    </ul>

                    <p className="smol margin-bottom-3">Prepay $225 for 12 months</p>

                    <Link className="button black bottom" to="/signup">Subscribe Yearly</Link>
                </div>
            </div>

            <p className="notify">
                Cancel anytime. Sleep Retreat Box charges and delivery will cease starting the calendar month after your cancellation.
                <br />
                See <a href="/faq">FAQ</a> for more information.
            </p>
        </div>
    )
}

export default SubOptions
