import { useEffect, useState } from "react";
import { Button } from "antd";

const ProfilePage = () => {
  const username = localStorage.getItem("user") !== null
    ? JSON.parse(localStorage.getItem("user")).username
    : null;
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const getUserInfo = async () => {
      const response = await fetch("http://localhost:4000/users/getinfo/" + username);
      const json = await response.json();
      setUserInfo(json); // Set userInfo when data is available
    };
    getUserInfo();
  }, [username]); // Update when username changes

  const customStyles = {
    button: {
      color: "black",
      boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
      backgroundColor: "transparent",
      marginRight: "8px",
    },
  };

  // Conditional rendering based on userInfo
  return (<div>
        <h1>{username}'s Languages:</h1>
            <div style={{ display: "flex" }}>
                {userInfo && ( // Check if userInfo is available
                    <>
                    <div style={{ flex: 1 }}>
                        <h3>Learning Languages:</h3>
                        <ul>
                        {userInfo[0].learningLanguage.map((language) => (
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
                    </div>
                    <div style={{ flex: 1 }}>
                        <h3>Fluent Languages:</h3>
                        <ul>
                        {userInfo[0].fluentLanguage.map((language) => (
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
                    </div>
                    </>
                )}
                </div>
            </div>
                
    );  
};

export default ProfilePage;
