const express = require('express');
const router = express.Router();
const User = require('../models/user'); 

router.post('/user', async (req, res) => {
  try {
    const { name } = req.body;
    const newUser = await User.create({ name });
    res.status(201).json({ message: 'User created', user: newUser });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
