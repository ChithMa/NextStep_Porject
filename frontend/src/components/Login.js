import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./../styles/form.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      const { role, firstName } = res.data.user;

      if (role === "student") navigate("/student-dashboard", { state: { firstName } });
      else if (role === "coordinator") navigate("/coordinator-dashboard", { state: { firstName } });
      else if (role === "admin") navigate("/admin-dashboard", { state: { firstName } });
      else setError("Invalid role");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {error && <p className="error">{error}</p>}
      <p>
        New student?{" "}
        <span onClick={() => navigate("/register/step1")} className="link">
          Register here
        </span>
      </p>
    </div>
  );
}

export default Login;
