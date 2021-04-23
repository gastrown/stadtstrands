import React, { Component } from "react";
import VideoComponent from '../AppComponents/VideoComponent';
import NavbarComponent from '../AppComponents/NavbarComponent';
import FeatureComponent from '../AppComponents/FeatureComponent';
import AboutComponent from '../AppComponents/AboutComponent';
import FooterComponent from '../AppComponents/FooterComponent';

class HomePage extends Component {

render() {
  return (
    <>
    <NavbarComponent />
    <VideoComponent />
    <FeatureComponent />
    <AboutComponent />
    <FooterComponent />
    </>
    );
  }
}

export default HomePage;