import React from "react";
import { MDBIcon } from "mdbreact";
import { useHistory } from "react-router-dom";
import OrderCard from "../WaiterComp/OrderCard";

export default function WaiterOrderList() {
  const history = useHistory();

  const logout = () => {
    window.localStorage.clear();
    window.location.href = "/waiter/login";
  };

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row mt-2">
          <div className="col-5 offset-1 mt-3 font-small pb-3">
            <div onClick={history.goBack} className="black-text">
              <MDBIcon icon="chevron-circle-left" /> Back
            </div>
          </div>
          <div className="col-5 mt-3 font-small pb-3 text-right">
            <div onClick={logout} className="black-text">
              Log out <MDBIcon icon="sign-out-alt" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <div className="mt-3">
              <h3 className="black-text">Today Orders</h3>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <div className="row">
              <OrderCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
