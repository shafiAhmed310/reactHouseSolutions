import React , {useState} from 'react';
import {Link } from 'react-router-dom';
import {Nav, Navbar} from 'react-bootstrap';
import LoginModal from './LoginModal';
import '../../App.css';
const NavbarPage = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div className="container">
             <header>
      <Navbar className="navbar" collapseOnSelect expand="lg" >
        <Link className="link" to="/">HouseSolutions</Link>
       
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" className="resNav">
    <Nav className="navlinks">
        <Link className="nav-link" to="/plot">Plots</Link>
        <Link className="nav-link"  to="/flat"> Flats</Link>
      <Link className="nav-link" to="/rent">Rent</Link>
      <Link className="nav-link" to="/const">Floor Plan</Link>
      <Link className="nav-link" to="/const">Construction</Link>
      <Link className="nav-link" to="/vendorLogin">Vendor</Link>
      <Nav.Link className="nav-link" href="#contact">Contact us</Nav.Link>
    
    </Nav>
    <Nav className="navlogin">
      <Nav.Link href="#deets" className="login" onClick={() => setModalShow(true)}>Login</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
<LoginModal show={modalShow}
        onHide={() => setModalShow(false)} />

       
      </header>
        </div>
    );
};

export default NavbarPage;