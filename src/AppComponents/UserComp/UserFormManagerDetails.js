import React, { useState } from 'react';
import { MDBModal, MDBModalBody, MDBIcon, MDBInput, MDBBtn} from 'mdbreact';
import ConfirmationModal from '../../AppComponents/ConfirmationModal';

const UserFormManagerDetails = (props) => {
    const [userFormModal, setUserFormModal] = useState(true);

    const [radio, setRadio] = useState(true);

    const toggleRadio= () => { 
        setRadio(!setRadio); 
    }

    const toggleForm= () => { 
        setUserFormModal(!userFormModal); 
    }

    const formInputStyle = {
        borderRadius: '20px',
        border: '1px dotted #000000',
        fontSize:'12px'
    }

    const [modalSuccess, setModalSuccess] = useState(false);
    
    const submitApplication = () => { 
        setModalSuccess(!modalSuccess); 
    }

    return (
        <MDBModal isOpen={userFormModal} toggle={toggleForm} size="sm" backdrop={false}>
            <MDBModalBody>      
                <h5 className="text-center"><MDBIcon icon="map-marker-alt" /> {props.pageDetails.brandpagename}</h5>   
                <div className="mt-5">
                    <form>
                        <div className="form-group row">
                        <div className="col-12 col-md-12">
                                <input type="text" className="form-control" placeholder="Full Name" style={formInputStyle}/>   
                        </div>
                        </div>

                        <div className="form-group row">
                        <div className="col-12 col-md-12">
                                <input type="text" className="form-control" placeholder="Phone" style={formInputStyle}/>   
                        </div>
                        </div>

                        <div className="form-group row">
                        <div className="col-12 col-md-12">
                                <input type="email" className="form-control" placeholder="Email" style={formInputStyle}/>   
                        </div>
                        </div>

                        <div className="form-group row">
                        <div className="col-12 col-md-12">
                                <input type="password" className="form-control" placeholder="Password" style={formInputStyle}/>   
                        </div>
                        </div>

                        <div className="form-group row">
                        <div className="col-12 col-md-12">
                                <input type="number" className="form-control" placeholder="Table number" style={formInputStyle}/>   
                        </div>
                        </div>

                        <div className="form-group row">
                        <div className="col-12 col-md-12 text-center">
                                <span style={{fontSize:'12px'}}>Please enter the persons accompanying you to which you live in a household</span>   
                        </div>
                        </div>

                        <div className="form-group row">
                        <div className="col-9 col-md-9">
                                <input type="text" className="form-control" placeholder="Add member" style={formInputStyle}/>   
                        </div>
                        <div className="col-3 col-md-3 mt-2">
                        <MDBIcon icon="plus-circle" />
                        </div>
                        </div>
                    
                        <div className="form-group row mt-4">
                        <div className="col-2 col-md-2">
                            <MDBInput onClick={toggleRadio} checked={radio}  type="radio" id="radio2" style={{fontSize:'8px'}} />
                        </div>
                        <div className="col-9 col-md-9">
                            <label style={{fontSize:'11px'}}>By submitting this form, i agree to receive newsletters & updates from stadstrand</label>
                        </div>
                        </div>

                        <div className="form-group row text-center mt-3 mb-3">
                            <div className="col-12">
                                <MDBBtn
                                type="button"
                                color="blue"
                                style={{borderRadius:'20px'}}
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
            </MDBModalBody>
        </MDBModal>  
    )
}

export default UserFormManagerDetails
