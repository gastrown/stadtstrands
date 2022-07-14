import { useState } from "react";
import { createContext } from "react";

const paymentContext = createContext([]);

export const PaymentProvider = ({ children }) => {
  const [paymentId, setPaymentId] = useState("");
  const [coords, setCoords] = useState({
    latitude:"",
    longitude:""
  })
  const [amount, setAmount] = useState()
  return (
    <paymentContext.Provider value={[ paymentId, setPaymentId, coords, setCoords]}>
      {children}
    </paymentContext.Provider>
  );
};

export default paymentContext;
