import React, { useEffect, useState } from 'react';

export default function Home(props) {
    const [username, setUsername] = useState('name2');
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getMatchingUsers = async () => {
            setUsers([]);
            setIsLoading(true);
            const response = await fetch('http://localhost:4000/users/' + username);
            const json = await response.json();
            if (response.ok) {
                setUsers([...users, ...json.returnedUsers]);
            }
            console.log(users);
        }
        getMatchingUsers();
        
    }, [])
    
    return (
        <div className="home">
            <h1>Home</h1>
            {users.map((u) => (
                 <h2>{u.username}</h2>
            ))}
        </div>
      );
}