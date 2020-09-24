var mongoose = require('mongoose')
var Schema = mongoose.Schema

module.exports = {
  name: "User",
  model: {
    name: { type: String },
    email: { type: String, default: '', unique: true },
    password: { type: String },
    created_at: { type: Date },
    updated_at: { type: Date },
    stripeCustomerId: { type: String },
    subscription: { type: Schema.Types.ObjectId, ref: 'Subscription' }
  }
}
