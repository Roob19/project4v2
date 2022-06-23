import { EventCard } from "../../components/EventCard/EventCard";

const EventIndex = (props) => {
    return (
        <div>
            <div className="events-container">
                {props.map((event, idx) => {
                    return (
                        <EventCard event={event} idx={idx} />
                    )
                })}
            </div>
        </div>
    )
}

export {
    EventIndex,
}