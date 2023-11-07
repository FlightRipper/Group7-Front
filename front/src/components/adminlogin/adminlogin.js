import React, { useState } from 'react';
import './adminlogin.css';
import adminImage from '../images/admin.svg';

const Loginform = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(username, password);

    try {
      const response = await fetch("http://localhost:4000/api/admin", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      // console.log();

      const data = await response.json();

      console.log(data, "userRegister");

      if (data.status==="ok") {
        alert("Login successful");
      }
      else {
        alert("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="login-form">
      <h1>
        <img src={adminImage} alt="Admin" />
        <br />
        <br />
        <form onSubmit={handleSubmit}>
          <input
            placeholder="USERNAME"
            type="text"
            className="username"
            onChange={handleUsernameChange}
          />
          <br />
          <br />
          <input
            placeholder="PASSWORD"
            type="password"
            className="password"
            onChange={handlePasswordChange}
          />
          <br />
          <br />
          <button type="submit">Login</button>
        </form>
      </h1>
    </div>
  );
};

export default Loginform;