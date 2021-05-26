import React from "react";
import { MDBIcon } from "mdbreact";
import Axios from "axios";

const AdminNavbar = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#b5cdd9" }}>
      <div className="container">
        <div className="row">
          <div className="col-12 mt-4 mb-4">
            <img
              src="/images/others/StSt_logo.png"
              alt="logo"
              style={{ width: "100px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
