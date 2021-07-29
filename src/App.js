import React, { Component } from "react";
import AllRoutes from "./allRoutes";
import dotenv from "dotenv";

dotenv.config();

class App extends Component {
  render() {
    return <AllRoutes />;
  }
}

export default App;
