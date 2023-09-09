const express = require('express');
const User = require('../models/userModel');

// Controllers
const  {
    signupUser
} = require('../controllers/userController');

const router = express.Router();

router.post('/signup', signupUser);
router.get('/', getUsers)

module.exports = router;