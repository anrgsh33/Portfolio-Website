import { useState } from "react";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import "./navbar.css";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <nav className="navbar">
        <h1 id="username">anrgsh33</h1>
        <ul className="list">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about-me">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="menu-icon">
          <MenuRoundedIcon onClick={toggleDrawer(true)} />
        </div>
      </nav>
      <MenuItem open={drawerOpen} onClose={toggleDrawer(false)} />
    </>
  );
};

const MenuItem = ({ open, onClose }) => {
  const toggleDrawer = (open) => () => {
    onClose(open);
  };

  return (
    <div className="drawer">
      <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
        <div className="drawer-content">
          <div className="close-icon">
            <CloseIcon onClick={toggleDrawer(false)} />
          </div>

          <ul>
            <li>
              <a href="#home" onClick={toggleDrawer(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about-me" onClick={toggleDrawer(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#" onClick={toggleDrawer(false)}>
                Projects
              </a>
            </li>
            <li>
              <a href="#" onClick={toggleDrawer(false)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
