
import './App.css';

import {Text} from 'react'
import { Button,Navbar,Nav,Jumbotron,Card, CardDeck, Image,Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function nav() {
  return (
    
    <Navbar collapseOnSelect expand="lg" className="Nav-background" style={{flexDirection:'row',justifyContent:'space-between ' }}>
        <Navbar.Brand href="#home" className='brandName'>Zoomcar</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">     
          <div className="right">
          <Nav className='nav-right'>
            <Nav.Link to="/offer">OFFERS </Nav.Link>
            <Nav.Link href="#">SUBSRICPTIONS</Nav.Link>
            <Nav.Link href="#">AMIGO</Nav.Link>
            <Nav.Link href="#">ZMS</Nav.Link>
            <Nav.Link href="#">MOBILE APP</Nav.Link>
            <Nav.Link href="#">SIGNUP</Nav.Link>
            <Nav.Link href="#">LOGIN</Nav.Link>
          </Nav>
          </div>  
        </Navbar.Collapse>
      </Navbar>
  );
}

export default nav;
