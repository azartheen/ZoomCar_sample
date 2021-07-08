
import '.././App.css';

import { Button,Navbar,Nav,Jumbotron,Card, CardDeck, Image,Carousel} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

function subscription() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
             <Navbar.Brand href="#home">ZOOMCAR SUBSCRIPTION</Navbar.Brand>          
          </Nav>
          <Nav >
            
            <Nav.Link href="#deets" style={{color:'white',marginLeft:'10px'}}>FAQ</Nav.Link>
            <Nav.Link href="#deets" style={{color:'white',marginLeft:'10px'}}>Refer & Earn</Nav.Link>
            <Nav.Link href="#deets" style={{color:'white',marginLeft:'10px'}}>SignUp/Log In</Nav.Link>
            <Button style={{width:'150px'}} variant="success">Start Earning</Button>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    <Jumbotron fluid className='jumbotron-subscription'>          
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

          </div>
      </Jumbotron>  
      <div style={{width:'100%',backgroundColor:'#f5f5f5',float:'none'}}>
              <div style={{width:'50%',float:'left',padding:'60px',paddingLeft:'140px',paddingRight:'40px'}}>
                  <h2 style={{fontWeight:'700'}}>Why Subscribe to a Personal Car? </h2>
                  <p style={{paddingTop:'10px',fontSize:'20px',fontWeight:'400',color:'grey'}}> 2020 shall always be remembered for the worldwide pandemic that changed history and our lifestyle. However, with our indomitable human spirit, we learned to survive and thrive.From managing the balance between work & home to taking care of our loves ones we have become self-reliant in every possible way.</p>
                  <p style={{paddingTop:'10px',fontSize:'20px',fontWeight:'400',color:'grey'}}>We at Zoomcar, understnad your need of the hour, thus keen to support you to adapt to changing trends of travel.<br/>With Zoomcar Subscription, we are aimimg to make personal mobility both affordable and accesible. For as low as 18,499/- per month, you can Zoom anywhere you want and ensure the safety of your loved ones.<br/>
                  <span style={{fontWeight:'700'}}>Let's ENSURE before we INSURE</span></p>
              </div>
              <div style={{width:'50%',float:'left', padding:'60px',paddingLeft:'100px',height:'800px'}}>
                <iframe width="460" height="250" src="https://www.youtube.com/embed/U5fxK9kNUjY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
          </div>
          <div style={{backgroundColor:'#f5f5f5',padding:'60px',paddingLeft:'140px',float:'none',background:' linear-gradient(to bottom, #f5f5f5 90%, white 10%)'}}>
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
          <div style={{width:'100%',backgroundColor:'#f5f5f5',float:'none'}}>
              <div style={{width:'50%',float:'left',padding:'60px',paddingLeft:'140px',paddingRight:'30px'}}>
                  <p style={{fontWeight:'600',color:'grey'}}>YOUR OBVIOUS QUESTION</p>
                  <h2 style={{fontWeight:'700'}}>What is Shared Subscription? </h2>
                  <p style={{paddingTop:'10px',fontSize:'20px',fontWeight:'400',color:'grey'}}> We know you enjoy driving car, now you can even SAVE MONEY by using your car. You may share the car with other Zoomcar users when your car is not being used and save upto 70 % of the monthly subscription fee. Sharing is made easy with Zoomcar Subscription APP, just follow these steps:</p>
                  <ul style={{paddingTop:'10px',fontSize:'20px',fontWeight:'200',color:'black'}}>
                    <li>List car: List the car on Zoomcar platform through Subscription app</li>
                    <li>Get booking: We will inform you as soon as your car gets a booking.</li>
                    <li>Car goes and comes back: User, who booked your car, will take your car for a pre agreed period of time and return the car at the designated place</li>
                    <li>Save Money: Saving gets adjusted in monthly subscripetion fee</li>
                 </ul>
              </div>
              <div style={{width:'50%',float:'left', padding:'60px',paddingLeft:'100px',height:'800px'}}>
                <iframe width="460" height="250" src="https://www.youtube.com/embed/U5fxK9kNUjY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
          </div>
          <div style={{backgroundColor:'#f5f5f5',width:'100%',color:"#f5f5f5"}}>           
          .
          </div>
          <div className="d-flex flex-row" style={{backgroundColor:'#f5f5f5', paddingBottom:'100px' }}>
            <div className="flexContents"style={{paddingLeft:'100px',textAlign:'left'}}>
              <Image style={{height:'100px',width:'100px',alignSelf:'left',marginTop:'10px',}} src="https://static.thenounproject.com/png/1355976-200.png"  />
              <h2>Pick Dates</h2>
              <div style={{textAlign:'left',fontSize:'20px'}}>
                Choose the dates you want to share your car using our Zoomcar Subsciption app.
              </div>          
            </div>
            <div className="flexContents"style={{paddingLeft:'50px',textAlign:'left'}}>
              <Image style={{height:'100px',width:'100px',alignSelf:'Left',marginTop:'10px',}} src="https://static.thenounproject.com/png/1498505-200.png"  />
              <h2>Bookings</h2>
              <div style={{textAlign:'left',fontSize:'20px'}}>
                We will allocate bookings to your car according to the availability you have choosen
              </div>
            </div>
            <div className="flexContents"style={{paddingLeft:'50px',textAlign:'left',paddingRight:'100px'}}>
              <Image style={{height:'100px',width:'100px',alignSelf:'left',marginTop:'10px',}} src="https://static.thenounproject.com/png/2298731-200.png"  />          
              <h2 >Earn</h2>
              <div style={{textAlign:'left',fontSize:'20px'}}>           
                Earning will be credited in the first week of every month or adjusted against your monthly subsciption.
              </div>          
            </div>        
          </div>
          <div style={{textAlign:'center',paddingTop:'50px'}}>
            <h1 style={{textAlign:'center',}}>Subscribe Vs Buy</h1>
            <p style={{paddingTop:'20px',fontSize:'20px'}}> If you have <select value="Toyota Glanza (Petrol)">
                      <option value="Mahindra Marazzo">Mahindra Marazzo</option>
                      <option value="Toyata Yaris">Toyata Yaris</option>
                      <option value="Kwid">Kwid</option>
                      <option value="Toyota Glanza (Petrol)">Toyota Glanza (Petrol)</option>
                    </select> and you share for <select value="20 Days">
                              <option value="1 Days">1 Days</option>
                              <option value="2 Days">2 Days</option>
                              <option value="3 Days">3 Days</option>
                              <option value="4 Days">4 Days</option>
                              <option value="5 Days">5 Days</option>
                              <option value="6 Days">6 Days</option>
                              <option value="7 Days">7 Days</option>
                              <option value="8 Days">8 Days</option>
                            </select>                    
                    </p>
          </div>
          <div className="d-flex flex-row" style={{padding:'60px',paddingLeft:'240px'}}>
                <div className="flexContents" style={{}}>
                  <div style={{textAlign:"left",paddingLeft:'70px',paddingRight:'70px'}}>
                    <h4 style={{color:'white',paddingBottom:'20px',paddingTop:'10px'}}>.</h4>
                    <p style={{paddingBottom:'20px',fontWeight:'400'}}> Downpayment</p>
                    <p style={{paddingBottom:'20px',fontWeight:'400'}}>EMI</p>
                    <p style={{paddingBottom:'20px',fontWeight:'400'}}>Insurance</p>
                    <p style={{paddingBottom:'20px',fontWeight:'400'}}>Maintenance</p>
                    <p style={{paddingBottom:'20px',fontWeight:'400'}}>Rental Earnings</p>
                    <p style={{paddingBottom:'20px',fontWeight:'700'}}>Monthly Payment</p>
                  </div>
                </div>
                <div className="flexContents">
                  <div style={{textAlign:"left",paddingLeft:'70px',paddingRight:'70px',backgroundColor:'#f5f5f5'}}>
                    <h4 style={{paddingBottom:'20px',paddingTop:'10px'}}>Subscribe</h4>
                    <p style={{paddingBottom:'20px',fontWeight:'400',color:'green'}}>Rs. 0</p>
                    <p style={{paddingBottom:'20px',fontWeight:'400',color:'green'}}>Rs. 26,499</p>
                    <p style={{paddingBottom:'20px',fontWeight:'400',color:'green'}}>Rs. 0</p>
                    <p style={{paddingBottom:'20px',fontWeight:'400',color:'green'}}>Rs. 0</p>
                    <p style={{paddingBottom:'20px',fontWeight:'400',color:'green'}}>Rs. 12,500</p>
                    <p style={{paddingBottom:'20px',fontWeight:'700',color:'green'}}>Rs. 13,499</p>
                  </div>
                </div>
                <div className="flexContents">
                  <div style={{textAlign:"left",paddingLeft:'70px',paddingRight:'70px'}}>
                    <h4 style={{paddingBottom:'20px',padding:'10px'}}>Buy</h4>
                    <p style={{paddingBottom:'20px',fontWeight:'400'}}>Rs. 1,37325</p>
                    <p style={{paddingBottom:'20px',fontWeight:'400'}}>Rs. 21,687</p>
                    <p style={{paddingBottom:'20px',fontWeight:'400'}}>Rs. 2,169</p>
                    <p style={{paddingBottom:'20px',fontWeight:'400'}}>Rs. 1,735</p>
                    <p style={{paddingBottom:'20px',fontWeight:'400'}}>Rs. 0</p>
                    <p style={{paddingBottom:'20px',fontWeight:'700'}}>Rs. 25,591</p>
                  </div>                               
                </div>                
              </div>
              <div >
                  <p style={{paddingBottom:'20px',fontWeight:'200',fontSize:'18px',paddingLeft:'340px'}}>* All values are estimated based on our past data</p>
                  
                </div>  
          <div className="d-flex flex-row" style={{padding:'60px',paddingLeft:'140px'}}>
                <div className="flexContents" style={{}}>
                  <div style={{textAlign:"left",}}>
                    <Image style={{height:'200px',width:'250px',textAlign:'left',}} src="https://static.toyotabharat.com/images/showroom/glanza/color/cafe-white.jpg"  />
                  </div>
                </div>
                <div className="flexContents">
                  <div style={{textAlign:"left",paddingLeft:'20px',paddingTop:'30px'}}>                    
                    <h3> Toyota GLANZA<br/> (Petrol)</h3>

                    <p style={{color:"green",fontWeight:"500",fontSize:'20px',paddingTop:'40px'}}>Rs. 13,999/month</p>
                    <Button style={{width:'200px',height:'55px'}} variant="success">SUBSCRIBE NOW</Button>                    
                  </div>
                </div>
                <div className="flexContents">
                  <div style={{paddingTop:'30px'}}>
                    <Card style={{
                        marginLeft: '8px',
                        marginRight: '8px',backgroundColor:'#f5f5f5',padding:'30px'}}>
                        <Card.Img  src="https://static.thenounproject.com/png/759397-200.png" style={{height:'50px',width:'50px',alignSelf:'center',marginTop:'10px',color:'#b6d5a4'}} />
                        <Card.Body>
                          <h6 style={{textAlign:"center",paddingTop:'25px'}} >No parking space?<br/>We got it solved!</h6>
                          <Card.Text  style={{color:'green',textAlign:'center',fontWeight:'500'}}>
                            Know How 
                          </Card.Text>
                        </Card.Body>
                      </Card>
                  </div>                 
                </div>   
                <div className="flexContents">
                  <div style={{paddingTop:'30px'}}>
                    <Card style={{
                        marginLeft: '8px',
                        marginRight: '8px',backgroundColor:'#f5f5f5',padding:'30px'}}>
                        <Card.Img  src="https://static.thenounproject.com/png/1667628-200.png" style={{height:'50px',width:'50px',alignSelf:'center',marginTop:'10px',color:'#b6d5a4'}} />
                        <Card.Body>
                          <h6 style={{textAlign:"center",paddingTop:'25px'}} >No Handing over <br/>the Keys!</h6>
                          <Card.Text  style={{color:'green',textAlign:'center',fontWeight:'500'}}>
                            Know How 
                          </Card.Text>
                        </Card.Body>
                      </Card>
                  </div>                 
                </div>   
              </div>

          <div style={{padding:'60px',paddingLeft:'140px'}}>
            <h1>Growing Across India</h1>
            <p>Helping people to achieve their dream of owning a car</p>
              <div className="d-flex flex-row">

                <div className="flexContents">
                  <div>
                    <Image style={{float:'left',height:'100px',width:'100px',alignSelf:'center',marginTop:'10px',}} src="https://static.thenounproject.com/png/1867426-200.png"  />
                    <p style={{float:'left',marginLeft:'30px',marginTop:'20px',textAlign:'left'}}><span style={{fontWeight:'900',fontSize:'25px'}}>9,000+</span><br/>Happy Customers</p>
                  </div>
                </div>
                <div className="flexContents">
                  <div>
                    <Image style={{float:'left',height:'100px',width:'100px',alignSelf:'center',marginTop:'10px',marginLeft:'40px'}} src="https://static.thenounproject.com/png/1498505-200.png"  />
                    <p style={{float:'left',marginLeft:'30px',marginTop:'20px',textAlign:'left'}}><span style={{fontWeight:'900',fontSize:'25px'}}>2,80,00,000</span><br/>KM Travelled</p>
                  </div>
                </div>
                <div className="flexContents">
                  <div>
                    <Image style={{float:'left',height:'100px',width:'100px',alignSelf:'center',marginTop:'10px',marginLeft:'40px'}} src="https://static.thenounproject.com/png/2225406-200.png"  />          
                    <p style={{float:'left',marginLeft:'30px',marginTop:'20px',textAlign:'left'}}><span style={{fontWeight:'900',fontSize:'25px'}}>Rs. 21,60,00,000</span><br/>Customer Savings</p>
                  </div>
                  
                  
                </div>   
              </div>
          </div>
          <div style={{width:'100%',backgroundColor:"#f5f5f5",height:'200px'}}>
            <div style={{width:'40%',padding:'60px',paddingLeft:'140px',float:'left'}}>
              <h3>We're here to help</h3>
            </div>
            <div style={{width:'60%',padding:'60px',float:'left',paddingRight:'140px'}}>
              <p style={{fontSize:'20px'}}>Still confused? You can also get your questions answered by using our help section.</p>
              <Button style={{width:'150px',height:'55px'}} variant="success">GET HELP</Button>
            </div>
          </div>
          <div style={{backgroundColor:'black',padding:'60px',color:'white',paddingLeft:'140px'}}>
            <div className="d-flex flex-row">
                <div className="flexContents" style={{color:'white'}}>
                  <div style={{textAlign:"left",}}>
                    <Image style={{height:'120px',width:'200px',textAlign:'left',}} src="https://play-lh.googleusercontent.com/5Pru1YtkQGyKeGUXqgXjTHIRuPYN2wYKQATW7DP9ShAYcCHTNSD2XgmqhN9UUe8bac8"  />
                    <p style={{marginLeft:'30px',textAlign:'left',}}>subbscribe a car of your choice for 1, 2, 3, 6, 12 <br/> or 24 months with no strings attached! Own an <br/>experience not a car!</p>
                  </div>
                </div>
                <div className="flexContents">
                  <div style={{textAlign:"left",paddingLeft:'20px',paddingTop:'30px'}}>                    
                    <h4> Zoomcar Subscription</h4>
                    <p style={{marginTop:'25px'}}>Pricing</p>
                    <p>About</p>
                    <p>FAQ</p>
                    <p>Refer and Earn</p>
                  </div>
                </div>
                <div className="flexContents">
                  <div style={{textAlign:"left",paddingLeft:'20px',paddingTop:'30px'}}>
                    <h4>FAQS and Policies</h4>
                    <p style={{marginTop:'25px'}}>Know ABout Subscription and car </p>
                    <p>About payment, offers and deposits</p>
                    <p>How does sharing work</p>
                    <p>What happens after I make the payment</p>
                    <p>Policies</p>
                  </div>
                  
                  
                </div>   
              </div>
              <div style={{marginTop:'100px'}}>
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


    </div>
  );
}

export default subscription;
