import React, { Component } from "react";
import {
    MDBNavbar, MDBNavbarBrand, 
    MDBNavbarNav, MDBNavItem, 
    MDBNavLink, MDBNavbarToggler, 
    MDBCollapse
} from "mdbreact";

import { BrowserRouter as Router } from 'react-router-dom';

class WaiterNavbar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}


render() {

    
  return (
    <Router>
      <MDBNavbar style={{backgroundColor:'#b5cdd9'}} dark expand="md">
        <MDBNavbarBrand>
            <img src="/images/others/StSt_logo.png" className="img-fluid" alt="logo" style={{width:'80px'}}/>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav center>
            <MDBNavItem active>
              <MDBNavLink to="#!" className="text-uppercase" style={{color:'#000000'}}>DOWNLOAD ORDER REPORTING</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!"  className="text-uppercase" style={{color:'#000000'}}>DOWNLOAD FORM REPORTING</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
  }
}

export default WaiterNavbar;