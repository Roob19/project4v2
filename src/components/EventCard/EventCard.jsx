import { Link } from 'react-router-dom';

const EventCard = ({event, idx}) {
    return (
        <div className='event-card'>
            <h1>{event.name}</h1>
            <img src={event.image_url} alt={event.id} />
            <p>{event.business_id}</p>
            <p>{event.description}</p>
            <p>{event.is_canceled ? 'CANCELED' : ''}</p>
            <p>From {event.time_start} to {event.time_end}</p>
            <p>{event.is_free ? 'FREE' : `Price: $${event.cost} to $${event.cost_max}`}</p>
            <p>Interested: {event.interested_count}</p>
            <p>{`Attending: ${event.attending_count}`}</p>
            <p>{event.location.display_address}</p>
            <p>
                <a href={event.tickets_url} target="blank" rel="noreferrer">
                    Tickets
                </a>
            </p>
            <p>View Their <span>
                <a href={event.event_site_url} target="blank" rel="noreferrer">
                    Yelp 
                </a></span> Page
            </p>
        </div>
    )
}

export {
    EventCard,
}