const User = require('../models/user');

exports.createUser = (req, res) => {
    // valudate user input
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }
    
}