import React, { useState, useEffect } from "react";
import UserNavbar from "../../AppComponents/UserComp/UserNavbar";
import { MDBContainer, MDBIcon, MDBBtn } from "mdbreact";
import { Link, useHistory } from "react-router-dom";
import UserStyles from "../../AppStyles/UserStyles.module.css";
import Axios from "axios";
import { geolocated } from "react-geolocated";
import StripeCheckout from "react-stripe-checkout";

function UserCart(props) {
  const brandPageId = localStorage.getItem("brandPageId");
  const clientId = localStorage.getItem("clientId");
  const [cartList, setCartList] = useState(props.location.state.cartList);
  const [finalAmount, setFinalAmount] = useState(0);
  const [brandPageDetails, setBrandPageDetails] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoading(false);
    total(props.location.state.cartList);
    Axios.get(
      `https://stadtstrandapi.ecrapps.website/api/v1/brandpage/user/${brandPageId}`
    )
      .then((response) => {
        setBrandPageDetails(response.data.data);
      })
      .catch((e) => {
        console.log(e.response);
      });
  }, [brandPageId, props.location.state.cartList]);

  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [delLoader, setDelLoader] = useState(false);

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

  const removeItem = (cart) => {
    setDelLoader(true);
    const cartId = cart.id;
    Axios.delete(`https://stadtstrandapi.ecrapps.website/api/v1/cart/${cartId}`)
      .then((response) => {
        setDelLoader(false);
        console.log(response);
      })
      .catch((e) => {
        console.log(e.response);
        setDelLoader(false);
      });
  };

  const total = (newCartList) => {
    let totalAmount = 0;
    for (let cart of newCartList) {
      const initial = cart.MenuItem.price * cart.quantity;
      totalAmount = totalAmount + initial;
    }
    setFinalAmount(totalAmount.toFixed(2));
  };

  // const checkout = () => {
  //   setLoader(true);

  //   Axios.post("https://stadtstrandapi.ecrapps.website/api/v1/checkout", {
  //     brandPageId: brandPageId,
  //     clientId: clientId,
  //     amount: finalAmount,
  //     orderLocLactitude: props.coords.latitude,
  //     orderLocLongitude: props.coords.longitude,
  //   })
  //     .then((response) => {
  //       console.log(response);
  //       setLoader(false);
  //     })
  //     .catch((e) => {
  //       console.log(e.response);
  //       setLoader(false);
  //     });
  // };

  const makePayment = (token) => {
    const body = {
      token,
      finalAmount,
    };

    const headers = {
      "Content-Type": "application/json",
    };

    return fetch(
      `https://stadtstrandapi.ecrapps.website/api/v1/stripe/checkout/`,
      {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      }
    )
      .then((response) => {
        console.log("RESPONSE", response);
        const { status } = response;
        console.log("STATUS ", status);
      })
      .catch((error) => console.log(error));
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
                  <div>
                    <MDBIcon icon="chevron-circle-left" />
                    <span
                      className="ml-5"
                      style={{ fontSize: "35px", fontWeight: "400" }}
                    >
                      Checkout
                    </span>
                  </div>
                  <Link to={{ pathname: "/menu" }}>
                    <MDBBtn
                      type="button"
                      color="blue"
                      style={{ borderRadius: "20px" }}
                      className="waves-effect z-depth-1a"
                      size="sm"
                    >
                      ORDER MORE
                    </MDBBtn>
                  </Link>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-9 col-md-9 offset-md-1 mt-2 font-small text-left ">
                <h6>ORDER POSITION</h6>

                <h6 className="mt-4">
                  <b>{brandPageDetails.name}</b>
                </h6>

                <p className="mt-4">{brandPageDetails.address}</p>
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
            ) : cartList < 1 ? (
              <span>Cart Empty</span>
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
                              style={{ color: "red", fontSize: "18px" }}
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
                            <MDBIcon
                              icon="trash"
                              className="mt-2 mr-3"
                              onClick={() => removeItem(cart)}
                            />
                            {delLoader ? (
                              <div
                                className="spinner-grow spinner-grow-sm ml-3"
                                role="status"
                              >
                                <span className="sr-only">Loading...</span>
                              </div>
                            ) : (
                              <span></span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                  </div>
                );
              })
            )}
            {/* <div className="row">
              <div className="col-10 col-md-10 offset-md-1 mt-2 font-small text-left ">
                <h6>PAYMENT METHOD</h6>

                <select className="browser-default custom-select form-control">
                  <option>Choose payment method</option>
                  <option value="1">Banking Card</option>
                  <option value="2">Paypal</option>
                  <option value="3">Apple Pay</option>
                  <option value="3">Google Pay</option>
                </select>
              </div>
            </div> 
            <hr />
            */}

            <div className="row mt-3">
              <div className="col-12 text-center">
                <h6>TOTAL ORDER CREATED</h6>
                <span style={{ color: "red" }}>€{finalAmount}</span>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-12 text-center">
                {/* {props.coords && ( */}
                  <StripeCheckout
                    stripeKey="pk_test_U3exqk6VyPl2mcUlle5o3rFw"
                    token={makePayment}
                    name="Stripe Payment"
                    amount={finalAmount * 100}
                    description="Big Data Stuff" // the pop-in header subtitle
                    // image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png" // the pop-in header image (default none)
                    allowRememberMe={true}
                  >
                    <button
                      className="btn btn-primary btn-sm"
                      style={{ borderRadius: "20px" }}
                    >
                      Make Payments of €{finalAmount}
                    </button>
                  </StripeCheckout>
                {/* )} */}
              </div>
            </div>
            <hr />
            {/* <div className="row mt-3">
              <div className="col-12 text-center">
                <MDBBtn
                  type="button"
                  color="blue"
                  style={{ borderRadius: "20px" }}
                  className="waves-effect z-depth-1a"
                  size="lg"
                >
                  Make Payments of €{finalAmount}
                </MDBBtn>
              </div>
            </div> */}
          </div>
        </div>
      </MDBContainer>
    </React.Fragment>
  );
}

export default geolocated()(UserCart);
