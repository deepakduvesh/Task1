// src/components/PropertyList.js

import React from 'react';
import PropertyItem from './PropertyItem';

const PropertyList = () => {
    // Sample data for luxury properties
    const properties = [
        {
            title: 'Modern Villa in Beverly Hills',
            description: 'A stunning villa with breathtaking views.',
            image: 'beverly-hills-modern-mansion-exterior-aerial-view.jpg',
        },
        {
            title: 'Luxurious Apartment in New York',
            description: 'Experience urban living in style.',
            image: 'Luxury-apartment-new-york-USA-east-56th-street-9-7532f9.jpg',
        },
        {
            title: 'Beachfront Property in Miami',
            description: 'Your paradise awaits on the sandy shores.',
            image: 'b179a7bc6a1bfab1ea470e5099fb94e6-cc_ft_960.webp',
        },
        {
            title: 'Beachfront Property in Miami',
            description: 'Your paradise awaits on the sandy shores.',
            image: 'b179a7bc6a1bfab1ea470e5099fb94e6-cc_ft_960.webp',
        },
        {
            title: 'Beachfront Property in Miami',
            description: 'Your paradise awaits on the sandy shores.',
            image: 'b179a7bc6a1bfab1ea470e5099fb94e6-cc_ft_960.webp',
        },
        {
            title: 'Modern Villa in Beverly Hills',
            description: 'A stunning villa with breathtaking views.',
            image: 'beverly-hills-modern-mansion-exterior-aerial-view.jpg',
        },
        {
            title: 'Modern Villa in Beverly Hills',
            description: 'A stunning villa with breathtaking views.',
            image: 'beverly-hills-modern-mansion-exterior-aerial-view.jpg',
        },
        {
            title: 'Luxurious Apartment in New York',
            description: 'Experience urban living in style.',
            image: 'Luxury-apartment-new-york-USA-east-56th-street-9-7532f9.jpg',
        },
        {
            title: 'Luxurious Apartment in New York',
            description: 'Experience urban living in style.',
            image: 'Luxury-apartment-new-york-USA-east-56th-street-9-7532f9.jpg',
        },
    ];

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {properties.map((property, index) => (
                <PropertyItem key={index} property={property} />
            ))}
        </div>
    );
};

export default PropertyList;