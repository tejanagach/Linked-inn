// models/Vendor.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vendorSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  // Add other vendor-specific fields as needed
});

const Vendor = mongoose.model('Vendor', vendorSchema);

// module.exports = mongoose.model('Vendor', vendorSchema);
module.exports = Vendor;