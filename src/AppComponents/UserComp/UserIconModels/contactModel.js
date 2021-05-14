import React from 'react';
import { 
   MDBModal, MDBModalBody, MDBIcon, MDBBtn
  } from 'mdbreact';

export default function ContactModel(props) {
    
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
                            <div className="col-10 text-center">
                                <img src="/images/others/contactlogo.png" 
                                    className="img-fluid" 
                                    style={{borderRadius:'500px',width:'80px'}} 
                                    alt="family logo"/>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-10 text-center">
                                <h4 style={{fontWeight:'400'}}> Contact Us</h4>
                            </div>
                        </div>
                        <form>
                        <div className="form-group row mt-3">
                            <div className="col-10 text-left">
                                <input type="text" className="form-control" placeholder="Name" style={inputStyle} />
                            </div>
                        </div>
                        <div className="form-group row mt-4">
                            <div className="col-10 text-left">
                                <input type="email" className="form-control" placeholder="Email Address" style={inputStyle} />
                            </div>
                        </div>
                        <div className="form-group row mt-3">
                            <div className="col-10 text-left">
                                <input type="text" className="form-control" placeholder="Phone Number" style={inputStyle} />
                            </div>
                        </div>
                        <div className="form-group row mt-3">
                            <div className="col-10 text-center">
                                <textarea className="form-control" style={inputStyle}>
                                    Subject
                                </textarea>
                            </div>
                        </div>
                        <div className="form-group row mt-5">
                            <div className="col-10 text-center">
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
