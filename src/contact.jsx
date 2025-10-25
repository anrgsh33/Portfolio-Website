import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import Paper from "@mui/material/Paper";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import "./contact.css";

const Contact = () => {
  const contactInfo = [
    {
      label: "Email",
      value: "anrgsh33@gmail.com",
      icon: <EmailIcon fontSize="small" />,
    },
    {
      label: "Phone",
      value: "+91 8226836959",
      icon: <PhoneIcon fontSize="small" />,
    },
  ];

  const platforms = [
    { name: "CodeChef", link: "https://www.codechef.com/users/anrgsh33" },
    { name: "LeetCode", link: "https://leetcode.com/u/anrgsh33/" },
    {
      name: "GeeksForGeeks",
      link: "https://www.geeksforgeeks.org/user/anrgsh33/",
    },
    { name: "HackerRank", link: "https://www.hackerrank.com/profile/anrgsh33" },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/anurag-singh-08755a217/",
    },
    { name: "GitHub", link: "https://github.com/anrgsh33" },
  ];

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-heading">Get in Touch</h2>

      {/* Contact Info - Two in one row */}
      {/* Contact Info - Two in one row */}
      <div className="contact-info-grid">
        {contactInfo.map((info, index) => (
          <Paper key={index} elevation={3} className="contact-card">
            <div className="contact-card-content">
              <span className="contact-icon">{info.icon}</span>
              <a
                href={info.link}
                className="contact-value"
                target="_blank"
                rel="noopener noreferrer">
                {info.value}
              </a>
            </div>
          </Paper>
        ))}
      </div>

      {/* Platform Links - two-column grid */}
      <div className="contact-container">
        <h3 className="sub-heading">Profiles & Handles</h3>
        <div className="platform-grid">
          {platforms.map((site, index) => (
            <Paper key={index} elevation={3} className="contact-item">
              <span className="contact-name">{site.name}</span>
              <a
                href={site.link}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link">
                <OpenInNewIcon fontSize="small" />
              </a>
            </Paper>
          ))}
        </div>
      </div>

      {/* Resume Button */}
      <div className="resume-download">
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#005f69",
            color: "white",
            "&:hover": {
              backgroundColor: "#007c88",
            },
            borderRadius: "10px",
            textTransform: "none",
            fontSize: "1rem",
          }}
          startIcon={<DownloadIcon />}
          href="/Anurag_Updated_resume.pdf"
          download="Anurag_Singh_Resume.pdf">
          Download Resume
        </Button>
      </div>
    </section>
  );
};

export default Contact;
