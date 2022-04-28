import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios'
import Auth_back from '../Images/Auth_back.jpg';
import culogo from '../Images/cu-logo.png';

const cookies = new Cookies();
const initialState = { fullName: '', username: '', password: '', confirmPassword: '', phoneNumber: '', avatarURL: '' }

const Auth = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullName, username, password, phoneNumber, avatarURL } = form;
    const URL = 'http://localhost:5000/auth';
    const { data: { token, userID, hashedPassword } } = await axios.post(`${URL}/${isSignup ? 'signup' : 'login'}`, { username, password, fullName, phoneNumber, avatarURL })
    
    cookies.set('token', token);
    cookies.set('username', username);
    cookies.set('fullName', fullName);
    cookies.set('userID', userID);

    if(isSignup) {
    cookies.set('phoneNumber', phoneNumber);
    cookies.set('avatarURL', avatarURL);
    cookies.set('hashedPassword', hashedPassword);
    }

    window.location.reload();
  }

  const switchMode = () => { setIsSignup((prevIsSignup) => !prevIsSignup) };

  return (
    <div className="auth__form-container">
      <div className="auth__form-container_fields">
        <h1 className="auth-form__heading">STUDDY.</h1>
        <div className="auth__form-container_fields-content">
          <p>{isSignup ? 'Sign Up' : 'Sign In'}</p>
          <form onSubmit={handleSubmit}>
            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="fullName">Full Name</label>
                <input name="fullName" type="text" placeholder="Full Name" onChange={handleChange} required />
              </div>
            )}
            <div className="auth__form-container_fields-content_input">
              <label htmlFor="username">Username</label>
              <input name="username" type="text" placeholder="Username" onChange={handleChange} required />
            </div>
            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input name="phoneNumber" type="text" placeholder="Phone Number" onChange={handleChange} required />
              </div>
            )}
            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="avatarURL">Avatar URL</label>
                <input name="avatarURL" type="text" placeholder="Avatar URL" onChange={handleChange} required />
              </div>
            )}
            <div className="auth__form-container_fields-content_input">
              <label htmlFor="password">Password</label>
              <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
            </div>
            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input name="confirmPassword" type="text" placeholder="Confirm Password" onChange={handleChange} required />
              </div>
            )}
            <div className="auth__form-container_fields-content_button">
              <button>{isSignup ? "Sign Up" : "Sign In"}</button>
            </div>
          </form>
          <div className="auth__form-container_fields-account">
            <p>
              {isSignup ? "Already have an account?" : "Don't have an account?"}
              <span onClick={switchMode}>
                {isSignup ? ' Sign In' : ' Sign Up'}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="auth__form-container_image">
        <img className="auth-culogo" src={culogo} />
        <img className="auth-back" src={Auth_back} />
      </div>
    </div>
  )
}

export default Auth