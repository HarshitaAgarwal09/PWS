import React from "react";
import Header from "../Header/Header";
import Sidebar from "../../widget/Sidebar";
import { EventList } from "../../widget/Events/EventList";
import LatestOrder from "../../widget/LatestOrder";
import "./Home.css";

const BackgroundImage = () => {
  return (
    <div>
      <LatestOrder />
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
    </div>
  );
};

function Home() {
  return (
    <div>
      <BackgroundImage />
      <div className="SEContainer">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="event-list">
          <EventList />
        </div>
      </div>
    </div>
  );
}

export default Home;
