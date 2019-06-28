import React from "react";
import Header from "../Header/Header";
import Sidebar from "../../widget/Sidebar";
import EventList from "../../widget/Events/EventList";

function Home() {
  return (
    <div className="Home">
      <Header />
      <Sidebar />
      <EventList />
    </div>
  );
}

export default Home;
