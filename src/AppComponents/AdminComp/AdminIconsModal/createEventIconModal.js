import React from "react";
import { MDBModal, MDBModalBody, MDBBtn, MDBIcon } from "mdbreact";
import DeactivateButton from "../../DeactivateButton";

export default function CreateEventIconModal(props) {
  const imageFileStyle = {
    padding: "10px",
    border: "1px solid #ffffff",
    marginLeft: "12px",
    width: "90%",
    borderRadius: "10px",
    textAlign: "center",
    fontSize: "12px",
    color: "#ffffff",
  };

  const circleFileStyle = {
    width: "95px",
    height: "95px",
    background: "#39729b",
    borderRadius: "50%",
    padding: "20px",
    textAlign: "center",
    fontSize: "10px",
    color: "#ffffff",
  };

  const onChangeFile = (event) => {
    console.log("event.target.files[0]", event.target);
  };

  return (
    <MDBModal
      isOpen={props.constName}
      toggle={props.functionName}
      centered
      size="lg"
    >
      <MDBModalBody>
        <h6 className="mt-2">
          <strong>Create Event</strong>
        </h6>
        <hr />
        <div className="row">
          <div
            className="col-md-10 offset-md-1"
            style={{
              background:
                'url("/images/others/stadtstrandFeature1.jpeg") no-repeat fixed center',
              height: "150px",
              borderRadius: "20px",
            }}
          >
            <div className="form-group row mt-5">
              <div className="col-md-8 offset-md-2 text-center">
                <input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                  onChange={(e) => onChangeFile(e)}
                />
                <label htmlFor="file" style={imageFileStyle}>
                  Upload event header image{" "}
                  <span
                    className="fa fa-download"
                    style={{
                      backgroundColor: "#39729b",
                      color: "#ffffff",
                      padding: "5px",
                      borderRadius: "10px",
                    }}
                  >
                    {" "}
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="row form-group mt-3">
          <div className="col-md-4 mt-2">
            <input
              type="text"
              name=""
              placeholder="Upload event title"
              className="form-control text-center"
              style={{ borderRadius: "20px", fontSize: "10px" }}
            />
          </div>
          <div className="col-md-4 mt-2">
            <input
              type="text"
              name=""
              placeholder="Upload Event location"
              className="form-control text-center"
              style={{ borderRadius: "20px", fontSize: "10px" }}
            />
          </div>

          <div className="col-md-4 mt-2">
            <input
              type="date"
              name=""
              placeholder="Date"
              className="form-control text-center"
              style={{ borderRadius: "20px", fontSize: "10px" }}
            />
          </div>
        </div>

        <div className="row form-group mt-3">
          <div className="col-md-12">
            <textarea
              className="form-control text-left"
              style={{ borderRadius: "10px", fontSize: "10px" }}
              rows="3"
            >
              Upload event information
            </textarea>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3 offset-md-1">
            <input
              type="file"
              id="file"
              style={{ display: "none", borderRadius: "500px" }}
              onChange={(e) => onChangeFile(e)}
            />
            <label htmlFor="file" style={circleFileStyle}>
              <span
                className="fa fa-download"
                style={{
                  backgroundColor: "#39729b",
                  color: "#ffffff",
                  padding: "5px",
                  borderRadius: "10px",
                }}
              ></span>{" "}
              <br />
              Upload event image
            </label>
          </div>
          <div className="col-md-6">
            <div className="row mt-2">
              <div className="col-6 col-md-5">
                <img
                  src="/images/others/stadtstrandFeature1.jpeg"
                  alt="eventImage1"
                  style={{
                    border: "1px solid #39729b",
                    height: "80px",
                    width: "120px",
                    borderRadius: "15px",
                  }}
                />
              </div>
              <div className="col-6 col-md-5 offset-md-2">
                <img
                  src="/images/others/stadtstrandFeature3.jpeg"
                  alt="eventImage1"
                  style={{
                    border: "1px solid #39729b",
                    height: "80px",
                    width: "120px",
                    borderRadius: "15px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="enter link"
                style={{ borderRadius: "15px", textAlign: "center" }}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="custom-control custom-switch mt-2">
              <input
                type="checkbox"
                className="custom-control-input"
                id="eventCountSwitch"
              />
              <label
                className="custom-control-label"
                htmlFor="eventCountSwitch"
              >
                Activate event countdown
              </label>
            </div>
          </div>
        </div>

        <div className="form-group row mt-4">
          <div className="col-md-12 text-center">
            <MDBBtn
              type="button"
              color="#39729b"
              style={{
                borderRadius: "20px",
                backgroundColor: "#39729b",
                color: "#ffffff",
              }}
              className="waves-effect z-depth-1a"
              size="sm"
            >
              Save
            </MDBBtn>
          </div>
        </div>

        <div className="row">
          <div className="col-md-10 offset-md-2">
            <DeactivateButton />
          </div>
        </div>

        <div className="mt-5 font-small text-center pb-3">
          <div onClick={props.functionName} className="black-text">
            <MDBIcon icon="chevron-circle-left" /> Back
          </div>
        </div>
      </MDBModalBody>
    </MDBModal>
  );
}
