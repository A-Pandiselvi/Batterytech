import React from 'react';
import { Navbar, Nav, Button, Dropdown } from "react-bootstrap";
import { CgProfile } from "react-icons/cg";
import { FiRefreshCcw } from "react-icons/fi";



const NavbarComponent = () => {
  const refreshPage = () => {
    const loader = document.querySelector('.loader');
    loader.style.display = 'flex'; // Show the loader
    document.body.classList.add('fade-out'); // Add fade-out class

    setTimeout(() => {
      window.location.reload(); // Refresh the page
    }, 500);
  };

  return (
    <Navbar bg="dark" expand="md" variant="dark" className="px-3">
      <Navbar.Brand href="#">BatteryTech</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav" className="justify-content-end">
        <div style={{ display: 'flex', gap: '10px' }}>
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
            <CgProfile />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">UserName</Dropdown.Item>
              <Dropdown.Item href="#">Notification</Dropdown.Item>
              <Dropdown.Item href="#">Setting</Dropdown.Item>
              <Dropdown.Item href="#">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button variant="warning" onClick={refreshPage}>
          <FiRefreshCcw />          Refresh
          </Button>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
