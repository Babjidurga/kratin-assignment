import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import {Link} from 'react-router-dom'



function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand id="home">Care <span style = {{color:"rgb(72, 223, 92)"}}>65+</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
          <Nav.Link as={Link} to="/" id="home">Home</Nav.Link>
              <Nav.Link as={Link} to="/apointment" id = "apointment">Apointment</Nav.Link>
              <Nav.Link as={Link} to="/services" id = "services">Services</Nav.Link>
              <Nav.Link as={Link} to="/whyus" id = "whyus">Why Us</Nav.Link>
              <Nav.Link as={Link} to="/contactus" id = "contactus">Contact Us</Nav.Link>
              <NavDropdown.Divider />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;