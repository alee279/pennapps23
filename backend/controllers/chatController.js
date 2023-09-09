const Chat = require('../models/chatModel');



const createChat = async (req, res) => {
    const { userOne, userTwo } = req.body;
    let users = [userOne, userTwo];

    if (userOne > userTwo) {
        let temp = users[0];
        users[0] = users[1];
        users[1] = temp;
    }
    

    try {
        let chat = await Chat.findOne({users: {"$all": users}});
        console.log(chat);
        if (chat) {
            throw Error('Chat already exists');
        }

        chat = await Chat.create({ users : [userOne, userTwo] });
        res.status(200).json(chat);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const getChatLog = async (req, res) => {
    const { userOne, userTwo } = req.body;
    let users = [userOne, userTwo];

    if (userOne > userTwo) {
        let temp = users[0];
        users[0] = users[1];
        users[1] = temp;
    }

    try {
        const chat = await Chat.findOne({users: {"$all": users}});
        res.status(200).json(chat);
    } catch (error) {
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
    
}

const addMessage = async (req, res) => {
    const { _id, message, user } = req.body;

    try {
        const chat = await Chat.findOne({_id});
        if (!chat) {
            throw Error('Chat does not exists');
        }
        chat.messages.push({user, message});
        res.status(200).json({user, message});
    } catch (error) {
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
    
}

module.exports = {
    createChat,
    getChatLog,
    addMessage
}