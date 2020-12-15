import React , {useState} from 'react';
import {Link} from 'react-router-dom';
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
        <Nav.Link><Link  className="link" to="/plot">Plots</Link></Nav.Link>
        <Nav.Link> <Link  className="link" to="/flat">Flats</Link></Nav.Link>
      <Nav.Link><Link  className="link" to="/rent">Rent</Link></Nav.Link>
      <Nav.Link><Link  className="link" to="/const">Floor Plan</Link></Nav.Link>
      <Nav.Link><Link  className="link" to="/const">Construction</Link></Nav.Link>
      <Nav.Link href="#contact">Contact us</Nav.Link>
    
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