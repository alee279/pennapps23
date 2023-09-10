const express = require('express');
const User = require('../models/userModel');

// Controllers
const  {
    signupUser,
    getUsers,
    getUserInfo
} = require('../controllers/userController');

const router = express.Router();

router.post('/signup', signupUser);
router.get('/:username', getUsers)
router.get('/getinfo/:username', getUserInfo)
router.get('/:username', getUsers);
router.post('/login', loginUser);

module.exports = router;