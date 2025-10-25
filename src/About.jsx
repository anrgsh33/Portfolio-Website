import * as React from "react";
import Paper from "@mui/material/Paper";
import "./about.css";

const About = () => {
  return (
    <section id="about-me" className="about-container">
      <h2>About Me</h2>

      <div id="about-img">
        <p id="about">
          Hello I am Anurag Singh. I am a web developer currently in my final
          year pursuing Bachelor of Technology in Computer Science & Engineering
          from Heritage Institute of Technology, Kolkata with a strong
          foundation in web technologies including HTML, CSS, JavaScript,
          ReactJS, Node.js, Express.js, and SQL. Experienced in building
          projects leveraging these languages and tools. Skilled competitive
          programmer with a 3-star rating at CodeChef, having solved over 800
          problems on various coding platforms.
        </p>

        <div id="img">
          <img src="./images/anurag.jpeg" alt="Anurag.jpg" />
        </div>
      </div>

      <SimplePaper />
    </section>
  );
};

function SimplePaper() {
  return (
    <div className="paper-container">
      <div className="paper-container1">
        <Paper elevation={10}>
          <div className="MuiPaper-root1">
            <h3>Education :</h3>
            <ul>
              <li>
                <p>
                  <strong>Bachelor of Technology in CSE</strong> <br />
                  Heritage Institute of Technology, Kolkata
                  <br />
                  2020–2024, CGPA: 8.64
                </p>
              </li>
              <br />
              <li>
                <p>
                  <strong>Annual Intermediate Examination (BSEB)</strong>
                  <br />
                  Sr. Sec. School, Kajipur, Saran
                  <br />
                  2017–2019, Percentage: 80.6%
                </p>
              </li>
              <br />
              <li>
                <p>
                  <strong>Secondary School Examination (BSEB)</strong>
                  <br />
                  High School Kazipur, Saran
                  <br />
                  2016–2017, Percentage: 70.6%
                </p>
              </li>
            </ul>
          </div>
        </Paper>
      </div>

      <div className="paper-container2">
        <Paper elevation={10}>
          <div className="MuiPaper-root2">
            <h3>Experience :</h3>
            <ul>
              <li>
                <p>
                  <strong>
                    System Engineer — Tata Consultancy Services (TCS)
                  </strong>
                </p>
                <p>Full-time | Dec 2024 – Present (11 months)</p>
                <p>
                  <strong>Tech Stack:</strong> Java, Spring Boot, PL/SQL,
                  RESTful APIs
                </p>
              </li>
              <br />
              <li>
                <p>
                  <strong>
                    Associate Software Engineer — Indus Net Technologies
                  </strong>
                </p>
                <p>Full-time | Jun 2024 – Dec 2024 (7 months)</p>
                <p>
                  <strong>Tech Stack:</strong> Java, Spring Boot, Spring
                  Security, Microservices
                </p>
              </li>
            </ul>
          </div>
        </Paper>
      </div>
    </div>
  );
}

export default About;
