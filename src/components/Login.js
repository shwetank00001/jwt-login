import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom'


const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData(
      { ...formData, [e.target.name]: e.target.value }
      )
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/login', formData)
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
    
  };

  return (
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input type="text" name="username" value={formData.username} onChange={handleChange} required/>
          </div>
          <div>
            <label>Password:</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required/>
          </div>
          <button className="login-button" type="submit">Login</button>
          <Link to={"/signup"}><button className="signup-button">Sign Up</button></Link>
        </form>
</div>

  );
};

export default Login;
