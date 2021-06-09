import React, { useState, useEffect } from "react";
import { MDBModal, MDBModalBody, MDBIcon, MDBInput, MDBBtn } from "mdbreact";
import ConfirmationModal from "../../AppComponents/ConfirmationModal";
import Axios from "axios";

const UserFormManagerDetails = (props) => {
  const brandPageDetails = props.pageDetails;
  const brandPageId = brandPageDetails.BrandPageForm.id;
  const [userFormModal, setUserFormModal] = useState(true);
  const [radio, setRadio] = useState(true);
  const [brandPageFormFields, setBrandPageFormFields] = useState();

  useEffect(() => {
    Axios.get(
      `https://stadtstrandapp.ecrdeveloper.website/api/v1/brandpageform/${brandPageId}`
    )
      .then((response) => {
        setBrandPageFormFields(response.data.data.FormItems);
        //setBrandPageFormFields(null);
      })
      .catch((e) => {
        console.log(e.response);
      });
  }, [brandPageId]);

  const toggleRadio = () => {
    setRadio(!setRadio);
  };

  const toggleForm = () => {
    setUserFormModal(!userFormModal);
  };

  const formInputStyle = {
    borderRadius: "20px",
    border: "1px dotted #000000",
    fontSize: "12px",
  };

  const [modalSuccess, setModalSuccess] = useState(false);

  const submitApplication = () => {
    setModalSuccess(!modalSuccess);
  };

  return (
    <MDBModal
      isOpen={userFormModal}
      toggle={toggleForm}
      size="sm"
      backdrop={false}
    >
      <MDBModalBody>
        <h5 className="text-center">
          <MDBIcon icon="map-marker-alt" /> {brandPageDetails.name}
        </h5>
        {brandPageFormFields ? (
          <div className="mt-3">
            {console.log(brandPageFormFields)}
            <form>
              {brandPageFormFields.map((field) => {
                return (
                  <div className="form-group row" key={field.id}>
                    <div className="col-12 col-md-12">
                      <input
                        type={field.formType}
                        className="form-control"
                        placeholder={field.title}
                        style={formInputStyle}
                        required={field.required}
                      />
                    </div>
                  </div>
                );
              })}

              <div className="form-group row mt-4">
                <div className="col-2 col-md-2">
                  <MDBInput
                    onClick={toggleRadio}
                    checked={radio}
                    type="radio"
                    id="radio2"
                    style={{ fontSize: "8px" }}
                  />
                </div>
                <div className="col-9 col-md-9">
                  <label style={{ fontSize: "11px" }}>
                    By submitting this form, i agree to receive newsletters &
                    updates from stadstrand
                  </label>
                </div>
              </div>

              <div className="form-group row text-center mt-3 mb-3">
                <div className="col-12">
                  <MDBBtn
                    type="button"
                    color="blue"
                    style={{ borderRadius: "20px" }}
                    className="waves-effect z-depth-1a"
                    size="sm"
                    //onClick={submitApplication}
                    onClick={toggleForm}
                  >
                    finish
                  </MDBBtn>

                  <ConfirmationModal
                    constName={modalSuccess}
                    functionName={submitApplication}
                    successMessage="Great, your form has been submitted successfully."
                  />
                </div>
              </div>
            </form>
          </div>
        ) : (
          <div className="row mt-5">
            <div className="col-12 text-center">
              <div className="spinner-grow text-primary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <h5>Loading brand page form..</h5>
            </div>
          </div>
        )}
      </MDBModalBody>
    </MDBModal>
  );
};

export default UserFormManagerDetails;
