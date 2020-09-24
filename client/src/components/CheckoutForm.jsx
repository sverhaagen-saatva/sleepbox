import React from 'react'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'

import CardSection from './CardSection'
import retryInvoiceWithNewPaymentMethod from '../functions/retryInvoiceWithNewPaymentMethod'
import createSubscription from '../functions/createSubscription'

import config from '../config'

import {
    useHistory,
  } from "react-router-dom"

export default function CheckoutForm({productSelection, customer, setError, setCustomer}) {
    const stripe = useStripe()
    const elements = useElements()
    const history = useHistory()
    const priceId = config.priceIds[productSelection]
    console.log('priceId', priceId)

    const handleSubmit = async (event) => {
        // We don't want to let default form submission happen here,
        // which would refresh the page.
        event.preventDefault()

        if (!stripe || !elements) {
        // Stripe.js has not yet loaded.
        // Make sure to disable form submission until Stripe.js has loaded.
        return
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement)

        // If a previous payment was attempted, get the latest invoice
        const latestInvoicePaymentIntentStatus = localStorage.getItem(
            'latestInvoicePaymentIntentStatus'
        )

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        })

        if (error) {
            console.log('[createPaymentMethod error]', error)
        } else {
            console.log('[PaymentMethod]', paymentMethod)
            const paymentMethodId = paymentMethod.id
            if (latestInvoicePaymentIntentStatus === 'requires_payment_method') {
                // Update the payment method and retry invoice payment
                const invoiceId = localStorage.getItem('latestInvoiceId')
                retryInvoiceWithNewPaymentMethod(stripe, {
                    customer,
                    customerId: customer.stripeCustomerId,
                    paymentMethodId,
                    invoiceId,
                    priceId,
                    setError, 
                    history, 
                    setCustomer
                })
        } else {
            console.log('creating')
            // Create the subscription
            createSubscription({ 
                customerId: customer.stripeCustomerId, 
                paymentMethodId, 
                priceId,
                setError, 
                history, 
                customer,
                setCustomer
            })
        }
        }
    }

  return (
    <form className="col card cardSection" onSubmit={handleSubmit}>
        <CardSection />
        <button disabled={!stripe}>Confirm order</button>
    </form>
  )
}
