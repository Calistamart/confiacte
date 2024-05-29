import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>404</h1>
            <p style={styles.message}>La page que vous recherchez n'existe pas.</p>
            <Link to="/" style={styles.link}>Retour à l'accueil</Link>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: '#f8f8f8',
        color: '#333',
        padding: '20px',
    },
    title: {
        fontSize: '6em',
        margin: '0',
    },
    message: {
        fontSize: '1.5em',
        margin: '20px 0',
    },
    link: {
        fontSize: '1.2em',
        color: '#007BFF',
        textDecoration: 'none',
        marginTop: '20px',
    }
};

export default PageNotFound;
