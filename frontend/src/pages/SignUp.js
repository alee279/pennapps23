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
        },
        {
            value: 'Amharic',
            label: 'Amharic'
        },
        {
            value: 'Arabic',
            label: 'Arabic'
        },
        {
            value: 'Armenian',
            label: 'Armenian'
        },
        {
            value: 'Assamese',
            label: 'Assamese'
        },
        {
            value: 'Aymara',
            label: 'Aymara'
        },
        {
            value: 'Azerbaijani',
            label: 'Azerbaijani'
        },
        {
            value: 'Bambara',
            label: 'Bambara'
        },
        {
            value: 'Basque',
            label: 'Basque'
        },
        {
            value: 'Belarusian',
            label: 'Belarusian'
        },
        {
            value: 'Bengali',
            label: 'Bengali'
        },
        {
            value: 'Bhojpuri',
            label: 'Bhojpuri'
        },
        {
            value: 'Bosnian',
            label: 'Bosnian'
        },
        {
            value: 'Bulgarian',
            label: 'Bulgarian'
        },
        {
            value: 'Catalan',
            label: 'Catalan'
        },
        {
            value: 'Cebuano',
            label: 'Cebuano'
        },
        {
            value: 'Chinese (Simplified)',
            label: 'Chinese (Simplified)'
        },
        {
            value: 'Chinese (Traditional)',
            label: 'Chinese (Traditional)'
        },
        {
            value: 'Corsican',
            label: 'Corsican'
        },
        {
            value: 'Croatian',
            label: 'Croatian'
        },
        {
            value: 'Czech',
            label: 'Czech'
        },
        {
            value: 'Danish',
            label: 'Danish'
        },
        {
            value: 'Dhivehi',
            label: 'Dhivehi'
        },
        {
            value: 'Dogri',
            label: 'Dogri'
        },
        {
            value: 'Dutch',
            label: 'Dutch'
        },
        {
            value: 'English',
            label: 'English'
        },
        {
            value: 'Esperanto',
            label: 'Esperanto'
        },
        {
            value: 'Estonian',
            label: 'Estonian'
        },
        {
            value: 'Ewe',
            label: 'Ewe'
        },
        {
            value: 'Filipino (Tagalog)',
            label: 'Filipino (Tagalog)'
        },
        {
            value: 'Finnish',
            label: 'Finnish'
        },
        {
            value: 'French',
            label: 'French'
        },
        {
            value: 'Frisian',
            label: 'Frisian'
        },
        {
            value: 'Galician',
            label: 'Galician'
        },
        {
            value: 'Georgian',
            label: 'Georgian'
        },
        {
            value: 'German',
            label: 'German'
        },
        {
            value: 'Greek',
            label: 'Greek'
        },
        {
            value: 'Guarani',
            label: 'Guarani'
        },
        {
            value: 'Gujarati',
            label: 'Gujarati'
        },
        {
            value: 'Haitian Creole',
            label: 'Haitian Creole'
        },
        {
            value: 'Hausa',
            label: 'Hausa'
        },
        {
            value: 'Hawaiian',
            label: 'Hawaiian'
        },
        {
            value: 'Hebrew',
            label: 'Hebrew'
        },
        {
            value: 'Hindi',
            label: 'Hindi'
        },
        {
            value: 'Hmong',
            label: 'Hmong'
        },
        {
            value: 'Hungarian',
            label: 'Hungarian'
        },
        {
            value: 'Icelandic',
            label: 'Icelandic'
        },
        {
            value: 'Igbo',
            label: 'Igbo'
        },
        {
            value: 'Ilocano',
            label: 'Ilocano'
        },
        {
            value: 'Indonesian',
            label: 'Indonesian'
        },
        {
            value: 'Irish',
            label: 'Irish'
        },
        {
            value: 'Italian',
            label: 'Italian'
        },
        {
            value: 'Japanese',
            label: 'Japanese'
        },
        {
            value: 'Javanese',
            label: 'Javanese'
        },
        {
            value: 'Kannada',
            label: 'Kannada'
        },
        {
            value: 'Kazakh',
            label: 'Kazakh'
        },
        {
            value: 'Khmer',
            label: 'Khmer'
        },
        {
            value: 'Kinyarwanda',
            label: 'Kinyarwanda'
        },
        {
            value: 'Konkani',
            label: 'Konkani'
        },
        {
            value: 'Korean',
            label: 'Korean'
        },
        {
            value: 'Krio',
            label: 'Krio'
        },
        {
            value: 'Kurdish',
            label: 'Kurdish'
        },
        {
            value: 'Kurdish (Sorani)',
            label: 'Kurdish (Sorani)'
        },
        {
            value: 'Kyrgyz',
            label: 'Kyrgyz'
        },
        {
            value: 'Lao',
            label: 'Lao'
        },
        {
            value: 'Latin',
            label: 'Latin'
        },
        {
            value: 'Latvian',
            label: 'Latvian'
        },
        {
            value: 'Lingala',
            label: 'Lingala'
        },
        {
            value: 'Lithuanian',
            label: 'Lithuanian'
        },
        {
            value: 'Luganda',
            label: 'Luganda'
        },
        {
            value: 'Luxembourgish',
            label: 'Luxembourgish'
        },
        {
            value: 'Macedonian',
            label: 'Macedonian'
        },
        {
            value: 'Maithili',
            label: 'Maithili'
        },
        {
            value: 'Malagasy',
            label: 'Malagasy'
        },
        {
            value: 'Malay',
            label: 'Malay'
        },
        {
            value: 'Malayalam',
            label: 'Malayalam'
        },
        {
            value: 'Maltese',
            label: 'Maltese'
        },
        {
            value: 'Maori',
            label: 'Maori'
        },
        {
            value: 'Marathi',
            label: 'Marathi'
        },
        {
            value: 'Meiteilon (Manipuri)',
            label: 'Meiteilon (Manipuri)'
        },
        {
            value: 'Mizo',
            label: 'Mizo'
        },
        {
            value: 'Mongolian',
            label: 'Mongolian'
        },
        {
            value: 'Myanmar (Burmese)',
            label: 'Myanmar (Burmese)'
        },
        {
            value: 'Nepali',
            label: 'Nepali'
        },
        {
            value: 'Norwegian',
            label: 'Norwegian'
        },
        {
            value: 'Nyanja (Chichewa)',
            label: 'Nyanja (Chichewa)'
        },
        {
            value: 'Odia (Oriya)',
            label: 'Odia (Oriya)'
        },
        {
            value: 'Oromo',
            label: 'Oromo'
        },
        {
            value: 'Pashto',
            label: 'Pashto'
        },
        {
            value: 'Persian',
            label: 'Persian'
        },
        {
            value: 'Polish',
            label: 'Polish'
        },
        {
            value: 'Portuguese (Portugal, Brazil)',
            label: 'Portuguese (Portugal, Brazil)'
        },
        {
            value: 'Punjabi',
            label: 'Punjabi'
        },
        {
            value: 'Quechua',
            label: 'Quechua'
        },
        {
            value: 'Romanian',
            label: 'Romanian'
        },
        {
            value: 'Russian',
            label: 'Russian'
        },
        {
            value: 'Samoan',
            label: 'Samoan'
        },
        {
            value: 'Sanskrit',
            label: 'Sanskrit'
        },
        {
            value: 'Scots Gaelic',
            label: 'Scots Gaelic'
        },
        {
            value: 'Sepedi',
            label: 'Sepedi'
        },
        {
            value: 'Serbian',
            label: 'Serbian'
        },
        {
            value: 'Sesotho',
            label: 'Sesotho'
        },
        {
            value: 'Shona',
            label: 'Shona'
        },
        {
            value: 'Sindhi',
            label: 'Sindhi'
        },
        {
            value: 'Sinhala (Sinhalese)',
            label: 'Sinhala (Sinhalese)'
        },
        {
            value: 'Slovak',
            label: 'Slovak'
        },
        {
            value: 'Slovenian',
            label: 'Slovenian'
        },
        {
            value: 'Somali',
            label: 'Somali'
        },
        {
            value: 'Spanish',
            label: 'Spanish'
        },
        {
            value: 'Sundanese',
            label: 'Sundanese'
        },
        {
            value: 'Swahili',
            label: 'Swahili'
        },
        {
            value: 'Swedish',
            label: 'Swedish'
        },
        {
            value: 'Tagalog (Filipino)',
            label: 'Tagalog (Filipino)'
        },
        {
            value: 'Tajik',
            label: 'Tajik'
        },
        {
            value: 'Tamil',
            label: 'Tamil'
        },
        {
            value: 'Tatar',
            label: 'Tatar'
        },
        {
            value: 'Telugu',
            label: 'Telugu'
        },
        {
            value: 'Thai',
            label: 'Thai'
        },
        {
            value: 'Tigrinya',
            label: 'Tigrinya'
        },
        {
            value: 'Tsonga',
            label: 'Tsonga'
        },
        {
            value: 'Turkish',
            label: 'Turkish'
        },
        {
            value: 'Turkmen',
            label: 'Turkmen'
        },
        {
            value: 'Twi (Akan)',
            label: 'Twi (Akan)'
        },
        {
            value: 'Ukrainian',
            label: 'Ukrainian'
        },
        {
            value: 'Urdu',
            label: 'Urdu'
        },
        {
            value: 'Uyghur',
            label: 'Uyghur'
        },
        {
            value: 'Uzbek',
            label: 'Uzbek'
        },
        {
            value: 'Vietnamese',
            label: 'Vietnamese'
        },
        {
            value: 'Welsh',
            label: 'Welsh'
        },
        {
            value: 'Xhosa',
            label: 'Xhosa'
        },
        {
            value: 'Yiddish',
            label: 'Yiddish'
        },
        {
            value: 'Yoruba',
            label: 'Yoruba'
        },
        {
            value: 'Zulu',
            label: 'Zulu'
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