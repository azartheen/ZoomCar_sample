
import '.././App.css';
import { Button,Navbar,Nav,Jumbotron,Card, CardDeck, Image,Carousel} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

function amigo() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
             <Navbar.Brand href="#home">AMIGO</Navbar.Brand>          
          </Nav>
          <Nav >
            <Button style={{width:'150px'}} variant="success">Start Earning</Button>
            <Nav.Link href="#deets" style={{color:'white',marginLeft:'10px'}}>FAQ</Nav.Link>
            <Nav.Link href="#deets" style={{color:'white',marginLeft:'10px'}}>Refer & Earn</Nav.Link>
            <Nav.Link href="#deets" style={{color:'white',marginLeft:'10px'}}>SignUp/Log In</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    <Jumbotron fluid className='jumbotron-amigo'>          
          <div style={{width:'100%'}}>
              <div style={{width:'60%',float:'left',padding:'60px'}}>
                  <Card style={{ width: '450px' ,marginLeft:'50px'}}>
                    <Card.Body style={{color:'black',textAlign:'left'}}>
                        <Card.Title style={{fontSize:'30px'}}>Share you car and earn minimum Rs. 8500 in 7 days *</Card.Title>
                        <Card.Text style={{fontSize:'16px',fontWeight:'200'}}>
                        Put your car to good use, share with community and friends when you are not using it and earn money via Amigo by Zoomcar
                        </Card.Text>
                        <Button style={{width:'150px',padding:'10px'}} variant="success">START EARNING</Button>
                    </Card.Body>
                    </Card>
              </div>
              <div style={{width:'40%',float:'left',color:'white',textAlign:'center',padding:"50px"}}>
                <p> INTRODUCING</p>
                <hr width='450px'class='hr-amigo'/>
                    <h6>A UNIQUE COMMUNITY VEHICLE POOLING PROGRAM</h6>
                <hr width='450px' class='hr-amigo' />
                <h1 style={{color:'black'}}>SHARE YOUR CAR WHILE NOT IN USE</h1>

              </div>
              

          </div>
      </Jumbotron>
        <div style={{width:'100%',backgroundColor:'white',float:'none'}}>
              <div style={{width:'50%',float:'left',padding:'60px',paddingLeft:'140px',paddingRight:'40px'}}>
                  <h3 style={{fontWeight:'700'}}>Is Your card sitting idle at home? Well, now you can earn minimum Rs.8,500 in 7 Days from it! </h3>
                  <p style={{paddingTop:'10px'}}>Amigo by Zoomcar will help you list your car on Zoomcar and share it with your community and friends:</p>
                  <ul>
                    <li> Earn a minimum of<span style={{fontWeight:'bold'}}> Rs.8,500 in 7 Days*</span> </li>
                    <li> Get an additional signup bonus of <span style={{fontWeight:'bold'}}> Rs. 10,000</span> </li>
                    <li> Reduce cost of ownership </li>
                    <li>Recover monthly car expenses</li>
                    <li> Refer and Earn<span style={{fontWeight:'bold'}}> Rs.15,000 </span> </li>
                    <li> Reduce your caron footprint and save the environment.</li>
                  </ul>
              </div>
              <div style={{width:'50%',float:'left', padding:'60px',paddingLeft:'100px',height:'500px'}}>
                <iframe width="350" height="200
                " src="https://www.youtube.com/embed/AMNNwAV74nk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
          </div>
          <div style={{backgroundColor:'white',padding:'60px',paddingLeft:'140px',float:'none'}}>
            <h3 style={{fontWeight:'700'}}>How it works</h3>
            <CardDeck style={{paddingRight:'140px'}}>
              <Card style={{boxShadow: '0 10px 20px 0 rgba(0,0,0,0.2)'}}>                
                <Card.Body>
                  <Card.Title style={{fontWeight:'700',color:'grey'}}>01</Card.Title>
                  <Card.Text style={{fontSize:'12px',fontWeight:'500'}}>
                    Sign up and fill a form.
                  </Card.Text>
                </Card.Body>                
              </Card>
              <Card style={{boxShadow: '0 10px 20px 0 rgba(0,0,0,0.2)'}}>                
                <Card.Body>
                  <Card.Title style={{fontWeight:'700',color:'grey'}}>02</Card.Title>
                  <Card.Text style={{fontSize:'12px',fontWeight:'500'}}>
                    Agree to Terms and Conditions.
                  </Card.Text>
                </Card.Body>                
              </Card>
              <Card style={{boxShadow: '0 10px 20px 0 rgba(0,0,0,0.2)'}}>                
                <Card.Body>
                  <Card.Title style={{fontWeight:'700',color:'grey'}}>03</Card.Title>
                  <Card.Text style={{fontSize:'12px',fontWeight:'500'}}>
                    Zoomcar will onboard the car and get the Vehicle health monitoring and Keyless entry devices insatlled.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{boxShadow: '0 10px 20px 0 rgba(0,0,0,0.2)'}}>                
                <Card.Body>
                  <Card.Title style={{fontWeight:'700',color:'grey'}}>04</Card.Title>
                  <Card.Text style={{fontSize:'12px',fontWeight:'500'}}>
                    Your car is now ready to be shared.Use Amigo app to share your car
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>

          </div>

          <div style={{backgroundColor:'#f5f5f5',padding:'60px',paddingLeft:'140px'}}>
            <div style={{width:'50%',paddingRight:'100px'}}>
             <h3 style={{fontWeight:'700'}}>Share your car seamlessly with your community and start earning!</h3>
             <p> The Amigo Advantage:</p>
             <ul>
               <li style={{fontWeight:'300'}}><span style={{fontWeight:'600'}}> Damage cover: </span>100% damage cover</li>
               <li style={{fontWeight:'300'}}><span style={{fontWeight:'600'}}>Flexibility:</span> Share your car as per your convienience</li>
               <li style={{fontWeight:'300'}}><span style={{fontWeight:'600'}}>Assures safety via Vehicle health monitoring devices: </span> Your car health is monitored to ensure your car is always safe and in great condition.</li>
               <li style={{fontWeight:'300'}}><span style={{fontWeight:'600'}}>Teach enabled experience: </span>Our keyless technology enables user to open the car through app thus providing you a seamless experience</li>
               <li style={{fontWeight:'300'}}><span style={{fontWeight:'600'}}>Real time updates: </span>Get booking and earning updates on your app</li>
               <li style={{fontWeight:'300'}}><span style={{fontWeight:'600'}}> Cleaned & sanitized car</span>Your car is sanitied after every trip</li>
               <li style={{fontWeight:'300'}}><span style={{fontWeight:'600bold'}}> Dynamic pricing: </span>Earn extra during peak periods.</li>
             </ul>
            </div>
            <div>

            </div>
          </div>
          <div style={{width:'100%',backgroundColor:'white',padding:'60px',paddingLeft:'140px',paddingBottom:'100px'}}>
            <div style={{width:'40%',float:'left'}}>
              <h3 style={{fontWeight:'700'}}>We're here to help</h3>
            </div>
            <div style={{width:'60%',float:'left',paddingRight:'100px',paddingLeft:'30px'}}>
              <p>Still confused? You can also get your questions answered by using our help section.</p>
              <Button variant="success">Get Help</Button>
            </div>
          </div>
          <div style={{backgroundColor:'black',padding:'60px',paddingLeft:'140px',color:'white',marginTop:'80px'}}>
            <h5>Why Buy? – Car Subscription is Here</h5>
            <p>Owning a car is a huge commitment, one that can take up all the effort and resources. With modern lifestyles
              saddling us with so many other responsibilities, it may be time to rethink the whole process.</p>
            <h5>Buying a Car – A Financial Strain </h5>
            <p>The down-payment of a car is the first part of the obstacle. You would be expected to shell out a rather big
              sum of money, the kind that you would have to stretch to accumulate. Other payments like road taxes and
              insurance also add to the list of expenditures. It can result in compromises in your lifestyle. Even worse, in
              times of emergency you might not have access to funds because you have spent it all on the down payment. That
              same amount could have got you other things. You could have even invested it somewhere else.</p>
            <h5>Long-term Liabilities</h5>
            <p>Then of course, the monthly EMIs add a long-term liability to your personal finances. This goes on for years
              and can be a stumbling block for your other plans. While you are paying EMIs on the premium cost of your car,
              the vehicle itself is ageing and has cost more money in its upkeep. You are not only paying big monthly sums for
              the car, but as time progresses, you will be juggling these with costs on repairs and maintenance. Unless you
              are the car loan company, it does not sound like a pleasant deal.</p>
            <h5>Car Subscription</h5>
            <p>This is the reason why car subscription is becoming a smart and viable option for a whole new generation of
              commuters. Zoomcar's latest service – the
              Zoomcar Subscription, a Car program is addressing the needs of travellers who
              yearn the privileges of car ownership. Why buy a car and be saddled with car loans and car EMIs when you can
              just pay for a vehicle for using it.</p>
            <h5>Zoomcar Subscription – Difference from Car Leasing</h5>
            <p>Traditional car leasing companies do not offer the same perks as Zoomcar Subscription.
              Zoomcar is tech-driven so there is not much human correspondence required,
              saving you a lot of time. You get to choose from a large collection of cars – hatchbacks, sedans, SUVS. The
              subscription can be facilitated with ease over a dedicated app and you can book a car from
              1 month
              to 24 months. This is especially useful for people who move a lot and
              are not keen on having too many permanent assets.</p>
          </div>
    
    </div>
  );
}

export default amigo;
