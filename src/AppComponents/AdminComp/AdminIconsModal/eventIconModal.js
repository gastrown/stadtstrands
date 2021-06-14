import React, { useState, useEffect } from "react";
import { MDBModal, MDBModalBody, MDBBtn, MDBIcon, MDBAlert } from "mdbreact";
import DeactivateButton from "../../DeactivateButton";
import CreateEvent from "../../AdminComp/AdminIconsModal/createEventIconModal";
import Axios from "axios";

export default function EventIconModal(props) {
  const brandPageId = props.locationId;
  const [deactivatePage, setDeactivatePage] = useState(true);
  const [checkEventStatus, setCheckEventStatus] = useState(null);
  const [modalCreateEvent, setModalCreateEvent] = useState(false);
  const [loader, setLoader] = useState(false);
  const [alert, setAlert] = useState(false);
  const [events, setEvents] = useState([]);
  const [brandPageEventId, setBrandPageEventId] = useState("");

  const toogleCreateEvent = () => {
    setModalCreateEvent(!modalCreateEvent);
  };

  useEffect(() => {
    Axios.get(
      `https://stadtstrandapp.ecrdeveloper.website/api/v1/brandpageevent/${brandPageId}`
    )
      .then((response) => {
        setAlert(null);
        setCheckEventStatus(true);
        setEvents(response.data.data.Events);
        setDeactivatePage(response.data.data.deactivate);
        setBrandPageEventId(response.data.data.id);
      })
      .catch((e) => {
        console.log(e.response);
      });
  }, [brandPageId]);

  const createBrandPageEvent = () => {
    setLoader(!loader);
    Axios.post(
      "https://stadtstrandapp.ecrdeveloper.website/api/v1/brandpageevent",
      {
        brandPageId: brandPageId,
        deactivate: deactivatePage,
      }
    )
      .then((response) => {
        setLoader(false);
        setCheckEventStatus(true);
        setAlert(true);
      })
      .catch((e) => {
        setLoader(false);
      });
  };

  return (
    <MDBModal isOpen={props.constName} toggle={props.functionName} centered>
      <MDBModalBody>
        <h5 className="mt-2">
          <strong>Events</strong>
        </h5>
        <hr />

        {checkEventStatus ? (
          <div className="row">
            <div className="col-12">
              <div className="form-group row">
                <div className="col-10 offset-1">
                  {alert ? (
                    <MDBAlert color="success">
                      <strong>Congratulation!</strong> your brand page event tab
                      has been created successfully. Let's get started with
                      creating events.
                    </MDBAlert>
                  ) : (
                    <span></span>
                  )}
                </div>
              </div>
              <div className="form-group row mt-2">
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
                    onClick={toogleCreateEvent}
                  >
                    Create event
                  </MDBBtn>
                </div>
              </div>
              <DeactivateButton
                toggle={() => {
                  setDeactivatePage(!deactivatePage);
                }}
                deactivatePage={deactivatePage}
              />
            </div>
          </div>
        ) : (
          <div className="row mt-3">
            <div className="col-md-12">
              <form>
                <div className="form-group row mt-2">
                  <div className="col-10 offset-1 text-center">
                    <h6>
                      <b>
                        Welcome to the Brand Page Event customizer. Please click
                        on the button below to start setting up events.
                      </b>
                    </h6>
                    <div>
                      {loader ? (
                        <MDBBtn
                          type="button"
                          color="#39729b"
                          style={{
                            borderRadius: "20px",
                            backgroundColor: "#39729b",
                            color: "#ffffff",
                          }}
                          className="waves-effect z-depth-1a mt-4"
                          size="md"
                          disabled
                        >
                          Your Menu Page will be ready in a seconds
                          <div
                            className="spinner-grow spinner-grow-sm ml-3"
                            role="status"
                          >
                            <span className="sr-only">Loading...</span>
                          </div>
                        </MDBBtn>
                      ) : (
                        <MDBBtn
                          type="button"
                          color="#39729b"
                          style={{
                            borderRadius: "20px",
                            backgroundColor: "#39729b",
                            color: "#ffffff",
                          }}
                          className="waves-effect z-depth-1a mt-4"
                          size="md"
                          onClick={createBrandPageEvent}
                        >
                          Start Event customization
                        </MDBBtn>
                      )}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
        <div className="row mt-3">
          {events.length < 1 ? (
            <span></span>
          ) : (
            events.map((event, index) => {
              return (
                <div
                  className="col-md-3 ml-2"
                  style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "20px",
                    background: `url(${event.headerImage}) no-repeat fixed center`,
                    opacity: "12",
                  }}
                  key={event}
                >
                  <div className="row mt-3" style={{ color: "#ffffff" }}>
                    <div className="col-md-12">
                      <MDBBtn
                        type="button"
                        color="#39729b"
                        style={{
                          borderRadius: "20px",
                          backgroundColor: "#39729b",
                          color: "#ffffff",
                          padding: "5px",
                        }}
                        className="waves-effect z-depth-1a"
                        size="sm"
                      >
                        Edit
                      </MDBBtn>
                      <MDBBtn
                        type="button"
                        color="#39729b"
                        style={{
                          borderRadius: "20px",
                          backgroundColor: "#39729b",
                          color: "#ffffff",
                          padding: "5px",
                        }}
                        className="waves-effect z-depth-1a"
                        size="sm"
                      >
                        Delete
                      </MDBBtn>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        <CreateEvent
          constName={modalCreateEvent}
          functionName={toogleCreateEvent}
          brandPageEventId={brandPageEventId}
        />

        <div className="mt-5 font-small text-center pb-3">
          <div onClick={props.functionName} className="black-text">
            <MDBIcon icon="chevron-circle-left" /> Back
          </div>
        </div>
      </MDBModalBody>
    </MDBModal>
  );
}
