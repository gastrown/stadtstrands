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
  MDBBtn,
} from "mdbreact";
import AdminStyle from "../../AppStyles/AdminStyles.module.css";
import AdminNavbar from "../../AppComponents/AdminComp/AdminNavbar";

function FormReport(props) {
  const locationId = props.match.params.locationId;
  const history = useHistory();
  const [formReports, setFormsReports] = useState([]);
  const [searchFormReports, setSearchFormReports] = useState([]);

  const logout = () => {
    window.localStorage.clear();
    window.location.href = "/admin/0/login";
  };

  const searchReport = (e) => {
    const searchDate = e.target.value;
    const convertedDate = new Date(searchDate);
    const searchArray = [];

    searchFormReports.map((report) => {
      const reportDate = new Date(report.createdAt);

      if (reportDate.toDateString() == convertedDate.toDateString()) {
        searchArray.push(report);
        console.log(report);
      }
    });
    setFormsReports(searchArray);
  };

  useEffect(() => {
    Axios.get(
      `https://stadtstrandapp.ecrdeveloper.website/api/v1/client/${locationId}`
    )
      .then((response) => {
        console.log(response);
        setFormsReports(response.data.data);
        setSearchFormReports(response.data.data);
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
              <MDBCardBody className="text-center mt-3">
                <div className="row">
                  <div className="col-12 text-center">
                    <h4>{formReports.length} Brand Page Form Reports</h4>
                  </div>
                </div>
                <hr />

                <div className="row mt-2">
                  <div className="col-md-3 col-12  text-left">
                    <h5 className="mt-1">Search by date</h5>
                  </div>
                  <div className="col-md-5 col-12 text-center">
                    <form>
                      <div className="form-group row">
                        <div>
                          <input
                            className="form-control"
                            type="Date"
                            placeholder="Search by Date"
                            aria-label="Search"
                            style={{ borderRadius: "15px" }}
                            onChange={searchReport}
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-3 col-12  text-left">
                    <MDBBtn
                      type="submit"
                      color="blue"
                      style={{ borderRadius: "20px" }}
                      className="waves-effect z-depth-1a"
                      size="sm"
                    >
                      Download xlx
                      {/* {loader ? (
                            <div
                              className="spinner-grow spinner-grow-sm ml-2"
                              role="status"
                            >
                              <span className="sr-only">Loading...</span>
                            </div>
                          ) : (
                            <div></div>
                          )} */}
                    </MDBBtn>
                  </div>
                </div>
                <hr />

                <div className="row">
                  {formReports.length == 0 ? (
                    <div className="col-12 text-center mt-2">
                      <h3>No Report Available</h3>
                    </div>
                  ) : (
                    formReports.map((report) => {
                      return (
                        <div className="col-4" key={report.id}>
                          {report.ClientDetails.map((title) => {
                            return (
                              <div className="text-left" key={title.id}>
                                <p style={{ fontSize: "12px" }}>
                                  <b>{title.title}:</b>
                                  <br />
                                  {title.value}{" "}
                                </p>
                              </div>
                            );
                          })}
                          <p className="text-left" style={{ fontSize: "12px" }}>
                            <b>Date:</b>
                            <br />
                            {report.createdAt}
                          </p>
                        </div>
                      );
                    })
                  )}
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
