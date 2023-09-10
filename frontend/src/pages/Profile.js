import { useEffect, useState } from "react"

const ProfilePage = () => {
    const [username, setUsername] = useState('name2');
    const [userInfo, setUserInfo] = useState(null)

    useEffect(() => {
        const getUserInfo = async () => {
            setIsLoading(true);
            const response = await fetch('http://localhost:4000/users/getinfo/' + username);
            const json = await response.json();
            setUserInfo(json);
        }
        getUserInfo();
        if (!response.ok) {
            setIsLoading(false);
            setError(json.error);
        }
        if (response.ok) {
            console.log(json);
            setIsLoading(false);
        }
    })

    return (
        <div>
            profile
        </div>
    )
    
}