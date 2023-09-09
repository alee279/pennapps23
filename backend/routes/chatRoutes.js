const express = require('express');
const Chat = require('../models/chatModel');

// Controllers
const  {
    createChat
} = require('../controllers/chatController');

const router = express.Router();

router.post('/create', createChat);

module.exports = router;