import React, { useState, useEffect } from "react";
import WaiterStyle from "../../AppStyles/WaiterStyles.module.css";
import { MDBIcon, MDBBtn, MDBModal, MDBModalBody } from "mdbreact";
import MapContainer from "../../AppComponents/MapContainer";
import Axios from "axios";
import { Link } from "react-router-dom";

export const OrderCard = () => {
  const [singleListModal, setSingleListModal] = useState(false);
  const [waiterModal, setWaiterModal] = useState();
  const brandPageId = localStorage.getItem("brandPageId");
  const [waitersOrders, setWaitersOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const toggleList = (waiterOrder) => {
    setWaiterModal(waiterOrder);
    setSingleListModal(!singleListModal);
  };

  useEffect(() => {
    Axios.get(
      `https://stadtstrandapi.ecrapps.website/api/v1/brandpage/orders/${brandPageId}`
    )
      .then((response) => {
        setWaitersOrders(response.data.data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e.response);
      });
  }, [brandPageId]);

  //   const waitersOrders = [
  //     {
  //       id: "1",
  //       orderRefNob: "GWY342ES2321",
  //       fullname: "Chime Emmanuel",
  //       order: [
  //         {
  //           id: "1",
  //           menu: "Evolution Fresh Cold Juice",
  //           quantity: "2",
  //           price: "10.99",
  //           total: "21.98",
  //           menuImg: "/images/others/softdrink1.png",
  //           dateTime: "14:34pm 14 March 2021",
  //         },
  //       ],
  //     },
  //     {
  //       id: "2",
  //       orderRefNob: "AAE112ES2321",
  //       fullname: "Solomon Job",
  //       order: [
  //         {
  //           id: "1",
  //           menu: "Evolution Fresh Cold Juice",
  //           quantity: "2",
  //           price: "10.99",
  //           total: "21.98",
  //           menuImg: "/images/others/softdrink2.png",
  //           dateTime: "03:04pm 10 March 2021",
  //         },
  //         {
  //           id: "2",
  //           menu: "Smoked Fish and Garri",
  //           quantity: "1",
  //           price: "25.99",
  //           total: "25.99",
  //           menuImg: "/images/others/softdrink3.png",
  //           dateTime: "03:04pm 10 March 2021",
  //         },
  //       ],
  //     },
  //   ];

  return (
    <div className="col-md-12">
      {loading ? (
        <div className="col-12 text-center mt-2 mb-2">
          <div className="spinner-grow text-primary fast ml-2" role="status">
            <span className="sr-only mt-2">Loading...</span>
          </div>
        </div>
      ) : waitersOrders < 1 ? (
        <div className="row">
          <div className="col-12 text-center mt-2 mb-2">
            <h2>No Order found</h2>
          </div>

          <div className="col-12 text-center mt-2 mb-2">
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
      ) : (
        waitersOrders.map((waiterOrder) => {
          return (
            //console.log(waitersOrders[1].order)
            <div
              className="row shadow-sm bg-light mt-3"
              key={waiterOrder.id}
              id={WaiterStyle.listCard}
            >
              <div className="col-12 col-md-12">
                <div className="row">
                  <div className="col-8 col-md-8">
                    <h5>{waiterOrder.fullname}</h5>
                  </div>
                  <div className="col-4 col-md-4 text-right">
                    <MDBIcon
                      icon="cog"
                      onClick={() => toggleList(waiterOrder)}
                      style={{ fontSize: "25px" }}
                    />
                    <MDBModal isOpen={singleListModal} toggle={toggleList}>
                      <MDBModalBody>
                        {waiterModal ? (
                          <div>
                            <div className="row">
                              <div className="col-3 col-md-3 text-left">
                                <div
                                  onClick={() => toggleList(null)}
                                  className="black-text"
                                >
                                  <MDBIcon icon="chevron-circle-left" /> Close
                                </div>
                              </div>
                              <div className="col-8 col-md-8 text-right">
                                <div className="black-text">
                                  <h5>{waiterModal.fullname}</h5>
                                </div>
                              </div>
                            </div>
                            <hr />
                            <div className="row">
                              <div className="col-md-12">
                                {waiterModal.order.map((order) => {
                                  return (
                                    <div className="row" key={order.id}>
                                      <div className="col-3 col-md-3">
                                        <img
                                          src={order.menuImg}
                                          id={WaiterStyle.listCardImg}
                                          className="img-fluid"
                                          alt="orderList"
                                        />
                                      </div>
                                      <div className="col-8 col-md-8 mt-2 text-left">
                                        <div className="row">
                                          <div className="col-7 col-md-7">
                                            <p>
                                              <span
                                                style={{
                                                  fontSize: "14px",
                                                  fontWeight: "bold",
                                                }}
                                              >
                                                Order
                                              </span>{" "}
                                              <br />
                                              {order.menu}
                                              <br />
                                              <span
                                                style={{ fontSize: "10px" }}
                                              >
                                                {order.dateTime}
                                              </span>
                                            </p>
                                          </div>

                                          <div className="col-5 col-md-5">
                                            <div className="row mt-5">
                                              <div className="col-6 col-md-6 mt-1">
                                                <h6>
                                                  <b>{order.quantity}</b>
                                                </h6>
                                              </div>
                                              <div className="col-6 col-md-6">
                                                <h5 style={{ color: "red" }}>
                                                  ${order.price}
                                                </h5>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                            {/* <h5>{waiterModal.fullname}</h5>  */}
                            <hr />
                            <div className="row">
                              <div className="col-12 col-md-12">
                                <MapContainer />
                              </div>
                            </div>
                            <div className="row mt-5">
                              <div className="col-12 col-md-12 text-center">
                                <MDBBtn
                                  type="button"
                                  color="blue"
                                  style={{ borderRadius: "20px" }}
                                  className="waves-effect z-depth-1a"
                                  size="sm"
                                >
                                  Create Route
                                </MDBBtn>

                                <MDBBtn
                                  type="button"
                                  color="white"
                                  style={{
                                    borderRadius: "20px",
                                    color: "#000000",
                                  }}
                                  className="waves-effect z-depth-1a"
                                  size="sm"
                                >
                                  Completed
                                </MDBBtn>
                              </div>
                            </div>
                          </div>
                        ) : null}
                      </MDBModalBody>
                    </MDBModal>
                  </div>
                </div>
                {waiterOrder.order.map((order) => {
                  return (
                    <div className="row" key={order.id}>
                      <div className="col-3 col-md-3">
                        <img
                          src={order.menuImg}
                          id={WaiterStyle.listCardImg}
                          className="img-fluid"
                          alt="orderList"
                        />
                      </div>
                      <div className="col-9 col-md-9 mt-2">
                        <div className="row">
                          <div className="col-7 col-md-7">
                            <p>
                              <span
                                style={{ fontSize: "14px", fontWeight: "bold" }}
                              >
                                Order
                              </span>{" "}
                              <br />
                              {order.menu}
                              <br />
                              <span style={{ fontSize: "10px" }}>
                                {order.dateTime}
                              </span>
                            </p>
                          </div>

                          <div className="col-5 col-md-5">
                            <div className="row mt-5">
                              <div className="col-4 col-md-4 mt-1">
                                <h6>
                                  <b>{order.quantity}</b>
                                </h6>
                              </div>
                              <div className="col-5 col-md-5">
                                <span
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: "bold",
                                    color: "red",
                                  }}
                                >
                                  ${order.price}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default OrderCard;
