const express = require('express');
const router = express.Router();

// Mock user database (replace with actual database in production)
const users = [];

// Register a new user
router.post('/register', (req, res) => {
  const { name, email, phone, city, state, country, userType } = req.body;
  
  // Check if user already exists
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists with this email' });
  }
  
  // Create new user
  const newUser = {
    id: Date.now().toString(),
    name,
    email,
    phone,
    city,
    state,
    country,
    userType,
    createdAt: new Date()
  };
  
  users.push(newUser);
  
  // Return user without sensitive information
  res.status(201).json({
    message: 'User registered successfully',
    user: {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      userType: newUser.userType
    }
  });
});

// Login user
router.post('/login', (req, res) => {
  const { email } = req.body;
  
  // Find user by email
  const user = users.find(user => user.email === email);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  
  // In a real app, you would validate password here
  
  // Return user info
  res.json({
    message: 'Login successful',
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      userType: user.userType,
      city: user.city,
      state: user.state,
      country: user.country
    }
  });
});

// Get user profile
router.get('/profile/:id', (req, res) => {
  const userId = req.params.id;
  
  // Find user by id
  const user = users.find(user => user.id === userId);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  
  // Return user info
  res.json({
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      city: user.city,
      state: user.state,
      country: user.country,
      userType: user.userType
    }
  });
});

module.exports = router;
