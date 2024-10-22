import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 0', textAlign: 'center' }}>
            <h1>Luxury Estates</h1>
            <p>Your dream home awaits!</p>
            <div style={styles.buttonContainer}>
                <Link to="/login" style={styles.button}>Login</Link>
                <Link to="/signup" style={styles.button}>Sign Up</Link>
            </div>
        </header>
    );
};

const styles = {
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        marginTop: '10px',
    },
    button: {
        backgroundColor: 'white',
        color: '#4CAF50',
        border: '1px solid #4CAF50',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        textDecoration: 'none',
    },
};

export default Header;