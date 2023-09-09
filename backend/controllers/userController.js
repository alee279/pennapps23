const User = require('../models/userModel');

const signupUser = async (req, res) => {
    const {username, email, password, fluentLanguage, learningLanguage} = req.body;
    
    try {
        const user = await User.signup(username, email, password, fluentLanguage, learningLanguage);
        res.status(200).json({username, email, password, fluentLanguage, learningLanguage});
    } catch (error) {
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
}



module.exports = {
    signupUser
};