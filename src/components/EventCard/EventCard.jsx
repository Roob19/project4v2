import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = (event, idx) => {
    return (
        <div className='event-card'>
            <Link to={`/event/${event.id}`}>
                <img src={event.image_url} alt={event.id} />
                <h3>{event.name}</h3>
                <p>{event.is_canceled ? 'CANCELED' : ''}</p>
                <p>{event.is_free ? 'FREE' : `Price: $${event.cost} to $${event.cost_max}`}</p>
            </Link>
        </div>
    )
}

export {
    EventCard,
}