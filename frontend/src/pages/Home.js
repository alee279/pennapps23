import React, { useEffect, useState } from 'react';
import { Button, Card, Row, Col } from 'antd';

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
        setUsers([...json.returnedUsers]);
      }
    }
    getMatchingUsers();
  }, [username]);

  const customStyles = {
    cardContent: {
      display: 'flex', // Make all card content items appear in a row
      alignItems: 'center', // Align items vertically
    },
    listItem: {
      listStyleType: 'none', // Remove bullet points
      margin: '8px 0', // Add some margin for spacing
    },
    button: {
      color: 'black', // Set text color to black
      boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', // Add shadow effect
      backgroundColor: 'transparent', // Remove background color
      marginRight: '8px', // Add some spacing between buttons
    },
    avatar: {
      backgroundColor: 'lightgray', // Default avatar background color
      color: 'white', // Default avatar text color
      fontSize: '18px',
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: '8px', // Add spacing between avatar and content
    },
    username: {
      fontSize: '18px', // Adjust font size as needed
      fontWeight: 'bold',
    },
  };

  const getRandomColor = () => {
    const colors = ["#AA2222", "#FF8822", "#CCCC00", "#448844", "#4444CC", "#662288", "#8833AA", "#44AAAA", "#AA44AA", "#FF77BB"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  // Group users into sets of 3 for each row
  const usersGrouped = [];
  for (let i = 0; i < users.length; i += 3) {
    usersGrouped.push(users.slice(i, i + 3));
  }

  return (
    <div className="home">
      <h1>YABBLE</h1>
      <div className="user-cards">
        {usersGrouped.map((userGroup, index) => (
          <Row key={index} gutter={16} style={{ marginBottom: '20px' }}>
            {userGroup.map((u) => (
              <Col span={8} key={u.username}>
                <Card className="user-card">
                  <div style={customStyles.cardContent}>
                    <div
                      style={{
                        ...customStyles.avatar,
                        backgroundColor: getRandomColor(), // Randomized avatar background color
                      }}
                    >
                      {u.username.charAt(0)}
                    </div>
                    <div style={customStyles.username}>{u.username}</div>
                  </div>
                  <p>
                    <strong>Fluent Languages:</strong>
                    <ul>
                      {u.fluentLanguage.map((language) => (
                        <Button
                          className="language-button"
                          style={{
                            ...customStyles.button,
                          }}
                          disabled
                          key={language}
                        >
                          {language}
                        </Button>
                      ))}
                    </ul>
                  </p>
                  <p>
                    <strong>Learning Languages:</strong>
                    <ul>
                      {u.learningLanguage.map((language) => (
                        <Button
                          className="language-button"
                          style={{
                            ...customStyles.button,
                          }}
                          key={language}
                        >
                          {language}
                        </Button>
                      ))}
                    </ul>
                  </p>
                </Card>
              </Col>
            ))}
          </Row>
        ))}
      </div>
    </div>
  );
}
