import React from "react";
import PlayersList from "./PlayersList";

function App() {
  return (
    <div className="app-container">
      <h1 style={{
        textAlign: "center",
        color: "white",
        textShadow: "2px 2px 6px rgba(0,0,0,0.9)",
        marginBottom: "30px",
        fontWeight: "900",
        fontSize: "3rem",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
      }}>
        FIFA Player Cards
      </h1>
      <PlayersList />
    </div>
  );
}

export default App;
