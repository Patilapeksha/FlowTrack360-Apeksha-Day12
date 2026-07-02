import React, { useState } from "react";

export default function Error() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const handleLogin = () => {
    if (!form.email || !form.password) {
      setError("⚠️ All fields are required");
      return;
    }

    if (form.email === "admin@gmail.com" && form.password === "1234") {
      setSuccess("✅ Login Successful");
      setError("");
    } else {
      setError("❌ Invalid email or password");
      setSuccess("");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Login</h2>

        {error && <div style={styles.error}>{error}</div>}
        {success && <div style={styles.success}>{success}</div>}

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          style={styles.input}
        />

        <button onClick={handleLogin} style={styles.button}>
          Login
        </button>
      </div>
    </div>
  );
}

// =========================
// 🎨 INLINE CSS
// =========================
const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg,#1e3c72,#2a5298)",
    fontFamily: "Arial",
  },

  card: {
    width: "320px",
    background: "white",
    padding: "25px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
  },

  input: {
    width: "100%",
    padding: "10px",
    margin: "8px 0",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },

  button: {
    width: "100%",
    padding: "10px",
    background: "#1e3c72",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },

  error: {
    background: "#ffdddd",
    color: "#d8000c",
    padding: "8px",
    marginBottom: "10px",
    borderRadius: "6px",
    fontSize: "13px",
  },

  success: {
    background: "#ddffdd",
    color: "#2e7d32",
    padding: "8px",
    marginBottom: "10px",
    borderRadius: "6px",
    fontSize: "13px",
  },
};