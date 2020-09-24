import React from 'react'
import config from '../config'
import './Manage.css'
import moment from 'moment'

import ReactLoading from 'react-loading'

import HowItWorks from './partials/HowItWorks'
import WhatsInTheBox from './partials/WhatsInTheBox'

const Manage = ({customer}) => {
    const sub = config.priceIds[customer?.subscription]
    console.log(config.priceIds, customer.subscription, sub)
    const subData = getSubData(sub)

    return (
        <div className="manage col">
            <div className="home-hero image centered">
                <div className="card manage-card col centered">
                    <h2 className="margin-bottom-1">Better Sleep is on the way</h2>
                    {subData ? (
                        <>
                            <img src="/images/svgs/u-iconOpenBox.svg" />
                            <p>You are subscribed to <b>{subData.title}</b></p>
                            <p>Your box is being hand crafted now we will send you an email for you to choose your items.</p>
                            <p className="smol pale">Your next payment is scheduled for {subData.nextBill}</p>
                        </>
                    ) : (
                        <ReactLoading className="centered-spinner" type="spin" color="black" />
                    )}
                </div>
            </div>
            <HowItWorks />
            <WhatsInTheBox />
        </div>
    )
}

export default Manage


const getSubData = (sub) => {
    const now = new Date()

    switch(sub) {
        case 'monthly':
            return {
                title: 'Sleep Retreat Monthly',
                nextBill: moment(now).add(30, 'days').format('dddd, MMMM Do YYYY')
            }

        case 'quarterly':
            return {
                title: 'Sleep Retreat Quarterly',
                nextBill: moment(now).add(90, 'days').format('dddd, MMMM Do YYYY')
            }

        case 'yearly':
            return {
                title: 'Sleep Retreat Yearly',
                nextBill: moment(now).add(365, 'days').format('dddd, MMMM Do YYYY')
            }
    }
}
