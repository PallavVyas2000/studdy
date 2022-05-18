import React, { useEffect } from 'react';
import NavBar from './NavBar';
import videoBG from '../Images/videoBG.mp4';
import culogo from '../Images/cu-logo-White.png';

const About = (props) => {
  useEffect(() => {
    // eslint-disable-next-line
  }, [])
  return (
    <>
      <NavBar />
      <div className="container-about">
        <video className="backVid" src={videoBG} autoPlay loop muted />
        <div className="about-content">
          <h1>STUDDY.</h1>
          <br />
          <br />
          <h2>What is studdy?</h2>
          <br/>
          <p>A community initiative platform to help students specially juniors/new joiners to communicate their issues, queries, ideas, doubts .etc with other peers and teachers.</p>
          <br /><br /><br /><br /><br /><br />
          <h2>In Association with <i>Chandigarh University</i></h2>
          <br />
          <img src={culogo} alt="Chandigarh University" />
        </div>
      </div>
    </>
  );
}

export default About
