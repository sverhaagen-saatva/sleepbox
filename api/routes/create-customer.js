// Set your secret key. Remember to switch to your live secret key in production!
// See your keys here: https://dashboard.stripe.com/account/apikeys
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

module.exports = (app) => app.post('/create-customer', async (req, res) => {
  // save the customer.id as stripeCustomerId
  // in your database.
  try{
    const user = await createUser(app, {
        email: req.body.email,
        password: req.body.password,
        name: req.body.name
    })
    
    res.send({ user })
  } catch(e){
      console.log('error', e)
      res.send({error: e.message})
  }
})

createUser = async (app, { email, password, name }) => {
    const User = app.db.schemas.User
    const bcrypt = app.bcrypt
    const jwt = app.jwt

    const existingUser = await User.findOne({ email })
    if (existingUser) throw new Error("User Exists already")

    // Create a new customer object
    const customer = await stripe.customers.create({email})

    const hashedPass = await bcrypt.hash(password, 12)
    const user = new User({
        email,
        password: hashedPass,
        name,
        stripeCustomerId: customer.id
    })
    const result = await user.save()


    const token = jwt.sign({ userId: result.id, email: result.email }, process.env.JWT_SECRET, { expiresIn: '30 days' })
    return {
        token,
        result: {
            email: result.email,
            name: result.name,
            stripeCustomerId: result.stripeCustomerId
        }
    }
}
