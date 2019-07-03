import React, { useState } from "react";
import { EventItem } from "./EventList";
import { Rate } from "antd";
import { Link } from "react-router-dom";
import "./Events.css";

const RecentEvents = () => {
  return (
    <div className="recent-events">
      {" "}
      <p>Recent Events</p>
    </div>
  );
};

export default function EventDetails(props) {
  const [eventid, setid] = useState(props.match.params.id);
  const [event, setEvent] = useState({
    name: "Event1",
    location: "Delhi",
    description: "Comedy",
    ticket_price: 100,
    ratings: 4,
    img:
      "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2017/12/22223742/Events-1200x630.jpg"
  });
  return (
    <div className="event-details-container">
      {" "}
      <div className="event-details">
        <EventItem
          event={{
            name: "Event1",
            location: "Delhi",
            description: "Comedy",
            ticket_price: 100,
            ratings: 4,
            img:
              "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2017/12/22223742/Events-1200x630.jpg"
          }}
          is_view_details={false}
        />
        <p className="permanent-note">NOTE: You can select multiple seats</p>
      </div>
      <div className="quantity-btn">
        <button>-</button>
        {1}
        <button>+</button>
      </div>
      <div className="event-days">
        <div className="event-morning">
          <p>Morning</p>
        </div>
      </div>
      <div className="event-days">
        <div className="event-afternoon">
          <p>Afternoon</p>
        </div>
      </div>
      <div className="event-days">
        <div className="event-evening">
          <p>Evening</p>
        </div>
      </div>
      <div className="event-days">
        <div className="event-night">
          <p>Night</p>
        </div>
      </div>
      <RecentEvents />
    </div>
  );
}
