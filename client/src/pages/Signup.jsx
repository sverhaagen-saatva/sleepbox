import React, {useState} from 'react'
import CheckoutForm from '../components/CheckoutForm'
import CreateCustomerForm from '../components/CreateCustomerForm'
import HowItWorks from './partials/HowItWorks'
import WhatsInTheBox from './partials/WhatsInTheBox'

import './Signup.css'

const Signup = ({customer, setError, setCustomer}) => {

    const [billingPeriod, setBillingPeriod] = useState('monthly')

    return (
        <div className="signup col">
            <div className="home-hero image">
                {customer ? (
                    <div className="col centered full-width">
                        <div className="row margin-bottom-1">
                            <div className={`monthly col subOption centered-vertically ${billingPeriod ==='monthly' && 'active'}`}>
                                <h3 className="margin-bottom-1 margin-top-1">Monthly</h3>
                                <hr />
                                <h4 className="margin-top-1 margin-bottom-1">$25/Monthly</h4>
                                <ul className="padding-0 t-left">
                                    <li>FREE new member gift with your first box!</li>
                                    <li>Uniqely curated sleep experience</li>
                                    <li>FREE shipping with every delivery</li>
                                </ul>

                                <p className="smol margin-bottom-3">$25 billed every month</p>

                                <button className="black bottom" onClick={() => setBillingPeriod('monthly')}>Select Monthly</button>
                            </div>

                            <div className={`quarterly col subOption centered-vertically ${billingPeriod ==='quarterly' && 'active'}`}>
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
                                
                                <button className="black bottom" onClick={() => setBillingPeriod('quarterly')}>Select Quarterly</button>
                            </div>

                            <div className={`yearly col subOption centered-vertically ${billingPeriod ==='yearly' && 'active'}`}>
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

                                <button className="black bottom" onClick={() => setBillingPeriod('yearly')}>Select Yearly</button>
                            </div>
                        </div>
                    
                        <CheckoutForm productSelection={billingPeriod} customer={customer} setCustomer={setCustomer} setError={setError} />
                    </div>
                ) : (
                    <div className="signup-container col centered full-width">
                        <div className="signup-container__inner centered">
                            <CreateCustomerForm setCustomer={setCustomer} setError={setError} />
                        </div>
                    </div>
                )}
            </div>
                <HowItWorks />
                <WhatsInTheBox />
        </div>
    )
}

export default Signup
