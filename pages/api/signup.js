// pages/api/signup.js

const mongoose = require('mongoose');

const User = require('../../models/User');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, password } = req.body;

    try {
      // Check if email is already registered
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'Email already registered.' });
      }

      // Create new user account
      const user = new User({ name, email, password });
      await user.save();

      res.status(200).json({ message: 'User account created successfully.' });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}
