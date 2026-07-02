import React, { useState } from "react";
import "./Logindash.css";

function Logindash() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "1234") {
      localStorage.setItem("isLoggedIn", "true");
      alert("Login Successful");
      window.location.reload();
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />

        <button type="submit">Login</button>
      </form>

      <p>
        Demo Email: <b>admin@gmail.com</b><br />
        Password: <b>1234</b>
      </p>
    </div>
  );
}

export default Logindash;