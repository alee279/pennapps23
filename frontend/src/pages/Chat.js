import { useEffect, useState } from "react"

const ChatPage = () => {

    const chattingUser = window.location.search.substring(1).split('=')[1];
    const user = localStorage.getItem('user') !== null ? JSON.parse(localStorage.getItem('user')).username : null;
    const [messages, setMessages] = useState([]);
    const [chatId, setChatId] = useState(null);
    const [message, setMessage] = useState('');
    const [shouldUpdate, setShouldUpdate] = useState(false);
    
    useEffect(() => {
        const getChatLog = async () => {
            const response = await fetch('http://localhost:4000/chat/getChatLog', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ userOne: user, userTwo: chattingUser })
                });
            const json = await response.json();
            if (response.ok) {
                setChatId(json.chatId);
                setMessages([...messages, ...json.messages]);
            } else {
                const responseTwo = await fetch('http://localhost:4000/chat/create', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({ userOne: user, userTwo: chattingUser })
                });
                const jsonTwo= responseTwo.json();
                if (responseTwo.ok) {
                    setChatId(jsonTwo.chatId);
                    setMessages([]);
                }
            }
        }
        getChatLog();
    }, [])    

    useEffect(() => {
        const getUpdatedLogs = async () => {
            if (setShouldUpdate) {
                const objDiv = document.getElementById("chatbox");
                objDiv.scrollTop = objDiv.scrollHeight;
                setShouldUpdate(false);
                console.log(message);
                if (!message.replace(/\s/g, '').length) {
                    setMessage('');
                    return;
                }
                setMessages([...messages, {user: user, message: message}]);
                setMessage('');
            }
        }
        getUpdatedLogs();
    }, [shouldUpdate]);

    const handleSubmit = async (e) => {
        console.log(shouldUpdate)
        e.preventDefault();
        if (!message.replace(/\s/g, '').length) {
            setMessage('');
            return;
        }
        const response = await fetch('http://localhost:4000/chat/add', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ _id: chatId, user, message })
            });
        const json = response.json();
        if (response.ok) {
            setShouldUpdate(true);
        }
    }

    return (
        <>
            <h1 id="chat-header">Chatting with {chattingUser}</h1>
            <div className="chat-page">
                <div className="chatbox" id='chatbox'>
                    {messages.map((m) => (<div className={m.user === user ? 'user message' : 'chatter message'}><p>{m.message}</p></div>))}
                </div>
                <div className="send-message">
                    <form onSubmit={handleSubmit}>
                        <input 
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                        />
                        <button>Send</button>
                    </form>
                </div>
            </div>
        </>
           
    )
}

export default ChatPage