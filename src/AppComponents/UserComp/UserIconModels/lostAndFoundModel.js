import React, { useState, useEffect } from "react";
import { MDBModal, MDBModalBody, MDBIcon, MDBBtn } from "mdbreact";
import Axios from "axios";

export default function LostAndFoundModel(props) {
  const brandPageId = props.pageDetails.id;

  const [fields, setFields] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get(
      `https://stadtstrandapp.ecrdeveloper.website/api/v1/brandpagelostandfound/${brandPageId}`
    )
      .then((response) => {
        setFields(response.data.data.LostAndFounds);
        setLoading(false);
      })
      .catch((e) => {});
  }, [brandPageId]);

  const inputStyle = {
    borderRadius: "10px",
    border: "1px dotted #000000",
    fontSize: "12px",
  };

  return (
    <MDBModal
      isOpen={props.constName}
      toggle={props.functionName}
      size="md"
      centered
    >
      <MDBModalBody>
        <div className="row">
          <div className="col-2 text-left">
            <div onClick={props.functionName} className="black-text">
              <MDBIcon icon="chevron-circle-left" />
            </div>
          </div>
          <div className="col-10">
            <div className="row">
              <div className="col-10 text-center">
                <img
                  src="/images/others/lostandfoundlogo.jpeg"
                  className="img-fluid"
                  style={{ borderRadius: "500px", width: "120px" }}
                  alt="family logo"
                />
              </div>
            </div>

            {loading ? (
              <div className="col-12 mt-2 mb-2 text-center">
                <div
                  className="spinner-grow text-primary fast ml-2"
                  role="status"
                >
                  <span className="sr-only mt-2">Loading...</span>
                </div>
              </div>
            ) : fields.length < 1 ? (
              <h4>No Field Found</h4>
            ) : (
              <div>
                <form>
                  <div className="form-group row">
                    <div className="col-10 text-left">
                      {fields.map((field) => {
                        return field.formType === "textarea" ? (
                          <textarea
                            key={field.id}
                            className="form-control mt-3"
                            defaultValue={field.title}
                          ></textarea>
                        ) : (
                          <input
                            key={field.id}
                            type={field.formType}
                            className="form-control mt-3"
                            placeholder={field.title}
                            style={inputStyle}
                          />
                        );
                      })}
                    </div>
                  </div>

                  <div className="form-group row mt-5">
                    <div className="col-9 text-center">
                      <MDBBtn
                        type="button"
                        color="blue"
                        style={{ borderRadius: "20px" }}
                        className="waves-effect z-depth-1a"
                        size="sm"
                      >
                        Send
                      </MDBBtn>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </MDBModalBody>
    </MDBModal>
  );
}
