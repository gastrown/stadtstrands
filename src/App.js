import React, { Component } from "react";
import AllRoutes from "./allRoutes";
import dotenv from "dotenv";
import { PaymentProvider } from "./context/paymentContext";

dotenv.config();

class App extends Component {
  render() {
    return (
      <PaymentProvider>
        <AllRoutes />
      </PaymentProvider>
    )
  }
}

export default App;
