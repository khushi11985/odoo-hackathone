"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./signin.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignIn = (e) => {
    e.preventDefault();
    // Here you can add authentication logic
    // For now, just redirect to projects
    router.push("/projects");
  };

  const handleStartFreeTrial = () => {
    // Redirect to dashboard for free trial
    router.push("/Dashboard");
  };

  return (
    <div className="signin-container">
      <div className="signin-form">
        <h2>Sign In</h2>
        <form onSubmit={handleSignIn}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="signin-btn">Sign In</button>
        </form>
        <div className="divider">or</div>
        <button onClick={handleStartFreeTrial} className="trial-btn">
          Start Free Trial
        </button>
      </div>
    </div>
  );
};

export default SignIn;
