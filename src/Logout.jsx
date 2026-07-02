import React from "react";
import "./Logout.css";

export default function Logout({ setPage, setUser }) {

  const handleLogout = () => {
    localStorage.removeItem("user"); // clear stored login
    setUser(null);                  // reset user state
    setPage("login");               // go to login page
  };

  return (
    <div className="app-container">
      <div className="card">
        <h2>Logout</h2>

        <p>Are you sure you want to logout?</p>

        <button onClick={handleLogout} style={{ background: "crimson" }}>
          Yes, Logout
        </button>

        <button
          onClick={() => setPage("dashboard")}
          style={{ marginTop: "10px" }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}