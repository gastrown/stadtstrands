import React from 'react';
import { 
   MDBModal, MDBModalBody, MDBIcon, MDBBtn
  } from 'mdbreact';

export default function ReservationModel(props) {
    
    const inputStyle = {
        borderRadius:'10px',
        border:'1px dotted #000000',
        fontSize:'12px'
    }
    
    return (
        <MDBModal isOpen={props.constName} toggle={props.functionName} size='md' centered>
            <MDBModalBody>
                <div className="row">
                    <div className="col-2 text-left">
                        <div onClick={props.functionName}  className="black-text">
                            <MDBIcon icon="chevron-circle-left" /> 
                        </div>
                    </div>
                    <div className="col-10">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h5 style={{fontWeight:'400'}}> Reservation Form</h5>
                            </div>
                        </div>
                        <form>
                        <div className="form-group row mt-3">
                            <div className="col-11 text-center">
                                <input type="text" className="form-control" placeholder="Name" style={inputStyle} />
                            </div>
                        </div>
                        <div className="form-group row mt-4">
                            <div className="col-11 text-center">
                                <input type="email" className="form-control" placeholder="Email Address" style={inputStyle} />
                            </div>
                        </div>
                        <div className="form-group row mt-3">
                            <div className="col-11 text-center">
                                <input type="text" className="form-control" placeholder="Location" style={inputStyle} />
                            </div>
                        </div>
                        <div className="form-group row mt-3">
                            <div className="col-5 ml-3 text-center">
                                <label>Date</label>
                                <input type="date" className="form-control" placeholder="Location" style={inputStyle} />
                            </div>
                            <div className="col-5 text-center">
                                <label>Time</label>
                                <input type="time" className="form-control" placeholder="Location" style={inputStyle} />
                            </div>
                        </div>
                        <div className="form-group row mt-3">
                            <div className="col-11 text-center">
                                <textarea className="form-control" style={inputStyle}>
                                    Additional Message
                                </textarea>
                            </div>
                        </div>
                        <div className="form-group row mt-5">
                            <div className="col-11 text-center">
                                <MDBBtn
                                type="button"
                                color="blue"
                                style={{borderRadius:'20px'}}
                                className="waves-effect z-depth-1a"
                                size="sm"
                                >
                                Send
                                </MDBBtn>
                            </div>
                        </div>

                        </form>
                    </div>
                </div>

               
            </MDBModalBody>
        </MDBModal>
    )
}
