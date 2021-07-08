
import React,{useState} from 'react';
import './App.css';
import { Button,Navbar,Nav,Jumbotron,Card, CardDeck, Image,Carousel,NavDropdown} from 'react-bootstrap';
import offer from './components/offer';
import amigo from './components/amigo'
import subscription from './components/subscription'
import { NavLink } from 'react-router-dom';
import Modal from './Modal'


import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/offer" component={offer}/>
          <Route path="/subscription" component={subscription}/>
          <Route path="/amigo" component={amigo}/>

        </Switch>
      </div>
    </Router>
    
  );
}
const Home=()=>{
  const [isOpen,setIsOpen]= useState(false)
  return(
    <div style={{
      backgroundColor:'#eeeeee'
    }}>
      <Navbar collapseOnSelect expand="lg" className="Nav-background" style={{flexDirection:'row',justifyContent:'space-between ' }}>
        <NavLink to='/'>
          <Navbar.Brand href="#home" className='brandName'>Zoomcar</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">     
          <div className="right">
          <Nav className='nav-right'>
            <div class='nav-link'>
            <NavLink to="/offer">OFFERS </NavLink>
            </div>
            <div class='nav-link'>
            <NavLink to ='/subscription'>SUBSRICPTIONS</NavLink>
            </div>
            <div class='nav-link'>
            <NavLink to='/amigo'>AMIGO</NavLink>
            </div>
            <NavDropdown title="MOBILE APP" id="navbarScrollingDropdown">
              <NavDropdown.Item  href="https://play.google.com/store/apps/details?id=com.zoomcar&referrer=utm_source%3Dhome%2520page%26utm_medium%3Dheader%2520links%26utm_content%3Dandroid%26utm_campaign%3Dinstalls"><p style={{color:'black'}}>Google Play</p></NavDropdown.Item>
              <NavDropdown.Divider background='black'/>
              <NavDropdown.Item href="https://apps.apple.com/us/app/zoomcar-self-drive-cars/id889910218?utm_campaign=installs&utm_content=iOS&utm_medium=header%20links&utm_source=home%20page"><p style={{color:'black'}}>App Store</p></NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link href="#" onClick={()=> setIsOpen(true)}>SIGNUP</Nav.Link>
            <Modal open={isOpen} onClose={()=> setIsOpen(false)}>
              
            </Modal>
            <Nav.Link href="#" onClick={()=> setIsOpen(true)}>LOGIN</Nav.Link>
          </Nav>
          </div>  
        </Navbar.Collapse>
      </Navbar>

      <Jumbotron fluid className='jumbotron'>          
          <h1 className="jumbotron-title">DRIVE IN A SANITISED ZOOMCAR</h1>
          <p>
            Self Drive Car Rental in Chennai
          </p>
          <Button 
            className='jumbotron-button'
            
            style={{height: '60px', width : '450px',backgroundColor:'white',color:'black',padding:'10px',textAlign:'left',borderBlockColor:'white'}}
          >
            Start your wonderful journey
          </Button>
      </Jumbotron>

      <div className='advantage'>

        <h4>THE ZOOMCAR ADVANTAGE</h4>
        <p>"We simplified car rentals, so you can focus on what's important to you."</p>

        <CardDeck 
          style={{
            marginLeft:'100px',
            width: '1000px',
            marginRight:'200px',
           
          }}>
          <Card style={{
            marginLeft: '4px',
            marginRight: '4px'}}>
            <Card.Img  src="https://cdn.icon-icons.com/icons2/2578/PNG/512/fuel_icon_153943.png" style={{height:'50px',width:'50px',alignSelf:'center',marginTop:'10px',color:'#b6d5a4'}} />
            <Card.Body>
              <Card.Title style={{color:'#b6d5a4', marginTop:'0px',paddingTop:'0px' }}>Fuel Cost Included</Card.Title>
              <Card.Text className='advantageCard'>
                Don't worry about mileage! All fuel costs are included. If you refill fuel, we'll pay you back!
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{
            marginLeft: '4px',
            marginRight: '4px'}}
            >
            <Card.Img  src="data:image/png;base64,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" style={{height:'50px',width:'50px',alignSelf:'center',marginTop:'10px',color:'#b6d5a4'}} />
            <Card.Body>
              <Card.Title style={{color:'#b6d5a4' }}>No Hidden Charges</Card.Title>
              <Card.Text className='advantageCard'>
                Our prices include taxes and insurance.What you see is what you really pay!
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{
            marginLeft: '4px',
            marginRight: '4px'}}
            >
              <Card.Img  src="https://static.thenounproject.com/png/1005770-200.png" style={{height:'50px',width:'50px',alignSelf:'center',marginTop:'10px',color:'#b6d5a4'}} />

            <Card.Body>
              <Card.Title style={{color:'#b6d5a4' }}>Flexi Pricing Packages</Card.Title>
              <Card.Text className='advantageCard'>
                One size never fits all! Choose a balance of time and kilometers that works best for you.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>

        <CardDeck 
          style={{
            marginTop: '8px',
            marginLeft:'100px',
            width: '1000px',
            marginRight:'300px',
            }}>
          <Card style={{
            marginLeft: '4px',
            marginRight: '4px'
          }}>
            <Card.Img  src="https://cdn3.iconfinder.com/data/icons/unicons-vector-icons-pack/32/location-512.png" style={{height:'50px',width:'50px',alignSelf:'center',marginTop:'10px',color:'#b6d5a4'}} />
            <Card.Body>
              <Card.Title style={{color:'#b6d5a4' }}>Go Anywhere</Card.Title>
              <Card.Text className='advantageCard'>
               Our cars have all-India permits.Just remember to pay state tolls and entry taxes.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{
            marginLeft: '4px',
            marginRight: '4px'
          }}>
            <Card.Img  src="https://cdn2.iconfinder.com/data/icons/road-and-navigation/180/02-512.png" style={{height:'50px',width:'50px',alignSelf:'center',marginTop:'10px',color:'#b6d5a4'}} />
            <Card.Body>
              <Card.Title style={{color:'#b6d5a4' }}>24x7 Roadside Assistance</Card.Title>
              <Card.Text className='advantageCard'>
                We have round-the-clock, pan India partners. Help is never far away from you.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{
            marginLeft: '4px',
            marginRight: '4px'
          }}>
            <Card.Img  src="data:image/png;base64,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" style={{height:'50px',width:'50px',alignSelf:'center',marginTop:'10px',color:'#b6d5a4'}} />
            <Card.Body>
              <Card.Title style={{color:'#b6d5a4' }}>Damage Insurance</Card.Title>
              <Card.Text className='advantageCard'>
                All your bookings include damage insurance! Drive safe, but don’t worry!
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>

      </div>
      <div className='superMileClub'>
        <div>
          <img src="https://www.zoomcar.com/assets/component-images/promo_supermiler.7a597371bd16587f1d46a66dbff6b72e.svg"  style={{ height:'70px',width:'60px',alignSelf:'center',marginTop:'25px'}}/>
        </div>  
        <div>
          <h4>  SUPERMILER CLUB </h4>
          <h6>Premium club which rewards you everytime you drive with us</h6>
        </div>
        <div  className='supermilerpriveledge'>
          ------  SUPERMILER PRIVILEGES  -------         
        </div>  

        <div className='earnCredits'>
          <div>
            <img src="https://www.pinclipart.com/picdir/big/37-374203_earn-png-pic-points-icon-png-clipart.png"  style={{ height:'50px',width:'50px',alignSelf:'center',marginTop:'25px'}}/>
          </div> 
          <div>
            EARN Z POINTS
          </div>        
        </div>  
        
      </div>

      <div className='earnZPoints'>
        <div className='earnCredits'>

        </div>
        <div style={{marginTop:'10px'}}>
          Earn Z-Points for every<br/> booking and redeem for<br/> additional discount
        </div>
        <Button variant="outline-secondary" 
        style={{ width : '200px',marginTop:'20px'}}
        >LEARN MORE</Button>

      </div>
      <Carousel>
        <Carousel.Item>
          
          <img
            className="d-block w-100"
            src="https://wallpaperaccess.com/full/909781.jpg"
            alt="First slide"
          />
          
          <Carousel.Caption>
            <div style={{marginBottom:'50px'}}>
              <h2 >A CAR FOR EVERY NEED</h2>
              <h3>We have a range of cars, so something will perfectly fit your trip</h3>
            </div>
            <div style={{marginBottom:'150px'}}>
              <div>
                <img src="https://www.cnet.com/a/img/L-w9-hxtnuQqc362mIxBK87JQX0=/1200x675/2018/04/25/2ab97147-d6da-405b-a6bd-2a125b701ba4/001-2018-ford-ecosport-review.jpg"  style={{ height:'350x',width:'350px',alignSelf:'center',marginTop:'25px'}}/>
              </div>  
              <h3>SUV</h3>
              <h5>Price Starting at ₹ 110/hr (Fuel Free)</h5>
              <p>CARS AVAILABLE: FORD ECOSPORT, MAHINDRA SCORPIO, MAHINDRA XUV, HYUNDAI CRETA</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wallpaperaccess.com/full/909781.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <div style={{marginBottom:'50px'}}>
              <h2 >A CAR FOR EVERY NEED</h2>
              <h3>We have a range of cars, so something will perfectly fit your trip</h3>
            </div>
            <div style={{marginBottom:'150px'}}>
              <div>
                <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Mercedes-Benz/GLA-2020/7269/1576154642891/front-left-side-47.jpg"  style={{ height:'350x',width:'350px',alignSelf:'center',marginTop:'25px'}}/>
              </div>  
              <h3>LUXURY</h3>
              <h5>Price Starting at ₹ 265/hr (Fuel Free)</h5>
              <p>CARS AVAILABLE: MERCEDES GLA</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wallpaperaccess.com/full/909781.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <div style={{marginBottom:'50px'}}>
              <h2 >A CAR FOR EVERY NEED</h2>
              <h3>We have a range of cars, so something will perfectly fit your trip</h3>
            </div>
            <div style={{marginBottom:'150px'}}>
              <div>
                <img src="https://imgd.aeplcdn.com/0x0/n/cw/ec/35463/figo-exterior-right-front-three-quarter-151687.jpeg"  style={{ height:'350x',width:'350px',alignSelf:'center',marginTop:'25px'}}/>
              </div>  
              <h3>HATCHBACK</h3>
              <h5>Price Starting at ₹ 75/hr (Fuel Free)</h5>
              <p>CARS AVAILABLE: FORD FIGO, MARUTI SWIFT, MARUTI RITZ, HYUNDAI I20 ELITE, JAZZ SMT 1.5 IDTEC, GRAND I10</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className='working'>

        <h4>HOW ZOOMCAR WORKS</h4>
        <p>Drive yourself to an adventure and back in 5 simple steps</p>

        <CardDeck 
          style={{
            marginLeft:'20px',            
            marginRight:'20px',
            marginTop:'40px'
            
           
          }}>
          <Card style={{
            marginLeft: '8px',
            marginRight: '8px'}}>
            <Card.Img  src="https://static.thenounproject.com/png/759397-200.png" style={{height:'50px',width:'50px',alignSelf:'center',marginTop:'10px',color:'#b6d5a4'}} />
            <Card.Body>
              <h6 >BOOK</h6>
              <Card.Text className='advantageCard'>
                Search for and book a car on our site!
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{
            marginLeft: '8px',
            marginRight: '8px'}}
            >
            <Card.Img  src="https://static.thenounproject.com/png/3117331-200.png" style={{height:'50px',width:'50px',alignSelf:'center',marginTop:'10px',color:'#b6d5a4'}} />
            <Card.Body>
              <h6>UPLOAD LICENSE</h6>
              <Card.Text className='advantageCard'>
               Upload your driver’s license, and pay a small security deposit.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{
            marginLeft: '8px',
            marginRight: '8px'}}
            >
              <Card.Img  src="https://cdn2.iconfinder.com/data/icons/business-and-management-16/24/unlock-512.png" style={{height:'50px',width:'50px',alignSelf:'center',marginTop:'10px',color:'#b6d5a4'}} />

            <Card.Body>
              <h6>UNLOCK</h6>
              <Card.Text className='advantageCard'>
                We SMS your car details 20 minutes before pickup.Unlock it via the Zoomcar app.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{
            marginLeft: '8px',
            marginRight: '8px'}}
            >
              <Card.Img  src="https://static.thenounproject.com/png/1374427-200.png" style={{height:'50px',width:'50px',alignSelf:'center',marginTop:'10px',color:'#b6d5a4'}} />

            <Card.Body>
              <h6>ZOOM</h6>
              <Card.Text className='advantageCard'>
                Fill the start checklist in the Zoomcar app. Grab the keys from the glove-box and drive.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{
            marginLeft: '8px',
            marginRight: '8px'}}
            >
              <Card.Img  src="https://static.thenounproject.com/png/811172-200.png" style={{height:'50px',width:'50px',alignSelf:'center',marginTop:'10px',color:'#b6d5a4'}} />

            <Card.Body>
              <h6>RETURN</h6>
              <Card.Text className='advantageCard'>
                Return the car to the same location and fill the end checklist to end your trip.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
        <Button variant="outline-secondary" 
          style={{ width : '200px',marginTop:'20px'}}
          >SIGN UP</Button>
        
      </div>

      <div className='onTheGo'>

        <div style={{
          textAlign: 'left',
          paddingTop:'220px',
          paddingLeft:'220px'
        }}>
          <h4>  ZOOM ON THE GO! </h4> 
          <h6>Make a booking, unlock your car, and end your<br/> reservation all from our app</h6>
        </div>
      </div>

      <div className="d-flex flex-row">

        <div className="flexContents"style={{paddingLeft:'100px'}}>
          <Image style={{height:'100px',width:'100px',alignSelf:'center',marginTop:'10px',}} src="https://static.thenounproject.com/png/1914429-200.png"  />
          <h2>3,000+</h2>
          <div>
            Rides Daily
          </div>          
        </div>
        <div className="flexContents">
          <Image style={{height:'100px',width:'100px',alignSelf:'center',marginTop:'10px',}} src="https://static.thenounproject.com/png/1238596-200.png"  />
          <h2>48,00,000+</h2>
          <div>
            Happy users
          </div>

        </div>
        <div className="flexContents">
          <Image style={{height:'100px',width:'100px',alignSelf:'center',marginTop:'10px',}} src="https://static.thenounproject.com/png/1580197-200.png"  />          
          <h2>36,00,00,000+</h2>
          <div>
            Km Travelled
            <div className='flexContetsText'>
              (enough for 470 round trips to the moon!)
            </div>
          </div>
          
        </div>
        <div className="flexContents">
          <Image style={{height:'100px',width:'100px',alignSelf:'center',marginTop:'10px',}} src="https://static.thenounproject.com/png/2910108-200.png"  />
          <h2>6,500+</h2>
          <div>
            Number of Zoomcars
          </div>
        </div>
        <div className="flexContents">
          <Image style={{height:'100px',width:'100px',alignSelf:'center',marginTop:'10px',}} src="https://static.thenounproject.com/png/3906690-200.png"  />
          <h2>Rating 4.7/5.0</h2>
          <div>
            Rated by 3,00,000+ customers
            <div className='flexContetsText'>
            over 10,00,000+ bookings
          </div>
          </div>
          
        </div>
        
      </div>

      <Carousel>
        <Carousel.Item>
          
          <img
            className="d-block w-100"
            src="https://thevideoink.com/wp-content/uploads/2021/01/Collage.jpg"
            alt="First slide"
          />
          
          <Carousel.Caption>
            <div style={{marginBottom:'50px'}}>
              <img src="data:image/png;base64,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"  
              style={{ height:'100x',width:'100px',alignSelf:'center',marginTop:'25px',color:'red'}}/>              
            </div>
            <div style={{marginBottom:'150px',textAlign:'center'}}>
              <h4>I could not believe my ears on the benefits, especially the reimbursement of fuel. I would surely continue to use your professional services in months to come.</h4>
              <h2 style={{color:'#70ad4d'}}> -D. Samuel</h2>
              
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://thevideoink.com/wp-content/uploads/2021/01/Collage.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <div style={{marginBottom:'50px'}}>
              <img src="data:image/png;base64,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"  
              style={{ height:'100x',width:'100px',alignSelf:'center',marginTop:'25px',color:'red'}}/>              
            </div>
            <div style={{marginBottom:'150px',textAlign:'center'}}>
              <h4>The experience with Zoomcar has been excellent. Your process is well thought out and the service definitely fills a void. Maybe you could start a school which teaches "real customer service"!</h4>
              <h2 style={{color:'#70ad4d'}}> - Sunil Rastogi</h2>
              
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://thevideoink.com/wp-content/uploads/2021/01/Collage.jpg"
            alt="Third slide"
            
          />

          <Carousel.Caption>
            <div style={{marginBottom:'50px'}}>
              <img src="data:image/png;base64,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"  
              style={{ height:'100x',width:'100px',alignSelf:'center',marginTop:'25px',color:'red'}}/>              
            </div>
            <div style={{marginBottom:'150px',textAlign:'center'}}>
              <h4>Appreciate the totally new welcome Concept. As an prospective customer, I feel this is going to really set an example in car rentals scenery. Wishing you the very Best and come out in flying colors!!</h4>
              <h2 style={{color:'#70ad4d'}}> - Yekula Santosh</h2>
              
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


      
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


      <div className='belowFooter'>
        <div className='belowfooterEach'>
          <h4>SELF DRIVE CARS IN CHENNAI CITY</h4>
          <p className='belowFooterPara'>Nicknamed as the Detroit of India, Chennai is the manufacturing hub of the automobile industry and is being developed as a smart city. In addition to the automobile industry, Chennai is also the home to other industries including power generation, banking, and software services. Rated by Forbes as being in the Top-10 fastest growing cities in the world, Chennai has seen a gradual increase in its working population and a corresponding increase in the number of Chennai car rental services and self drive cars, which are more affordable than self-owned or chauffeur-driven vehicles.</p>
        </div>
        <div className='belowfooterEach'>
          <h4>CAR RENTAL IN CHENNAI</h4>
          <p className='belowFooterPara'>Depending on the occasion and the number of passengers, Zoomcar allows you to hire a self-drive car of your choice, and at an affordable rate. Sign up on our website or mobile app, and decide on the rental duration, pickup location, and car type. You can use Zoomcar to select the right car for the right purpose in your city. For instance, you can choose a light car that can zip you through city traffic to your office location, or a comfortable car if you are planning a trip to Marina beach or a city tour.<br/>
          Alternatively, you can hire a powerful SUV for driving from Chennai to Pondicherry or Chennai to Tirupati with your family or friends. For frequent flyers, a Chennai airport taxi is the best option as it does away with the hassle of looking for buses or convincing taxi drivers to drive to a particular destination. Luxury self drive cars are also available for rent through Zoomcar. Depending on the occasion, you can hire one to attend a lavish wedding or for your anniversary celebration.Zoomcar offers affordable services and provides the car without any of the usual hassles of filling fuel, hidden cost, and breakdown problems.</p>
        </div>
        <div className='belowfooterEach'>
          <h4>CAR RENTAL IN CHENNAI</h4>
          <p className='belowFooterPara'>Zoomcar vehicles have all-India permits and can be picked up at multiple parking sites across your city. Zoomcar also provides the flexibility of multiple packages, including the Zoom Lite, when you need the self drive car for a shorter distance and longer duration, and the Zoom XL for using your car for a longer distance over a shorter period.</p>
        </div>
        <div className='belowfooterEach'>
          <h4>CAR RENTAL IN CHENNAI</h4>
          <p className='belowFooterPara'>No more worries about petrol mileage, fuel costs, insurance, and car breakdowns! Zoomcar has enabled driving convenience for travellers around the country and is fast expanding its reach to cities including Ahmedabad, Bangalore, Chandigarh, Chennai, Coimbatore, Delhi-NCR, Hyderabad, Jaipur, Kochi, Kolkata, Ludhiana, Mangalore, Mumbai, Mysore, Pune, Siliguri, Vizag, Nagpur, Udaipur, Vijayawada, Surat, Lucknow and Guwahati.
Self drive cars from Zoomcar have given customers more control, privacy, and freedom. Book a self drive car in any city you visit with the Zoomcar app on your phone and feel at home wherever you go.</p>
        </div>
      </div>
      
    </div>
  );
};

export default App;
