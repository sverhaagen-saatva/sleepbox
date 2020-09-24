import API from "./API"
import handlePaymentThatRequiresCustomerAction from "./handlePaymentThatRequiresCustomerAction"
import handleRequiresPaymentMethod from './handleRequiresPaymentMethod'
import onSubscriptionComplete from "./onSubscriptionComplete"

export default function createSubscription({ 
    customerId, 
    paymentMethodId, 
    priceId, 
    setError, 
    history, 
    customer, 
    setCustomer
}) {
    console.log('customerId', customerId)
    return (
        API.sendPost('create-subscription', {
            customerId: customerId,
            paymentMethodId: paymentMethodId,
            priceId,
        })
        // If the card is declined, display an error to the user.
        .then((result) => {
          if (result.error) {
            // The card had an error when trying to attach it to a customer.
            throw result
          }
          return result
        })
        // Normalize the result to contain the object returned by Stripe.
        // Add the additional details we need.
        .then((result) => {
          return {
            paymentMethodId: paymentMethodId,
            priceId,
            subscription: result,
          }
        })
        // Some payment methods require a customer to be on session
        // to complete the payment process. Check the status of the
        // payment intent to handle these actions.
        .then(handlePaymentThatRequiresCustomerAction)
        // If attaching this card to a Customer object succeeds,
        // but attempts to charge the customer fail, you
        // get a requires_payment_method error.
        .then(handleRequiresPaymentMethod)
        // No more actions required. Provision your service for the user.
        .then((res) => onSubscriptionComplete(res, history, customer, setCustomer))
        .catch((error) => {
          // An error has happened. Display the failure to the user here.
          // We utilize the HTML element we created.
          setError(error.error)
        })
    )
  }
