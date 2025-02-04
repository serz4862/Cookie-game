import React, { useState } from 'react';
import Clicker from './components/Clicker.jsx';

const App = () => {
  return (
    <div 
      style={{
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh', 
        backgroundColor: '#f1f8ff', 
        fontFamily: "'Roboto', sans-serif", 
        margin: '0',
      }}
    >
      <div 
        style={{
          textAlign: 'center', 
          backgroundColor: '#ffffff', 
          borderRadius: '10px', 
          padding: '30px', 
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)', 
          width: '80%', 
          maxWidth: '500px',
        }}
      >
        <h1 
          style={{
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            color: '#4CAF50', 
            marginBottom: '20px',
            letterSpacing: '1px',
          }}
        >
          Cookie Clicker Game
        </h1>
        <Clicker />
      </div>
    </div>
  );
};

export default App;