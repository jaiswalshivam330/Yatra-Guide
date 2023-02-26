import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import Earth from "../images/earth.png";
import "../style/Navbar.css";
import { useAuth0 } from "@auth0/auth0-react";


const HomeNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();


  return (
    <div className="header">
      <Navbar light expand="md">
        <NavbarBrand href="/">
          <img className="home_icon" src={Earth} alt="" />
          <span className = "nav_header">Yatra Guide</span>
        </NavbarBrand>

        <NavbarToggler className="nav_toggler" onClick={toggle} />
        <Collapse className = "nav_tog" isOpen={isOpen} navbar>
          <Nav className="ms-auto header__links" navbar>
            <NavItem>
              <NavLink className="nav_link" href="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav_link" href="/advisor">
                Advisior
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav_link" href="/info">
                Info
              </NavLink>
          </NavItem>
        <NavItem>
          <NavLink>          
              {isAuthenticated ? (
              <li>
              <button 
              style = {{border : "none", color : "black"}}
              onClick={() => logout({ returnTo: window.location.origin  })}>
                Log Out
               </button>
              </li>
              ) : (
                <li>
                <button style = {{border : "2px dotted red",  color : "black", fontSize : "1.3rem", background: "transparent"}} onClick={() => loginWithRedirect()}>Log In</button>
                </li>
              )}
              </NavLink>
            </NavItem>
           
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default HomeNavbar;
