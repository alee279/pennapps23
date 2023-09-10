const mongoose = require('mongoose');
const validator = require('validator');

const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    "username" : {type: String, required : true, unique: true},
    "email" : {type: String, required: true, unique: true},
    "password" : {type: String, required: true},
    "fluentLanguage" : {type: [String], required: true},
    "learningLanguage" : {type: [String], required: true}
});

UserSchema.statics.signup = async function(username, email, password, fluentLanguage, learningLanguage) {
    // validation
    if (!email || !password || !username || !fluentLanguage || !learningLanguage) {

        throw Error('All fields must filled');
    }
    if (!validator.isEmail(email)) {
        throw Error('Email is not valid');
    }
    if (!validator.isStrongPassword(password)) {
        throw Error('Password is not strong enough');
    }

    const existingEmail = await this.findOne({ email });

    if (existingEmail) {
        throw Error('Email already in use');
    }

    const existingUser = await this.findOne({ username });
    
    if (existingUser) {
        throw Error('Username already in use');
    }

    const user = await this.create({ username, email, password, fluentLanguage, learningLanguage });

    return user;
}

UserSchema.statics.login = async function(email, password) {
    // validation
    if (!email || !password) {

        throw Error('All fields must filled');
    }
    if (!validator.isEmail(email)) {
        throw Error('Email is not valid');
    }

    const user = await this.findOne({ email, password });

    if (!user) {
        throw Error('Incorrect Email or Password!');
    }

    return user;
}


module.exports = mongoose.model('User', UserSchema);