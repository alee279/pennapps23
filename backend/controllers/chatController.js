const Chat = require('../models/chatModel');



const createChat = async (req, res) => {
    const { userOne, userTwo } = req.body;

    if (userOne.localCompare(userTwo) > 0) {
        const temp = userOne;
        userOne = userTwo;
        userTwo = temp;
    }

    try {
        const chat = await Chat.find({users: {"$all": [userOne, userTwo]}});
        if (chat) {
            throw Error('Chat already exists');
        }

        chat = await this.create({ users : [userOne, userTwo] });
        res.status(200).json(chat);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const getChatLog = async (req, res) => {
    const { userOne, userTwo } = req.body;

    try {
        const chat = await Chat.find();
        res.status(200).json(chat.messages);
    } catch (error) {
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
    
}

module.exports = {
    createChat
}