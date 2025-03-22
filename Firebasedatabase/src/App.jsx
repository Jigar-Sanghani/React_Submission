import React, { useState } from "react";
import { getGoogleAuth, login, resetPassword, signup } from "./config/firebase";
import "./App.css";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleGoogleAuth = async () => {
    try {
      let userData = await getGoogleAuth();
      setMessage(`Google Sign-in successful: ${userData.displayName}`);
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      if (isLogin) {
        let userData = await login(email, password);
        setMessage(`Login Successful! Welcome ${userData.email}`);
      } else {
        let userData = await signup(email, password);
        setMessage(`Signup Successful! Welcome ${userData.email}`);
      }
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleReset = async () => {
    if (!email) {
      setMessage("Please enter your email address.");
      return;
    }

    try {
      await resetPassword(email);
      setMessage("Password reset link sent to your email!");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="container">
      <h2>{isLogin ? "Login" : "Signup"}</h2>

      {message && <p className="message">{message}</p>}

      <form onSubmit={handleAuth} className="auth-form">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">{isLogin ? "Login" : "Signup"}</button>
      </form>

      <button onClick={handleGoogleAuth} className="google-btn">
        Sign in with Google
      </button>

      {isLogin && (
        <p onClick={handleReset} className="reset-link">
          Forgot Password?
        </p>
      )}

      <p className="toggle-auth">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <span onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Sign Up" : "Login"}
        </span>
      </p>
    </div>
  );
};

export default App;
