import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Clicker = () => {
    const [counter, setCounter] = useState(0);
    const [prizes, setPrizes] = useState(0);
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_PROC_LIVE_TEST}/click`)
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
        axios.post(`${import.meta.env.VITE_PROC_LIVE_TEST}/click`)
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
        axios.post(`${import.meta.env.VITE_PROC_LIVE_TEST}/reset`)
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
        <div 
            style={{
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '60vh',
                backgroundColor: '#f4f4f4',
                fontFamily: 'Arial, sans-serif',
                boxSizing: 'border-box',
                textAlign: 'center',
            }}
        >
            <h2 style={{
                fontSize: '2.5rem',
                color: '#333',
                margin: '20px 0',
                fontWeight: '600',
                lineHeight: '1.2'
            }}>
                Counter: {counter}
            </h2>
            <h3 style={{
                fontSize: '1.8rem',
                color: '#444',
                marginBottom: '30px',
                fontWeight: '500',
                lineHeight: '1.2'
            }}>
                Prizes Won: {prizes}
            </h3>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px',
                width: '100%',
                maxWidth: '350px',
                marginBottom: '20px'
            }}>
                <button 
                    onClick={handleClick} 
                    style={{
                        padding: '15px 30px',
                        fontSize: '18px',
                        cursor: 'pointer',
                        borderRadius: '30px',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                        transition: '0.3s',
                        fontWeight: '600',
                        width: '100%',
                        textAlign: 'center'
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                    Click Me!
                </button>

                <button 
                    onClick={handleReset} 
                    style={{
                        padding: '15px 30px',
                        fontSize: '18px',
                        cursor: 'pointer',
                        borderRadius: '30px',
                        backgroundColor: '#f44336',
                        color: 'white',
                        border: 'none',
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                        transition: '0.3s',
                        fontWeight: '600',
                        width: '100%',
                        textAlign: 'center'
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                    Reset
                </button>
            </div>

            {message && 
                <p style={{
                    marginTop: '20px', 
                    fontSize: '1.2rem', 
                    fontWeight: '500', 
                    color: '#4CAF50', 
                    textAlign: 'center'
                }}>
                    {message}
                </p>
            }
        </div>
    );
};

export default Clicker;