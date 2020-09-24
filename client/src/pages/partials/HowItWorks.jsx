import React from 'react'
import './HowItWorks.css'

const HowItWorks = () => {
    return (
        <div className="howItWorks">
            <div className="howItWorks__inner">
                <h1 className="margin-bottom-1">How It Works</h1>
                <h2 className="pale margin-bottom-3">The Membership You Control</h2>

                <div className="row">
                    <div className="col subsection">
                        <img src="/images/svgs/u-iconSignUp.svg" alt="" />
                        <h3 className="margin-bottom-1">Join today.</h3>
                        <p>We find the best sleep products —with an emphasis on sustainablity, relaxation, and self-care.</p>
                    </div>

                    <div className="col subsection">
                        <img src="/images/svgs/u-iconOpenBox.svg" alt="" />
                        <h3 className="margin-bottom-1">Get your box.</h3>
                        <p>Keep your eye out for that bright gold box. Trust us, you’re going to want to cancel all your plans.</p>
                    </div>

                    <div className="col subsection">
                        <img src="/images/svgs/u-iconSkipDelivery.svg" alt="" />
                        <h3 className="margin-bottom-1">Skip whenever.</h3>
                        <p>Behind on your Sleep Retreat list? Skip any scheduled delivery  no questions asked.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks
