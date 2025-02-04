import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Clicker = () => {
    const [counter, setCounter] = useState(0);
    const [prizes, setPrizes] = useState(0);
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5001/click')
            .then(response => {
                console.log('Initial API Response:', response.data);
                setCounter(response.data.data.counter);
                setPrizes(response.data.data.prizes);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleClick = () => {
        axios.post('http://localhost:5001/click')
            .then(response => {
                console.log('API Response After Click:', response.data);
                setCounter(response.data.data.counter);
                setPrizes(response.data.data.prizes);
                setMessage(response.data.message);
            })
            .catch(error => {
                console.error('Error posting data:', error);
            });
    };

    const handleReset = () => {
        axios.post('http://localhost:5001/reset')
            .then(response => {
                console.log('Reset API Response:', response.data);
                setCounter(response.data.data.counter);
                setPrizes(response.data.data.prizes);
                setMessage(response.data.message);
            })
            .catch(error => {
                console.error('Error resetting data:', error);
            });
    };

    return (
        <div>
            <h2>Counter: {counter}</h2>
            <h3>Prizes Won: {prizes}</h3>
            <button 
                onClick={handleClick} 
                style={{
                    padding: '15px 30px',
                    marginRight: '10px',
                    fontSize: '18px',
                    cursor: 'pointer',
                    borderRadius: '10px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none'
                }}>
                Click Me!
            </button>
            <button 
                onClick={handleReset} 
                style={{
                    padding: '15px 30px',
                    fontSize: '18px',
                    cursor: 'pointer',
                    borderRadius: '10px',
                    backgroundColor: '#f44336',
                    color: 'white',
                    border: 'none',
                    marginTop: '10px'
                }}>
                Reset
            </button>
            {message && <p style={{ marginTop: '20px', fontSize: '18px', fontWeight: 'bold', color: 'blue' }}>{message}</p>}
        </div>
    );
};

export default Clicker;
