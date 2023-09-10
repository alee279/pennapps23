import { useState } from 'react';
import { ExclamationCircleFilled } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const Login = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const response = await fetch('http://localhost:4000/users/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        });

        const json = await response.json();

        if (!response.ok) {
            setIsLoading(false);
            setError(json.error);
        }

        if (response.ok) {
            // save the user to local storage
            localStorage.setItem('user', JSON.stringify(json)); 
            setIsLoading(false);
        }
        window.location.replace('http://localhost:3000/home');
    }

    return (
        <div className="signup-page">
            <form className='signup-form' onSubmit={handleSubmit} noValidate>
                <h1>Login!</h1>
                <label>Email:</label>
                <input 
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />

                <label>Password:</label>
                <input 
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <div className="buttons">
                    <button disabled={isLoading}>Login</button>
                    <Link to="/signup">Don't have an account?</Link>
                </div>
                {error && <div className="error"><ExclamationCircleFilled className="exclamation-error"/> {error}</div>}
            </form>
        </div>
    )
}

export default Login