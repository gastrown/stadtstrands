import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
} from "mdbreact";
import AdminStyle from "../../AppStyles/AdminStyles.module.css";
import AdminNavbar from "../../AppComponents/AdminComp/AdminNavbar";

function FormReport(props) {
  console.log(props);
  const locationId = props.match.params.locationId;
  const history = useHistory();
  const [formReports, setFormsReports] = useState([]);

  const logout = () => {
    window.localStorage.clear();
    window.location.href = "/admin/0/login";
  };

  useEffect(() => {
    Axios.get(
      `https://stadtstrandapp.ecrdeveloper.website/api/v1/client/${locationId}`
    )
      .then((response) => {
        console.log(response);
        setFormsReports(response.data.data);
      })
      .catch((e) => {
        console.log(e.response);
      });
  }, [locationId]);

  return (
    <MDBContainer fluid className={AdminStyle.adminbody2}>
      <AdminNavbar />
      <MDBContainer>
        <MDBRow>
          <MDBCol className={AdminStyle.cardAlignMiddle}>
            <MDBCard style={{ width: "45rem", borderRadius: "20px" }}>
              <MDBCardBody className="text-center mt-5">
                <div className="row">
                  <div className="col-12 text-center">
                    <h4>Brand Page Form Reports</h4>
                  </div>
                </div>
                <hr />

                <div className="row">
                  {formReports.map((report) => {
                    return (
                      <div className="col-10 offset-1" key={report.id}>
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              {report.ClientDetails.map((title) => {
                                return <td key={title.id}>{title.title}</td>;
                              })}
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              {report.ClientDetails.map((value) => {
                                return <td key={value.id}>{value.value}</td>;
                              })}
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    );
                  })}
                </div>

                <div className="row mt-5 font-small text-center pb-3">
                  <div className="col-6 black-text " onClick={history.goBack}>
                    <MDBIcon icon="chevron-circle-left" /> Back
                  </div>
                  <div className="col-6 black-text " onClick={logout}>
                    Log out <MDBIcon icon="sign-out-alt" />
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBContainer>
  );
}

export default FormReport;
