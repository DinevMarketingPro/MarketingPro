import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import Process from "./Process";
import Requests from "./Requests";
import Contacts from "./Contacts";
import "./styles/index.css";

function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <main className="home-main">
        <Hero />
        <Services />
        <Process />
        <Requests />
        <Contacts />
      </main>
    </div>
  );
}

export default Home;