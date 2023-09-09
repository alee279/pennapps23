import { useEffect, useState } from "react"
import axios from "axios";
import {Client} from "@twilio/conversations";


const ChatPage = (props) => {

    // const [messages, setMessages] = useState([]);
    // const [loading, setLoading] = useState(false);
    const [token, setToken] = useState("");
    // const [channelClient, setChannelClient] = useState("null");
    let email = props.email;
    let room = props.channel;

    useEffect(() => {
        const getToken = async () => {

            try {
                const response = await axios.get(`http://localhost:5000/token/${email}`);
                setToken(response.data.token);
            } catch {
                throw new Error("unable to get token, please reload this page");
            }
        };
        
        getToken();
        console.log(token);
    }, []);

    const getClient = async () => {
        console.log(token);
        const client = await new Client(token);
        const conversation = await client.createConversation();
        await conversation.add('cedric');
        conversation.sendMessage('Hello World!');
    }
    
    getClient();

    return (
        <div className="chat-page">
            <h1>Chat</h1>
        </div>
    )
}

export default ChatPage