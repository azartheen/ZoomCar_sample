
import '.././App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Navbar,Nav,Jumbotron,Card, CardDeck, Image,Carousel} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function offer() {
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" className="Nav-background" style={{flexDirection:'row',justifyContent:'space-between ' }}>
        <NavLink to='/'>
        <Navbar.Brand  className='brandName'>Zoomcar</Navbar.Brand></NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">     
          <div className="right">
          <Nav className='nav-right'>
            <div class='nav-link'>
            <NavLink to ='/subscription'>SUBSRICPTIONS</NavLink>
            </div>
            <Nav.Link href="#">AMIGO</Nav.Link>
            <Nav.Link href="#">ZMS</Nav.Link>
            <Nav.Link href="#">MOBILE APP</Nav.Link>
            <Nav.Link href="#">SIGNUP</Nav.Link>
            <Nav.Link href="#">LOGIN</Nav.Link>
          </Nav>
          </div>  
        </Navbar.Collapse>
      </Navbar>
    
    <h3 class='offer-title'>ZOOMCAR OFFERS FOR CHENNAI</h3>
    <hr width='1050px'class='offer-hr'/>
    <div class="offer-cards">
      <Card style={{ width: '500px',float:'left', margin:'20px' }}>
        <Card.Img variant="top" src="https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/466f346c4879d3a769580d771bc1eca4f80a6fbc.jpg?1619090061" />
          <Card.Body>
            <Card.Text style={{float:"left" ,margin:'none'}}>Promo Code:<span style={{fontWeight:'bold'}}> apr30</span></Card.Text>
            <Card.Text style={{float:"right"}}>Validity: <span style={{fontWeight:'bold'}}>17 May, 2021</span></Card.Text>
          </Card.Body>           
        </Card>
        <Card style={{ width: '500px',margin:'20px',float:'left' }}>
        <Card.Img variant="top" src="https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/9597c84fdf092c851cbfca5dd03c63bbda3915a8.jpg?1618388121" />
          <Card.Body>
            <Card.Text style={{float:"left" ,margin:'none'}}>Promo Code: <span style={{fontWeight:'bold'}}></span>alzoomfit</Card.Text>
            <Card.Text style={{float:"right"}}>Validity: 31 Jul, 2021</Card.Text>
          </Card.Body>           
        </Card>
        <Card style={{ width: '500px',margin:'20px'}}>
        <Card.Img variant="top" src="https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/3a036b7e841c0da948fa7cf23d649bc050a12644.png?1543229981" />
          <Card.Body>
            <Card.Text style={{float:"left" ,margin:'none'}}>Promo Code:<span style={{fontWeight:'bold'}}> almcard1500</span></Card.Text>
            <Card.Text style={{float:"right"}}>Validity:<span style={{fontWeight:'bold'}}> 31 Mar, 2022</span></Card.Text>
          </Card.Body>           
        </Card>
      </div>

      <div >
        <div className="d-flex flex-row aboveFooter">
        <div className="flexContentsFooter">
          <Image style={{height:'30px',width:'30px',alignSelf:'center',marginTop:'10px',}} src="https://www.pngkey.com/png/detail/113-1138845_question-mark-inside-square-question-mark-icon-white.png"  />
          <h5 className="flexContentsFooterText">How zoomcar works?</h5>
        </div>
        <div className="flexContentsFooter">
          <Image style={{height:'30px',width:'30px',alignSelf:'center',marginTop:'10px',}} src=" data:image/png;base64,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"/>
          <h5 className="flexContentsFooterText"> Policies</h5>
        </div>
        <div className="flexContentsFooter">
          <Image style={{height:'30px',width:'30px',alignSelf:'center',marginTop:'10px',}} src="data:image/png;base64,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"  />          
          <h5 className="flexContentsFooterText">Help Support</h5>
        </div>
        <div className="flexContentsFooter">
          <Image style={{height:'30px',width:'30px',alignSelf:'center',marginTop:'10px',}} src="data:image/png;base64,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"  />
          <h5 className="flexContentsFooterText">Zoom in Safety</h5>
        </div>    
      </div>
      </div>
      <div class='footer'>
        <div className='footerHeading'>
          About Us
        </div>
          <div className="d-flex flex-row footerFlex">
            <div className="flexContentsFooter">
            <a href='#'>Zoomcar Team</a>
            </div>
            <div className="flexContentsFooter">
              <a href='#'>Zoomcar Subscription</a>
            </div>
            <div className="flexContentsFooter">
              <a href='#'>Zoomcar Blog</a>
            </div>
            <div className="flexContentsFooter">
              <a href='#'>Careers @ Zoomcar</a>
            </div>    
          </div>
          <div className="d-flex flex-row footerFlex">
            <div className="flexContentsFooter">
            <a href='#'>Locations & Cars</a>
            </div>
            <div className="flexContentsFooter">
              <a href='#'>Self Drive Cars</a>
            </div>
            <div className="flexContentsFooter">
              <a href='#'>Invest via OurCrowd</a>
            </div>            
          </div>   
          <div className='footerHeading'>
            Cities          
          </div> 
          <div className="d-flex flex-row footerFlex">
            <div className="flexContentsFooter">
            <a href='#'>Self drive cars in Bangalore</a>
            </div>
            <div className="flexContentsFooter">
              <a href='#'>Self drive cars in Pune</a>
            </div>
            <div className="flexContentsFooter">
              <a href='#'>Self drive cars in Delhi</a>
            </div>
            <div className="flexContentsFooter">
              <a href='#'>Self drive cars in Mumbai</a>
            </div>    
          </div>
          <div className="d-flex flex-row footerFlex">
            <div className="flexContentsFooter">
            <a href='#'>Self drive cars in Chennai</a>
            </div>
            <div className="flexContentsFooter">
              <a href='#'>Self drive cars in Hyderabad</a>
            </div>
            <div className="flexContentsFooter">
              <a href='#'>Self drive cars in Chndigarh</a>
            </div>
            <div className="flexContentsFooter">
              <a href='#'>Self drive cars in Kolkata</a>
            </div>    
          </div>
          <div className="d-flex flex-row footerFlex">
            <div className="flexContentsFooter">
            <a href='#'>Self drive cars in Ahemedabad</a>
            </div>
            <div className="flexContentsFooter">
              <a href='#'>Self drive cars in Coimbatore</a>
            </div>
            <div className="flexContentsFooter">
              <a href='#'>Self drive cars in Indore </a>
            </div>
            <div className="flexContentsFooter">
              <a href='#'>Self drive cars in Jaipur</a>
            </div>    
          </div>
          <div className="d-flex flex-row footerFlex">
            <div className="flexContentsFooter">
            <a href='#'>Self drive cars in Ludhiana</a>
            </div>
            <div className="flexContentsFooter">
              <a href='#'>Self drive cars in Manglore</a>
            </div>
            <div className="flexContentsFooter">
              <a href='#'>Self drive cars in Mysore</a>
            </div>
            <div className="flexContentsFooter">
              <a href='#'>Self drive cars in Vizag</a>
            </div>    
          </div>
          <div className="d-flex flex-row footerFlex">
            <div className="flexContentsFooter">
            <a href='#'>Self drive cars in Nagpur</a>
            </div>
            <div className="flexContentsFooter">
              <a href='#'>Self drive cars in Kochi</a>
            </div>
            <div className="flexContentsFooter">
              <a href='#'>Self drive cars in Udhaipur</a>
            </div>
            <div className="flexContentsFooter">
              <a href='#'>Self drive cars in Vijayawada</a>
            </div>    
          </div>
          <div className="d-flex flex-row footerFlex">
            <div className="flexContentsFooter">
            <a href='#'>Self drive cars in Surat</a>
            </div>
            <div className="flexContentsFooter">
              <a href='#'>Self drive cars in Silguri</a>
            </div>
            <div className="flexContentsFooter">
              <a href='#'>Self drive cars in Lucknow</a>
            </div>
            <div className="flexContentsFooter">
              <a href='#'>Self drive cars in Guwahati</a>
            </div>    
          </div>
          <div className="d-flex flex-row footerFlex">
            <div className="flexContentsFooter">
            <a href='#'>Self drive cars in Buvaneshwar</a>
            </div>
            <div className="flexContentsFooter">
              <a href='#'>Self drive cars in Hassan</a>
            </div>
            <div className="flexContentsFooter">
              <a href='#'>Self drive cars in Vadodra</a>
            </div>
            <div className="flexContentsFooter">
              <a href='#'>Self drive cars in Trivandrum</a>
            </div>    
          </div>  
          <div className='footerHeading'>
            Airport Services         
          </div> 
          <div className="d-flex flex-row footerFlex">
            <div className="flexContentsFooter">
            <a href='#'>Self drive cars in Bangalore</a>
            </div>
            <div className="flexContentsFooter">
              <a href='#'>Self drive cars in Pune</a>
            </div>
            <div className="flexContentsFooter">
              <a href='#'>Self drive cars in Delhi</a>
            </div>
            <div className="flexContentsFooter">
              <a href='#'>Self drive cars in Mumbai</a>
            </div>    
          </div>
          <div className="d-flex flex-row footerFlex">
            <div className="flexContentsFooter">
            <a href='#'>Self drive cars in Chennai</a>
            </div>
            <div className="flexContentsFooter">
              <a href='#'>Self drive cars in Hyderabad</a>
            </div>
            <div className="flexContentsFooter">
              <a href='#'>Self drive cars in Chndigarh</a>
            </div>
            <div className="flexContentsFooter">
              <a href='#'>Self drive cars in Kolkata</a>
            </div>    
          </div>
          <div className="d-flex flex-row footerFlex">
            <div className="flexContentsFooter">
            <a href='#'>Self drive cars in Ahemedabad</a>
            </div>
            <div className="flexContentsFooter">
              <a href='#'>Self drive cars in Coimbatore</a>
            </div>
            <div className="flexContentsFooter">
              <a href='#'>Self drive cars in Indore </a>
            </div>
            <div className="flexContentsFooter">
              <a href='#'>Self drive cars in Jaipur</a>
            </div>    
          </div>
          <div className="d-flex flex-row footerFlex">
            <div className="flexContentsFooter">
            <a href='#'>Self drive cars in Ludhiana</a>
            </div>
            <div className="flexContentsFooter">
              <a href='#'>Self drive cars in Manglore</a>
            </div>
            <div className="flexContentsFooter">
              <a href='#'>Self drive cars in Mysore</a>
            </div>
            <div className="flexContentsFooter">
              <a href='#'>Self drive cars in Vizag</a>
            </div>    
          </div>
          <div className="d-flex flex-row footerFlex">
            <div className="flexContentsFooter">
            <a href='#'>Self drive cars in Nagpur</a>
            </div>
            <div className="flexContentsFooter">
              <a href='#'>Self drive cars in Kochi</a>
            </div>
            <div className="flexContentsFooter">
              <a href='#'>Self drive cars in Udhaipur</a>
            </div>
            <div className="flexContentsFooter">
              <a href='#'>Self drive cars in Vijayawada</a>
            </div>    
          </div>
          <hr/>
          <div className="KeepInTouch">
            Let's Keep in Touch
            <p className="Address">7th Floor, Tower-B, Diamond District, 150, HAL Airport Road, Kodihalli, Bangalore – 560008</p>
            <p className="Address">© Copyright 2017 Zoomcar India Private Ltd. All rights reserved.</p>
          </div>   
        </div>


    </div>
  );
}

export default offer;
