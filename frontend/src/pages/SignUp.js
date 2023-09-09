import { useState } from 'react';
import { Select } from 'antd';


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [fluentLanguage, setFluentLanguage] = useState([]);
    const [learningLanguage, setLearningLanguage] = useState([]);

    const handleChange = (value) => {
        setFluentLanguage(value)
    };

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
            <form className='signup-form' action="">
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
                <Select
                    showSearch
                    mode="tags"
                    placeholder="Please select"
                    onChange={handleChange}
                    style={{ width: '100%' }}
                    options={options}
                />
            </form>
        </div>
    )
}

export default SignUp