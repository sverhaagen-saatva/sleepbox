// Set your secret key. Remember to switch to your live secret key in production!
// See your keys here: https://dashboard.stripe.com/account/apikeys
const stripe = require('stripe')('sk_test_51HTwDyC5KM6kXLzBuUNFa9qQ71sbCZk1PYPz4tFlyHXaPtEsmHATbv53vAnrSWee3Z8QPXju7Fyr1BiG1BhCFmPH00veknabxw')

module.exports = (app) => app.post('/create-subscription', async (req, res) => {
  // Attach the payment method to the customer
  try {
    await stripe.paymentMethods.attach(req.body.paymentMethodId, {
      customer: req.body.customerId,
    })
  } catch (error) {
    return res.status('402').send({ error: error.message })
  }

  // Change the default invoice settings on the customer to the new payment method
  await stripe.customers.update(
    req.body.customerId,
    {
      invoice_settings: {
        default_payment_method: req.body.paymentMethodId,
      },
    }
  )

  // Create the subscription
  const subscription = await stripe.subscriptions.create({
    customer: req.body.customerId,
    items: [{ price: req.body.priceId }],
    expand: ['latest_invoice.payment_intent'],
  })

  res.send(subscription)
})
