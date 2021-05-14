import React, { useState} from "react";
import {
    MDBNavbar, MDBNavbarBrand, 
    MDBNavbarNav, MDBNavItem,  MDBNavbarToggler, 
    MDBCollapse, MDBFormInline, MDBBadge, MDBIcon
} from "mdbreact";

//import { Link, BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';


const iconStyle = {
    paddingTop: '0px',
    backgroundColor: '#ffffff',
    height: '70px',
    width: '70px',
    borderRadius: '50%',
    display: 'inline-block',
    fontSize: '9px',
    textAlign: 'center'
}

function UserNavbar (props) {

const [isOpen, setIsOpen] = useState(false);

const toggleCollapse = () => { setIsOpen(!isOpen); }

   
  return (
    <>
      <MDBNavbar style={{backgroundColor:'#b5cdd9'}} dark expand="md">
        <MDBNavbarBrand>
            <img src="/images/others/StSt_logo.png" className="img-fluid" alt="logo" style={{width:'80px'}}/>
            
        </MDBNavbarBrand>
        
        <MDBNavbarToggler onClick={toggleCollapse} />
        
        <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
        <MDBNavbarNav right>
            <MDBNavItem active className="mt-3 ml-2">
              <Link to={{pathname:'/menu/cart'}} className="text-uppercase" style={{color:'#000000'}}>
                <MDBBadge color="danger" style={{fontSize:'10px'}}>2</MDBBadge>
                <MDBIcon icon="shopping-cart" style={{fontSize:'25px'}}/>
              </Link>
            </MDBNavItem>
            <MDBNavItem className="mt-3 ml-2 mr-3">
              <Link to={{pathname:'/user/orders'}} className="text-uppercase" style={{color:'#000000'}}>
                <MDBBadge color="danger" style={{fontSize:'10px'}}>0</MDBBadge>
                <MDBIcon icon="bell" style={{fontSize:'25px'}}/>
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-0">
                    <span style={iconStyle} href="#contact">
                        <MDBIcon className="mt-4" icon="cloud-download-alt" />
                        <br/>
                        Download<br/>Icon
                    </span>
                </div>
              </MDBFormInline>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </>
    );
  
}

export default UserNavbar;