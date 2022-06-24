import React from 'react';
import { Link } from 'react-router-dom';

const BusinessCard = (business, idx) => {
    return (
        <div className="business-card">
            <Link to={`/business/${business._id}`}>
                <img src={business.image_url} alt={business.alias} />
                <h3>{business.name}</h3>
                <p>Rating: {business.rating}</p>
                <p>Price: {business.price}</p>
            </Link>
        </div>
    )
}

export {
    BusinessCard,
}
