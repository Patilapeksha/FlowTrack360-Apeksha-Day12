import React, { useState } from "react";
import "./Registration.css";

export default function Registration({ setShowLogin, setUser }) {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (
      !data.firstName ||
      !data.lastName ||
      !data.username ||
      !data.email ||
      !data.password
    ) {
      setError("All fields required");
      return;
    }

    setUser(data);
    alert("Registration Successful!");
    setShowLogin(true);
  };

  return (
    <div className="page">
      <div className="card">
        <h2>Registration</h2>

        <form onSubmit={handleRegister}>
          <input placeholder="First Name" onChange={(e)=>setData({...data, firstName:e.target.value})}/>
          <input placeholder="Last Name" onChange={(e)=>setData({...data, lastName:e.target.value})}/>
          <input placeholder="User Name" onChange={(e)=>setData({...data, username:e.target.value})}/>
          <input placeholder="Email Address" onChange={(e)=>setData({...data, email:e.target.value})}/>
          <input type="password" placeholder="Password" onChange={(e)=>setData({...data, password:e.target.value})}/>

          <button type="submit">REGISTER</button>
        </form>

        <p className="error">{error}</p>

        <button
          className="cancelBtn"
          onClick={() => setShowLogin(true)}
        >
          CANCEL
        </button>
      </div>
    </div>
  );
}