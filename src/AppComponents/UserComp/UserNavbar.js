import React from "react";
import { MDBFormInline, MDBBadge, MDBIcon } from "mdbreact";
//import AddToHomescreen from "react-add-to-homescreen";

//import { Link, BrowserRouter as Router } from 'react-router-dom';
import { Link } from "react-router-dom";

const iconStyle = {
  paddingTop: "0px",
  backgroundColor: "#ffffff",
  height: "70px",
  width: "70px",
  borderRadius: "50%",
  display: "inline-block",
  fontSize: "9px",
  textAlign: "center",
};

function UserNavbar() {
  // const handleAddToHomescreenClick = () => {
  //   alert(`
  //     1. Open Share menu
  //     2. Tap on "Add to Home Screen" button`);
  // };

  return (
    <div className="container-fluid" style={{ backgroundColor: "#b5cdd9" }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3  mt-3">
            <img
              src="/images/others/StSt_logo.png"
              className="img-fluid"
              alt="logo"
              style={{ width: "80px" }}
            />
          </div>

          <div className="col-8 offset-1 mt-2 mb-2">
            <div className="row text-center">
              <div className="col-3 text-center mt-4">
                <Link
                  to={{ pathname: "/menu/cart" }}
                  className="text-uppercase"
                  style={{ color: "#000000" }}
                >
                  <MDBBadge color="danger" style={{ fontSize: "8px" }}>
                    0
                  </MDBBadge>
                  <MDBIcon icon="shopping-cart" style={{ fontSize: "20px" }} />
                </Link>
              </div>
              <div className="col-3 text-center mt-4">
                <Link
                  to={{ pathname: "/user/orders" }}
                  className="text-uppercase"
                  style={{ color: "#000000" }}
                >
                  <MDBBadge color="danger" style={{ fontSize: "8px" }}>
                    0
                  </MDBBadge>
                  <MDBIcon icon="bell" style={{ fontSize: "20px" }} />
                </Link>
              </div>
              <div className="col-6 text-center">
                <MDBFormInline waves>
                  <div
                    className="md-form my-0"
                    // onAddToHomescreenClick={handleAddToHomescreenClick}
                  >
                    <span style={iconStyle} href="#contact">
                      <MDBIcon className="mt-3" icon="cloud-download-alt" />
                      <br />
                      Download
                      <br />
                      Icon
                    </span>
                  </div>
                </MDBFormInline>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <AddToHomescreen onAddToHomescreenClick={handleAddToHomescreenClick} /> */}
    </div>
  );
}

export default UserNavbar;
