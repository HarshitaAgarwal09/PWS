import React, { useState } from "react";
import "./Events.css";
import { Rate } from "antd";

const EventItem = props => {
  return (
    <div className="EventItem">
      <img src={props.event.img} />
      <div className="EIText">
        <div className="EIcol1">
          <div className="EIName">
            {" "}
            Name:
            <span> {props.event.name}</span>
          </div>
          <div className="EILocation">
            {" "}
            Location:
            <span> {props.event.location}</span>
          </div>
          <div className="EIDescription">
            {" "}
            Description:
            <span> {props.event.description}</span>
          </div>
        </div>
        <div className="EIcol2">
          <div className="EITicketPrice">
            {" "}
            Ticket Price:
            <span> {props.event.ticket_price}</span>
          </div>
        </div>
        <div className="EIcol3">
          <button className="EIBtn">View Details</button>
          <div className="EIRatings">
            {" "}
            (Ratings)
            <br />
            <Rate
              style={{ fontSize: 10 }}
              disabled
              defaultValue={props.event.ratings}
            />
          </div>
        </div>
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
      ratings: 4,
      img:
        "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2017/12/22223742/Events-1200x630.jpg"
    },
    {
      name: "Event1",
      location: "Delhi",
      description: "Comedy",
      ticket_price: 100,
      ratings: 4,
      img:
        "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2017/12/22223742/Events-1200x630.jpg"
    },
    {
      name: "Event1",
      location: "Delhi",
      description: "Comedy",
      ticket_price: 100,
      ratings: 4,
      img:
        "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2017/12/22223742/Events-1200x630.jpg"
    },
    {
      name: "Event1",
      location: "Delhi",
      description: "Comedy",
      ticket_price: 100,
      ratings: 4,
      img:
        "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2017/12/22223742/Events-1200x630.jpg"
    }
  ]);
  let EventsDisplay = events.map(event => {
    return <EventItem event={event} />;
  });
  return (
    <div className="Events">
      <div className="Image-container">
        <img
          className="background-img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvV7a5eIyQqlcN1zu16Xr7yMFmRsEraexnjHQKq2LceXgZwyYXbw"
        />
        <div className="SearchBar">
          <input type="text" name="location" placeholder="Location" />
          <input type="text" name="event_type" placeholder="Event Type" />
          <input type="date" name="date" placeholder="Date" />
          <button>Search</button>
        </div>
      </div>

      {EventsDisplay}
    </div>
  );
};
export default EventList;
