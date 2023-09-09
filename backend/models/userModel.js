const mongoose = require('mongoose');
const validator = require('validator');

const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    "firstName" : {type: String, required : true},
    "lastName" : {type: String, required : true},
    "email" : {type: String, required: true, unique: true},
    "password" : {type: String, required: true},
    "fluentLanguage" : {type: [String], required: true},
    "learningLanguage" : {type: [String], required: true}
});

UserSchema.statics.signup = async function(firstName, lastName, email, password, fluentLanguage, learningLanguage) {
    // validation
    if (!email || !password || !firstName || !lastName || !fluentLanguage || !learningLanguage) {
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

    const user = await this.create({ firstName, lastName, email, password, fluentLanguage, learningLanguage });

    return user;
}

module.exports = mongoose.model('User', UserSchema);