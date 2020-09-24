export default function onSubscriptionComplete(result, history, customer, setCustomer) {
    // Payment was successful.
    if (result.subscription.status === 'active') {
      // Change your UI to show a success message to your customer.
      // Call your backend to grant access to your service based on
      // `result.subscription.items.data[0].price.product` the customer subscribed to.
      history.replace('/manage')
      setCustomer({...customer, subscription: result.subscription.items.data[0].price.product})
    }
  }
