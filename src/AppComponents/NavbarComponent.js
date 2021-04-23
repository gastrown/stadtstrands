import React, { Component } from "react";
import {
    MDBNavbar, MDBNavbarBrand, 
    MDBNavbarNav, MDBNavItem, 
    MDBNavLink, MDBNavbarToggler, 
    MDBCollapse, MDBFormInline,
} from "mdbreact";

import { BrowserRouter as Router } from 'react-router-dom';

class NavbarComponent extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}


render() {

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

  return (
    <>
    <Router>
      <MDBNavbar style={{backgroundColor:'#b5cdd9'}} dark expand="md">
        <MDBNavbarBrand>
            <img src="/images/others/StSt_logo.png" alt="logo" style={{width:'25%'}}/>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="#!" className="text-uppercase" style={{color:'#000000'}}>GUEST REGISTRATION</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!"  className="text-uppercase" style={{color:'#000000'}}>CONTACT</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-0">
                    <span style={iconStyle} href="#contact">
                        <i className="fa fa-download font_fa_Settings mt-4"></i>
                        <br/>
                        Download<br/>Icon
                    </span>
                </div>
              </MDBFormInline>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
    </>
    );
  }
}

export default NavbarComponent;