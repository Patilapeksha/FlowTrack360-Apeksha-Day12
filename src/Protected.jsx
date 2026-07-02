import React, { useState, useEffect } from "react";
import "./Protected.css";

function Protected() {
     const [role] = useState("Admin");
  const [showApi, setShowApi] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (!isLoggedIn) {
    return (
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h1>🔒 Access Denied</h1>
        <p>Please Login First.</p>
      </div>
    );
  }

 

  const alerts = [
    { id: 1, message: "✅ User Login Successful", color: "green" },
    { id: 2, message: "⚠ Permission Changed", color: "orange" },
    { id: 3, message: "🚨 Failed Login Attempt", color: "red" },
  ];

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    alert("Logged Out Successfully");
    window.location.reload();
  };

  return (
    <div className="dashboard">

      
      <div className="header">
        <h1>🔒 Protected Dashboard</h1>

        <div>
          <span className="notify">🔔 3</span>
          <p>{time.toLocaleString()}</p>
        </div>
      </div>

      
      <div className="card">
        <h2>User Profile</h2>
        <p><b>Name:</b> Apeksha</p>
        <p><b>Email:</b> apeksha@gmail.com</p>
        <p><b>Role:</b> {role}</p>
      </div>


      
      <div className="card">
        <h2>Protected Information</h2>

        <p>
          <b>API Key:</b>{" "}
          {showApi ?"Hide" : "apeksha"}
        </p>

        <button onClick={() => setShowApi(!showApi)}>
          {showApi ? "Hide" : "Reveal"}
        </button>

        <br /><br />

        <p>
          <b>Card:</b>{" "}
          {showCard ? "1234 5678 9012 3456" : "**** **** **** 3456"}
        </p>

        <button onClick={() => setShowCard(!showCard)}>
          {showCard ? "Hide" : "Reveal"}
        </button>
      </div>

      
      <div className="card">
        <h2>Role Based Access</h2>

        {role === "Admin" ? (
          <>
            <button>Edit Users</button>
            <button>Manage Roles</button>
          </>
        ) : (
          <p>Read Only Access</p>
        )}
      </div>

      
      <div className="card">
        <h2>Security Alerts</h2>

        {alerts.map((alert) => (
          <div key={alert.id} className={alert.color}>
            {alert.message}
          </div>
        ))}
      </div>

      
      <div className="logout">
        <button onClick={logout}>Logout</button>
      </div>

    </div>
  );
}

export default Protected;