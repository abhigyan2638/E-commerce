const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  price: {
    type: Number,
    required: true
  },
  image: String,
  // Add more fields as needed (e.g., category, brand, inventory)
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
