const User = require('../models/userModel');

const signupUser = async (req, res) => {
    const {firstName, lastName, email, password} = req.body;
    
    try {
        const user = await User.signup(firstName, lastName, email, password);
        res.status(200).json({firstName, lastName, email, password});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = {
    signupUser
};