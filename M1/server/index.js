// index.js

const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');
const Employee = require('./models/Employee');
const User=require('./models/User')
const Vendor=require('./models/Vendor')
const Product=require('./models/Product')
const app = express(); 
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/myapp')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Route Handler for User Registration
app.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if email already exists
    const existingUser = await Employee.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new Employee({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Failed to register user' });
  }
});

// Route Handler for User Login
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists in the database
    const user = await Employee.findOne({ email});
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Compare the provided password with the hashed password stored in the database
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // If the email and password are correct, return a success message
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ message: 'Failed to login user' });
  }
});

// Route Handler for Vendor Registration
app.post('/vendorSignup', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if email already exists
    const existingVendor = await Vendor.findOne({ email });
    if (existingVendor) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new vendor
    const newVendor = new Vendor({ name, email, password: hashedPassword });
    await newVendor.save();

    res.status(201).json({ message: 'Vendor registered successfully' });
  } catch (error) {
    console.error('Error registering vendor:', error);
    res.status(500).json({ message: 'Failed to register vendor' });
  }
});

// Route Handler for Vendor Login
app.post('/vendorLogin', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the vendor exists in the database
    const vendor = await Vendor.findOne({ email });
    if (!vendor) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Compare the provided password with the hashed password stored in the database
    const passwordMatch = await bcrypt.compare(password, vendor.password);
    if (!passwordMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // If the email and password are correct, return a success message
    res.status(200).json({ message: 'Vendor login successful' });
  } catch (error) {
    console.error('Error logging in vendor:', error);
    res.status(500).json({ message: 'Failed to login vendor' });
  }
});



// Route Handler for User Registration
app.post('/userSignup', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Failed to register user' });
  }
});

// Route Handler for User Login
app.post('/userLogin', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists in the database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Compare the provided password with the hashed password stored in the database
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // If the email and password are correct, return a success message
    res.status(200).json({ message: 'User login successful' });
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ message: 'Failed to login user' });
  }
});


app.post('/products', async (req, res) => {
  try {
    const { name, description, price } = req.body;
    // Validate product data (e.g., check for required fields)
    const product = new Product({ name, description, price });
    await product.save();
    res.status(201).json({ message: 'Product uploaded successfully', product });

    // Optionally, fetch updated product list from the database and send it back to the frontend
    // const updatedProductList = await Product.find();
    // res.status(200).json(updatedProductList);
  } catch (error) {
    console.error('Error uploading product:', error);
    res.status(500).json({ message: 'Failed to upload product' });
  }
});

app.post("/addtocart",async (req, res)=>{
  try{
    const {email,id} = req.body;
    console.log(email,id);
    const product =await  Product.findById(id);
    
    const productadded =await  User.updateOne({email},{$push:{cart:product}});
    if(productadded){
      res.json({message:"Product added"});
    }else{
      res.json({message:"Could not add the product to card"});
    }
    
  }catch (error){
    throw new Error(error);
  }
})

// Route Handler for Fetching Product List
app.get('/products', async (req, res) => {
  try {
    // Fetch product list from the database
    const productList = await Product.find();
    res.status(200).json(productList);
  } catch (error) {
    console.error('Error fetching product list:', error);
    res.status(500).json({ message: 'Failed to fetch product list' });
  }
});


// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});




