import React from "react";
import Header from "../Header/Header";
import Sidebar from "../../widget/Sidebar";
import EventList from "../../widget/Events/EventList";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div className="Home">
      <Header />
      <Sidebar />
      <EventList />
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
