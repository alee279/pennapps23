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

const getUserInfo = async (req, res) => {
    var username = req.params.username;

    try {
        const user = await User.find({"username": username});
        if (user.length == 0) {
            throw Error("User does not exist");
        }
        console.log(user);
        const userFluentLanguage = user[0].fluentLanguage;
        const userLearningLanguage = user[0].learningLanguage;
        console.log(userFluentLanguage);
        console.log(userLearningLanguage);
        res.status(200).json(user);
    } catch (error) {
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
}

const getUsers = async (req, res) => {
    var username = req.params.username;

    try {
        const user = await User.find({"username": username});
        if (user.length == 0) {
            throw Error("User does not exist");
        }
        console.log(user);
        const userFluentLanguage = user[0].fluentLanguage;
        const userLearningLanguage = user[0].learningLanguage;

        console.log(userFluentLanguage);
        console.log(userLearningLanguage);
        var userArray = [] 

        const usersCursor = User.find({fluentLanguage: {$in : userLearningLanguage}, learningLanguage: {$in : userFluentLanguage}}).cursor();
        
        for (let doc = await usersCursor.next(); doc != null; doc = await usersCursor.next()) {
            console.log(doc); // Prints documents one at a time
            userArray.push(doc)
        }
        
        // console.log(users)
        res.status(200).json({'returnedUsers':userArray});
        // res.status(200).json({username: user[0].username});

    } catch (error) {
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
}

module.exports = {
    signupUser,
    getUsers,
    getUserInfo
};