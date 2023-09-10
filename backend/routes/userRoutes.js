const express = require('express');
const User = require('../models/userModel');

// Controllers
const  {
    signupUser,
    getUsers,
    loginUser
} = require('../controllers/userController');

const router = express.Router();

router.post('/signup', signupUser);
router.get('/:username', getUsers);
router.post('/login', loginUser);

module.exports = router;