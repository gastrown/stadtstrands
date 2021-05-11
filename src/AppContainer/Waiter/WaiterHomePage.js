import React, { Component } from "react";
import WaiterNavbar from '../../AppComponents/WaiterComp/WaiterNavbar';
import WaiterOrderList from '../../AppComponents/WaiterComp/WaiterOrderList';

class WaiterHomePage extends Component {

render() {
  return (
    <>
    <WaiterNavbar  />
    <WaiterOrderList />
    </>
    );
  }
}

export default WaiterHomePage;