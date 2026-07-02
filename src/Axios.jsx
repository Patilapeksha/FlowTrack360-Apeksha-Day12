import React, { useState } from "react";
import "./Axios";

export default function AxiosApp() {
  const [page, setPage] = useState("register");
  const [user, setUser] = useState(null);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const register = () => {
    if (!form.email || !form.password) {
      alert("Fill all fields");
      return;
    }

    localStorage.setItem("user", JSON.stringify(form));
    alert("Registration Successful");
    setPage("login");
  };

  const login = () => {
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (
      savedUser &&
      savedUser.email === form.email &&
      savedUser.password === form.password
    ) {
      setUser(savedUser);
      alert("Login Successful");
      setPage("dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };

  const logout = () => {
    setUser(null);
    setPage("login");
  };

  return (
    <div className="app-container">

      {page === "register" && (
        <div className="card">
          <h2>Register</h2>

          <input name="firstName" placeholder="First Name" onChange={handleChange} />
          <input name="lastName" placeholder="Last Name" onChange={handleChange} />
          <input name="username" placeholder="Username" onChange={handleChange} />
          <input name="email" placeholder="Email" onChange={handleChange} />
          <input name="password" type="password" placeholder="Password" onChange={handleChange} />

          <button onClick={register}>Register</button>

          <p className="link" onClick={() => setPage("login")}>
            Already have account? Login
          </p>
        </div>
      )}

      {page === "login" && (
        <div className="card">
          <h2>Login</h2>

          <input name="email" placeholder="Email" onChange={handleChange} />
          <input name="password" type="password" placeholder="Password" onChange={handleChange} />

          <button onClick={login}>Login</button>

          <p className="link" onClick={() => setPage("register")}>
            New user? Register
          </p>
        </div>
      )}

      {page === "dashboard" && (
        <div className="card">
          <h2>Dashboard</h2>

          <p><b>Name:</b> {user?.firstName} {user?.lastName}</p>
          <p><b>Username:</b> {user?.username}</p>
          <p><b>Email:</b> {user?.email}</p>

          <button onClick={logout} style={{ background: "crimson" }}>
            Logout
          </button>
        </div>
      )}

    </div>
  );
}