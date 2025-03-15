import { motion } from 'framer-motion';

import '../styles/style.css'; // Import the new CSS file


import React from "react";

const About = () => {
  return (
    <div
      style={{
        
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      

      <h1 style={{ textAlign: "center", marginTop: "15px" }}>About</h1>

      <section style={{ backgroundColor: "transparent" }}>
        <div className="text-center">
          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={index}
                  className={index === 0 ? "active" : ""}
                  aria-current={index === 0 ? "true" : undefined}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              ))}
            </div>
            <div className="carousel-inner">
              {["IMG20231224104040.jpg", "IMG20231224144201.jpg", "IMG20231226081307.jpg"].map((img, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                  <img src={img} className="d-block w-50 mx-auto" alt="Slide" />
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="about px-4">
          <h3>About Me</h3>
          <p>I am a student at JNTU Vizianagaram pursuing Information Technology. I work as a web master for the ACM student chapter in my college.</p>
          <p>My goal is to excel in web development. My skills include CSS, Bootstrap, and JavaScript.</p>

          <h3>Education Details</h3>
          <table className="table table-bordered text-center">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Qualification</th>
                <th>Institution</th>
                <th>Percentage</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>B.Tech</td><td>JNTU Vizianagaram</td><td>-</td></tr>
              <tr><td>2</td><td>Intermediate</td><td>Narayana Jr. College</td><td>96.6%</td></tr>
              <tr><td>3</td><td>SSC</td><td>Oxford High School</td><td>93%</td></tr>
            </tbody>
          </table>

          <h3>Additional Information</h3>
          <table className="table table-bordered">
            <tbody>
              <tr><td>Address</td><td>Razole, Konaseema, Andhra Pradesh</td></tr>
              <tr><td>Date of Birth</td><td>13th May 2004</td></tr>
              <tr><td>Hobbies</td><td>Collecting coins, Playing Games</td></tr>
              <tr><td>Email</td><td>kishorekadali2957@gmail.com</td></tr>
              <tr><td>Phone</td><td>+91 9032092722</td></tr>
              <tr><td>Interested In</td><td>Traveling</td></tr>
              <tr><td>Internships</td><td>Internshala Trainings, CodeSoft</td></tr>
              <tr><td>Languages Known</td><td>Telugu, English</td></tr>
              <tr><td>Work Experience</td><td>Webmaster for ACM Student Chapter</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      
    </div>
  );
};

export default About;
