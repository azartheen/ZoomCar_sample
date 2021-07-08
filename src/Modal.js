import React from 'react';
import './App.css';
import { Button,Navbar,Nav,Jumbotron,Card, CardDeck, Image,Carousel} from 'react-bootstrap';

const MODAL_STYLEs={
    position:'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    paddingTop:'50px',
    backgroundColor: '#eeeeee',
    zIndex: 1000,
    color:'black',
    borderRadius:'10px'
}
const OVERLAY_STYLE ={
    position:'fixed',
    top: 0,
    left: 0,
    bottom:0,
    right:0,
    backgroundColor: 'rgba(0,0,0,.7)',
     zIndex: 1000

}

function Modal({open, children, onClose}) {
    if(!open) return null
    return (

    <>
        <div style={OVERLAY_STYLE} />
        <div style={MODAL_STYLEs}>
            <div style={{textAlign:'center'}}>
            <button onClick={onClose} >x</button>
            </div>
            <div style={{width:"100%"}}>
                <div class='modal-left'style={{width:'40%',float:'left'}}>
                    <div style={{backgroundColor:'white',borderRadius:'5px',height:"400px",margin:'10px',padding:'20px',textAlign:'center'}}>
                        <img src="https://www.zoomcar.com/assets/component-images/promo_supermiler.7a597371bd16587f1d46a66dbff6b72e.svg"  style={{ height:'70px',width:'60px',alignSelf:'center',marginTop:'25px',}}/>
                        <h4 style={{marginTop:'20px'}}>  SUPERMILER CLUB </h4>
                        <p style={{marginTop:'20px'}}>Premium club which rewards you everytime you drive with us</p>
                    </div>

                </div>
            
                <div class="modal-right"style={{width:"60%",float:'left'}}>
                    <div>
                        <p style={{textAlign:'center',margin:'20px',color:'grey'}}>Continue with</p>
                        <button class='modal-buttons facebook'> FACEBOOK</button><br/>
                        <button class='modal-buttons google'> GOOGLE</button>
                    </div>

                    <div class="modal-bottom" style={{marginRight:'10px'}}>
                        <input type="text" name="name" placeholder="Enter your EMAIL ID or MOBILE NUMBER" style={{ alignSelf:"center", width:"300px",marginRight:'90px'}}/>
                        <div style={{marginTop:'20px',textAlign:'center'}}>
                        <button class='modal-enter'> Enter</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    </>
    )
}

export default Modal
