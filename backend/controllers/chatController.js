const Chat = require('../models/chatModel');



const createChat = async (req, res) => {
    const { userOne, userTwo } = req.body;
    let users = [userOne, userTwo];

    console.log(userOne);
    console.log(userTwo);

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