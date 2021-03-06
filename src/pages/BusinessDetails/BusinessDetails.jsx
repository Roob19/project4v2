import React from 'react';

const BusinessDetails = ({business}) => {

    return (
        <div className="business-details">
            <h1>{business.name}</h1>
            <img src={business.image_url} alt={business.alias} />
            <p>Rating: {business.rating}</p>
            <p>{business.review_count} Reviews</p>
            <p>Price: {business.price}</p>
            <p>{business.location.display_address}</p>
            <p>{business.display_phone}</p>
            <p>View Their <span>
                <a href={business.url} target="blank" rel="noreferrer">
                    Yelp 
                </a> 
                </span> Page
            </p>
            {business.transactions ? <p>{business.transactions} Available </p> : ""}
        </div>
    )
}

export {
    BusinessDetails,
}
