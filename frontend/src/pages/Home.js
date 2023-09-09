import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography, Chip, Paper } from '@mui/material';
import { Language as LanguageIcon } from '@mui/icons-material';

export default function Home(props) {
    const [username, setUser] = 'test';
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/users/${username}`)
                .then(res => res.json())
                .then(resJson => setUsers(resJson));
    })
    
    return (
        <div>
          <Typography variant="h4" gutterBottom>
            Home
          </Typography>
          <List>
            {users.map((profile) => (
              <ListItem key={profile._id}>
                <ListItemAvatar>
                  <Avatar>{profile.username.charAt(0)}</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={profile.username}
                  secondary={
                    <>
                      <Typography variant="body2">Fluent Languages:</Typography>
                      {profile.fluentLanguage.map((language) => (
                        <Chip
                          key={language}
                          icon={<LanguageIcon />}
                          label={language}
                          variant="outlined"
                          style={{ marginRight: '4px', marginBottom: '4px' }}
                        />
                      ))}
                      <Typography variant="body2">Learning Languages:</Typography>
                      {profile.learningLanguage.map((language) => (
                        <Chip
                          key={language}
                          icon={<LanguageIcon />}
                          label={language}
                          variant="outlined"
                          style={{ marginRight: '4px', marginBottom: '4px' }}
                        />
                      ))}
                    </>
                  }
                />
              </ListItem>
            ))}
          </List>
        </div>
      );
}