// // Product.js
// const mongoose = require('mongoose');

// const productSchema = new mongoose.Schema({
//   name: String,
//   price: Number,
//   // Add other fields as needed
// });

// const Product = mongoose.model('Product', productSchema);

//module.exports = Product;


const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  vendor: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor' }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;