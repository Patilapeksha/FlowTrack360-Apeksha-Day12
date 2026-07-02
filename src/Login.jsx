import React, { useState } from "react";
import "./Login.css";

export default function Login({ setShowLogin, user }) {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!data.email || !data.password) {
      setError("All fields required");
      return;
    }

    if (!user) {
      setError("No registered user found");
      return;
    }

    if (data.email === user.email && data.password === user.password) {
      alert("Login Successful!");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="page">
      <div className="card">
        <h2>Member Login</h2>

        <form onSubmit={handleLogin}>
          <input
            placeholder="Username / Email"
            onChange={(e) =>
              setData({ ...data, email: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setData({ ...data, password: e.target.value })
            }
          />

          <button type="submit">LOGIN</button>
        </form>

        <p className="error">{error}</p>

        <p className="switch">
          You are not a member?
        </p>

        <button
          className="registerBtn"
          onClick={() => setShowLogin(false)}
        >
          REGISTER NOW
        </button>
      </div>
    </div>
  );
}