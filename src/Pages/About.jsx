import React from "react";

const About = () => {
  return (
    <div style={{ backgroundColor: "black", color: "white", padding: "10px" }}>
      <h1 style={{ fontSize: "20px", textAlign: "left", marginBottom: "5px", color: "red" }}>
        ABOUT OUR GAMES
      </h1>

      <div style={{ display: "block" }}>
        <div style={{ border: "1px solid white", marginBottom: "5px", padding: "5px" }}>
          <h3>Discover Games</h3>
          <p>Games from different genres and platforms.</p>
        </div>

        <div style={{ border: "1px solid white", marginBottom: "5px", padding: "5px" }}>
          <h3>Game Details</h3>
          <p>System requirements, ratings, release dates.</p>
        </div>

        <div style={{ border: "1px solid white", padding: "5px" }}>
          <h3>Smooth Experience</h3>
          <p>Fast and simple interface.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
