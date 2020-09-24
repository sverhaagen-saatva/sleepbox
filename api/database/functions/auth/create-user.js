const mongoose = require('mongoose')
module.exports = (self) => async function(data){

  let _id = mongoose.Types.ObjectId()

  let newUser = new self.schemas.User({_id, ...data})
  return newUser.save()
}
