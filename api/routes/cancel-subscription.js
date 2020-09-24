// Set your secret key. Remember to switch to your live secret key in production!
// See your keys here: https://dashboard.stripe.com/account/apikeys
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

module.exports = (app) => app.post('/cancel-subscription', async (req, res) => {
  // Delete the subscription
  const deletedSubscription = await stripe.subscriptions.del(
    req.body.subscriptionId
  )
  res.send(deletedSubscription)
})
