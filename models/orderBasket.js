const mongoose = require('mongoose')
const { Schema } = mongoose;

const schema = new Schema({
  cart: {
    type: Array,
    required: true
  },
  quantity: {
    type: Array,
    required: true
  },
  total: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  delivery: {
    type: Array,
    required: true
  }
  

},
{
  timestamps: true
})

module.exports = mongoose.model('Order', schema);