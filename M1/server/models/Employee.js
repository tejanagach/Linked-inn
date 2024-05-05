// model/Employee.js

const mongoose = require('mongoose');

// Define the schema for the Employee collection
const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    // lastName: {
    //     type: String,
    //     required: true
    // },
    email: {
        type: String,
        required: true,
        unique: true
    },
    department: {
        type: String,
        required: false
    },
    password:{
        type:String,
        required:true
    }
});



// Create the Employee model using the schema
const Employee = mongoose.model('Employee', employeeSchema);

// Export the model
module.exports = Employee;
