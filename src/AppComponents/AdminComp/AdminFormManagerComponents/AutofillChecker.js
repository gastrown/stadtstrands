import React, { useState } from 'react';
import { MDBRow, MDBCol,  MDBBtn,
  MDBModal, MDBModalBody, MDBInput } from 'mdbreact';

function AutoFillChecker() {
    const [modal, setModal] = useState(false);

    const toggle = () => {
      setModal(!modal);
    }

    return(
        <MDBRow>
            <MDBCol md={12} sm={12} xs={12} >
            <div className="text-center mb-2">
                    <MDBBtn
                    type="button"
                    color="blue"
                    style={{borderRadius:'20px'}}
                    className="waves-effect z-depth-1a"
                    size="sm"
                    onClick={toggle}
                    >
                    Auto Fill
                    </MDBBtn>
                    <MDBModal isOpen={modal} toggle={toggle} size="sm" centered>
                     
                      <MDBModalBody>
                       
                        <div>
                          <MDBInput label="Example label" outline size="sm" />
                        </div>

                        <div className="mt-3">
                        <MDBBtn
                          type="button"
                          color="blue"
                          style={{borderRadius:'20px'}}
                          className="waves-effect z-depth-1a"
                          size="sm"
                          >
                          Save
                        </MDBBtn>
                        </div>
                      </MDBModalBody>
                    </MDBModal>
                </div>

            </MDBCol>
        </MDBRow>
    );
}

export default AutoFillChecker;