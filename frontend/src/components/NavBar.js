import React from 'react';
import { Layout, Button } from 'antd';

const { Header } = Layout;

export default function AppBar() {
  const user = localStorage.getItem('user') !== null ? JSON.parse(localStorage.getItem('user')).username : null;
  const customStyles = {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#D9D9D9FF', // Replace with your secondary color
      padding: '24px', // Increase padding for more height
      height: '12vh'
    },
    headerButton: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#D9D9D9FF', // Replace with your secondary color
      padding: '24px', // Increase padding for more height
    },
    h1: {
      fontFamily: 'BlinkMacSystemFont',
      fontWeight: 'bolder', // Set the font weight to bold
      lineHeight: '10px',
      fontSize: '36px', // Increase font size
      color: 'black', // Set the text color to black
      margin: 'auto', // Remove default margin
    }
  };

  const handleClick = () => {
    localStorage.removeItem('user');
    window.location.replace('http://localhost:3000/login');
  }

  return (
<div>
  <Header style={user !== null ? customStyles.header : customStyles.headerButton}>
    <a
      href={`http://localhost:3000/home`}
      style={{
        ...customStyles.h1,
        padding: '24px', // Add padding to the top and bottom
      }}
      onMouseOver={(e) => (e.target.style.textDecoration = 'none')}
      onMouseOut={(e) => (e.target.style.textDecoration = 'none')}
    >
      YAPPLE
      <p style={{ fontSize: '12px', color: 'gray' }}>for Multilingual Yappers</p>
    </a>
    {user && (
      <Button type="primary" danger onClick={handleClick}>
        Logout
      </Button>
    )}
  </Header>
</div>

  );
}
