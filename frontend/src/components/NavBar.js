import React from 'react';
import { Layout, Button } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

export default function AppBar() {
  const customStyles = {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#D9D9D9FF', // Replace with your secondary color
      padding: '24px', // Increase padding for more height
    },
    h1: {
      fontFamily: 'helvetica',
      fontWeight: '300x', // Set the font weight to bold
      fontSize: '36px', // Increase font size
      color: 'black', // Set the text color to black
      margin: 0, // Remove default margin
    },
  };

  return (
    <div>
      <Header style={customStyles.header}>
        <h1 style={customStyles.h1}>YABBLE</h1>
        <Button type="primary" danger>
          Logout
        </Button>
      </Header>
    </div>
  );
}
