const express = require('express');
const Chat = require('../models/chatModel');

// Controllers
const  {
    createChat,
    getChatLog,
    addMessage
} = require('../controllers/chatController');

const router = express.Router();

router.post('/create', createChat);

router.post('/getChatLog', getChatLog);

router.post('/add', addMessage);


module.exports = router;