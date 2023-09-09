import { useState } from 'react';
import { Select } from 'antd';


const SignUp = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [fluentLanguage, setFluentLanguage] = useState([]);
    const [learningLanguage, setLearningLanguage] = useState([]);

    const handleChange = (value) => {
        setFluentLanguage(value)
    };

    const handleSubmit = async () => {
        setIsLoading(true);
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

    
    const options = [
        {
            value: 'Afrikaans',
            label: 'Afrikaans'
        },
        {
            value: 'Albanian',
            label: 'Albanian'
        }
    ];

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
                    mode="tags"
                    placeholder="Please select"
                    onChange={handleChange}
                    style={{ width: '100%' }}
                    options={options}
                />
                <button disabled={isLoading}>Sign up</button>

            </form>
        </div>
    )
}

export default SignUp