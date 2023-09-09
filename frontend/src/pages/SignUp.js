import { useState } from 'react';
import { Select } from 'antd';

import options from '../languageOptions';

const SignUp = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [fluentLanguage, setFluentLanguage] = useState([]);
    const [learningLanguage, setLearningLanguage] = useState([]);

    const handleChange = (value) => {
        setFluentLanguage(value);
    };
    
    const handleLearningChange = (value) => {
        setLearningLanguage(value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        console.log({email, password, username, fluentLanguage, learningLanguage});
        const response = await fetch('http://localhost:4000/users/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username, email, password, fluentLanguage, learningLanguage})
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
    }

    
    

    return (
        <div className="signup-page">
            <form className='signup-form' onSubmit={handleSubmit}>
                <h1>Sign Up!</h1>
                <label>Username:</label>
                <input 
                    type="username"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                />

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
                <label>Select languages you are fluent in</label>
                <Select
                    showSearch
                    mode="multiple"
                    placeholder="Please select"
                    onChange={handleChange}
                    style={{ width: '100%' }}
                    options={options}
                />
                <label>Select languages you are learning</label>
                <Select
                    showSearch
                    mode="multiple"
                    placeholder="Please select"
                    onChange={handleLearningChange}
                    style={{ width: '100%' }}
                    options={options}
                />
                <button disabled={isLoading}>Sign up</button>

            </form>
        </div>
    )
}

export default SignUp