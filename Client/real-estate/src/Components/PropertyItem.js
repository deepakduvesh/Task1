import React from 'react';
const PropertyItem = ({ property }) => {
    return (
        <div style={styles.propertyItem}>
            <img src={property.image} alt={property.title} style={styles.image} />
            <h3>{property.title}</h3>
            <p>{property.description}</p>
            <button style={styles.button}>View Details</button>
        </div>
    );
};

const styles = {
    propertyItem: {
        border: '1px solid #ccc',
        borderRadius: '5px',
        margin: '10px',
        padding: '10px',
        textAlign: 'center',
        width: '300px',
        boxShadow: '2px 2px 10px rgba(0,0,0,0.1)',
    },
    image: {
        width: '100%',
        height: '200px',
        borderRadius: '5px',
    },
    button: {
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        padding: '10px',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default PropertyItem;