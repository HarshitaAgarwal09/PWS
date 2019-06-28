import React, { useState } from "react";
import "./Events.css";

const EventItem = props => {
  return (
    <div className="EventItem">
      <div>
        {" "}
        Name:
        <span> {props.event.name}</span>
      </div>
      <div>
        {" "}
        Name:
        <span> {props.event.name}</span>
      </div>
      <div>
        {" "}
        Name:
        <span> {props.event.name}</span>
      </div>
      <div>
        {" "}
        Name:
        <span> {props.event.name}</span>
      </div>
    </div>
  );
};

const EventList = props => {
  const [events, setEvents] = useState([
    {
      name: "Event1",
      location: "Delhi",
      description: "Comedy",
      ticket_price: 100,
      ratings: 4
    }
  ]);
  let EventsDisplay = events.map(event => {
    return <EventItem event={event} />;
  });
  return <div className="Events">{EventsDisplay}</div>;
};
export default EventList;
