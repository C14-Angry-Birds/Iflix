import { useState } from "react";
import "./login.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://play-lh.googleusercontent.com/3_7Y-uenEqkS4BeEtWLymvvW2Fd4lkYV3JaT4G_BxNMNen2XQ7v_zv3s1-U8NO2P4A"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input
            type="email"
            placeholder="Email or phone number"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}