import React, { useState, useEffect } from "react";
import UserNavbar from "../../AppComponents/UserComp/UserNavbar";
import { MDBContainer, MDBIcon, MDBBtn } from "mdbreact";
import Axios from "axios";
import { Link, useHistory } from "react-router-dom";
import UserStyles from "../../AppStyles/UserStyles.module.css";

function UserCart() {
  const clientId = localStorage.getItem("clientId");
  const history = useHistory();
  const [cartList, setCartList] = useState([]);
  const [loader] = useState(false);
  const [loading, setLoading] = useState(true);
  const [delLoader, setDelLoader] = useState(false);

  const removeItem = (cart) => {
    setDelLoader(true);
    const cartId = cart.id;
    console.log(cartId);
    Axios.delete(
      `https://stadtstrandapp.ecrdeveloper.website/api/v1/cart/${cartId}`
    )
      .then((response) => {
        setDelLoader(false);
        console.log(response);
      })
      .catch((e) => {
        console.log(e.response);
        setDelLoader(false);
      });
  };

  useEffect(() => {
    Axios.get(
      `https://stadtstrandapp.ecrdeveloper.website/api/v1/carts/count/${clientId}`
    )
      .then((response) => {
        setCartList(response.data.data.rows);
        setLoading(false);
      })
      .catch((e) => {
        setCartList([]);
      });

    return;
  }, [clientId]);

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
                              style={{ color: "red", fontSize: "22px" }}
                            >
                              €
                              {(cart.MenuItem.price * cart.quantity).toFixed(2)}
                            </span>
                          </div>
                          <div className="col-4 text-center"></div>
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

            <div className="row mt-3">
              <div className="col-12 text-center">
                <Link
                  to={{
                    pathname: "/checkout",
                    state: {
                      cartList: cartList,
                    },
                  }}
                >
                  <MDBBtn
                    type="button"
                    color="blue"
                    style={{ borderRadius: "20px" }}
                    className="waves-effect z-depth-1a"
                    size="sm"
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

            <hr />

            <div className="row mt-3">
              <div className="col-12 text-center">
                <Link to={{ pathname: "/menu" }}>
                  <MDBBtn
                    type="button"
                    color="blue"
                    style={{ borderRadius: "20px" }}
                    className="waves-effect z-depth-1a"
                    size="sm"
                    onClick={history.goBack}
                  >
                    ORDER MORE
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

export default UserCart;
