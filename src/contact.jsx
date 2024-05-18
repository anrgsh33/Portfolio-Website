import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import "./contact.css";
const contact = () => {
  return (
    <section id="contact" style={{ marginTop: "50px" }}>
      <h2 style={{ textAlign: "center", color: " #005f69" }}>Get in Touch</h2>
      <div style={{ paddingLeft: "150px" }}>
        <ul style={{ listStyleType: "None", marginTop: "40px" }}>
          <li>
            Codechef
            <a href="https://www.codechef.com/users/anrgsh33">
              <span className="link-icon">
                <OpenInNewIcon />
              </span>
            </a>
          </li>
          <li>
            Leetcode
            <a href="https://leetcode.com/u/anrgsh33/">
              <span className="link-icon">
                <OpenInNewIcon />
              </span>
            </a>
          </li>
          <li>
            GeeksForGeeks
            <a href="https://www.geeksforgeeks.org/user/anrgsh33/">
              <span className="link-icon">
                <OpenInNewIcon />
              </span>
            </a>
          </li>
          <li>
            Hackerrank
            <a href="https://www.hackerrank.com/profile/anrgsh33">
              <span className="link-icon">
                <OpenInNewIcon />
              </span>
            </a>
          </li>
          <li>
            Linkedin
            <a href="https://www.linkedin.com/in/anurag-singh-08755a217/">
              <span className="link-icon">
                <OpenInNewIcon />
              </span>
            </a>
          </li>
          <li>
            GitHub
            <a href="https://github.com/anrgsh33">
              <span className="link-icon">
                <OpenInNewIcon />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default contact;
