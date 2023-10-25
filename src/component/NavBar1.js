import "./NavBar1Style.css";
import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsSearch } from "react-icons/bs";
import { FaBars } from 'react-icons/fa';
import { Link,useLocation } from 'react-router-dom'; // Import Link from react-router-dom
import { useAuth } from './UseAuth';

const NavBar1 = () => {
  const isAuthenticated = useAuth();
  const location = useLocation();

  // Determine the profile route based on the current route
  const profileRoute = location.pathname.startsWith('/faculty') ? '/faculty/profile' : '/admin/profile';

  // Render the profile link/button only if the user is authenticated
  const profileLink = isAuthenticated ? (
    <Link to={profileRoute}>
      <img
        src="https://media.licdn.com/dms/image/D4D03AQEVGlheMFRE8A/profile-displayphoto-shrink_800_800/0/1679758221275?e=2147483647&v=beta&t=jeNR1kuF--x2hOncSwFCvDrS0BclQ54sgrA4ZGTP6MA"
        alt="Profile"
      />
    </Link>
  ) : null;
  return (
    <div>
      <Navbar expand="md" className="navbody">
      <Container fluid>
        <Navbar.Brand className='navlogo'  href="#"><span className="insidelogo">Profess</span>Xpert</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"><FaBars/></Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/" className="navLink">Home</Nav.Link>
            <Nav.Link href="/admin/profile" className="navLink">Profile</Nav.Link>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="inputSearch me-2"
              aria-label="Search"
            />
            <Button className="searchButton"><BsSearch /></Button>
          </Form>
          </Nav>
        </Navbar.Collapse>
        {/* Profile picture on the right */}
        <div className="d-none d-md-block">
             {profileLink}
          </div>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar1