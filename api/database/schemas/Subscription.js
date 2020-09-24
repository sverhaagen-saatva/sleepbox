const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = {
  name: "Subscription",
  model: {
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    id: {type: String},
    productId: {type: String},
    active: {type: Boolean},
    startDate: {type: Date},
    customerId: {type: String},
    daysUntilDue: {type: String},
    currentPeriodEnd: {type: Date},
    price: {type: String},
    latestInvoiceStatus: {type: String}
  }
}
