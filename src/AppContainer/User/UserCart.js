import React, { useState, useEffect } from "react";
import UserNavbar from "../../AppComponents/UserComp/UserNavbar";
import { MDBContainer, MDBIcon, MDBBtn } from "mdbreact";
import Axios from "axios";
import { Link, useHistory } from "react-router-dom";
import UserStyles from "../../AppStyles/UserStyles.module.css";

export default function UserCart(props) {
  const clientId = localStorage.getItem("clientId");
  const brandPageId = localStorage.getItem("brandPageId");
  const history = useHistory();
  const [cartList, setCartList] = useState([]);
  const [loader, setLoader] = useState(false);
  const [loading, setLoading] = useState(true);
  const [finalAmount, setFinalAmount] = useState(0);

  const incrementCounter = (cart) => {
    const cartData = [...cartList];
    const index = cartData.findIndex((element) => element.id === cart.id);
    cartData[index].quantity = cart.quantity + 1;
    setCartList(cartData);
    total(cartData);
  };

  const decrementCounter = (cart) => {
    const cartData = [...cartList];
    const index = cartData.findIndex((element) => element.id === cart.id);
    cartData[index].quantity = cart.quantity - 1;
    if (cart.quantity <= 0) {
      cartData[index].quantity = 1;
    }
    setCartList(cartData);
    total(cartData);
  };

  const total = (newCartList) => {
    let totalAmount = 0;
    for (let cart of newCartList) {
      const initial = cart.MenuItem.price * cart.quantity;
      totalAmount = totalAmount + initial;
    }
    setFinalAmount(totalAmount.toFixed(2));
  };

  useEffect(() => {
    Axios.get(
      `https://stadtstrandapp.ecrdeveloper.website/api/v1/carts/count/${clientId}`
    )
      .then((response) => {
        setCartList(response.data.data.rows);
        total(response.data.data.rows);
        setLoading(false);
      })
      .catch((e) => {});

    return;
  }, [clientId]);

  const checkout = () => {
    setLoader(true);

    Axios.post("https://stadtstrandapp.ecrdeveloper.website/api/v1/checkout", {
      brandPageId: brandPageId,
      clientId: clientId,
      amount: finalAmount,
    })
      .then((response) => {
        console.log(response);
        setLoader(false);
      })
      .catch((e) => {
        console.log(e.response);
        setLoader(false);
      });
  };

  return (
    <React.Fragment>
      <UserNavbar />
      <MDBContainer fluid style={{ height: "100%", background: "#b5cdd9" }}>
        <div className="row">
          <div
            className="col-10 offset-1 col-md-6 offset-md-3 mt-3 mb-5"
            id={UserStyles.listCard}
          >
            <div className="row">
              <div className="col-9 col-md-9 mt-2 font-small text-left ">
                <div
                  onClick={history.goBack}
                  className="black-text"
                  style={{ fontSize: "25px" }}
                >
                  <MDBIcon icon="chevron-circle-left" />{" "}
                  <span
                    className="ml-5"
                    style={{ fontSize: "35px", fontWeight: "400" }}
                  >
                    Cart
                  </span>
                </div>
              </div>
            </div>
            <hr />

            {loading ? (
              <div className="col-12 mt-2 mb-2 text-center">
                <div
                  className="spinner-grow text-primary fast ml-2"
                  role="status"
                >
                  <span className="sr-only mt-2">Loading...</span>
                </div>
              </div>
            ) : (
              cartList.map((cart) => {
                return (
                  <div key={cart.id}>
                    <div className="row mt-3">
                      <div className="col-3">
                        <img
                          src={cart.MenuItem.imageUrl}
                          alt={cart.MenuItem.name}
                          className="img-fluid"
                          id={UserStyles.imgBoxed_md}
                        />
                      </div>
                      <div className="col-9">
                        <div className="row">
                          <div className="col-12 text-left">
                            <h5 style={{ fontWeight: "400" }}>
                              {cart.MenuItem.name}
                            </h5>
                            <p>{cart.MenuItem.description.substr(0, 50)}...</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="row">
                          <div className="col-4 text-left">
                            <span
                              className="ml-3"
                              style={{ color: "red", fontSize: "22px" }}
                            >
                              €
                              {(cart.MenuItem.price * cart.quantity).toFixed(2)}
                            </span>
                          </div>
                          <div className="col-4 text-center">
                            <MDBIcon
                              icon="minus-circle"
                              className="mt-2 mr-3"
                              onClick={() => decrementCounter(cart)}
                            />
                            {cart.quantity}
                            <MDBIcon
                              icon="plus-circle"
                              className="mt-2 ml-2"
                              onClick={() => incrementCounter(cart)}
                            />
                          </div>
                          <div className="col-4 text-right">
                            <MDBIcon icon="trash" className="mt-2 mr-3" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                  </div>
                );
              })
            )}

            <div className="row mt-3">
              <div className="col-12 text-center">
                <Link to={{ pathname: "/menu/food" }}>
                  <MDBBtn
                    type="button"
                    color="blue"
                    style={{ borderRadius: "20px" }}
                    className="waves-effect z-depth-1a"
                    size="sm"
                  >
                    ORDER MORE FOOD
                  </MDBBtn>
                </Link>
              </div>
            </div>

            <hr />
            <div className="row mt-3">
              <div className="col-7 text-center">
                <h6>TOTAL ORDER CREATED</h6>
                <span style={{ color: "red" }}>€{finalAmount}</span>
              </div>
              <div className="col-5 text-left">
                <Link
                  to={{
                    pathname: "/checkout",
                  }}
                >
                  <MDBBtn
                    type="button"
                    color="blue"
                    style={{ borderRadius: "20px" }}
                    className="waves-effect z-depth-1a"
                    size="sm"
                    onClick={checkout}
                  >
                    CHECKOUT <MDBIcon icon="chevron-circle-right" />
                    {loader ? (
                      <div
                        className="spinner-grow spinner-grow-sm ml-3"
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                    ) : (
                      <span></span>
                    )}
                  </MDBBtn>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </MDBContainer>
    </React.Fragment>
  );
}
