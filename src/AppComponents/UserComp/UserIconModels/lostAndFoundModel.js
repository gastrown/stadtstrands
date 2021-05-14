import React from 'react';
import { 
   MDBModal, MDBModalBody, MDBIcon, MDBBtn
  } from 'mdbreact';

export default function LostAndFoundModel(props) {
    
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
                                <img src="/images/others/lostandfoundlogo.jpeg" 
                                    className="img-fluid" 
                                    style={{borderRadius:'500px',width:'120px'}} 
                                    alt="family logo"/>
                            </div>
                        </div>
                        
                        <form>
                        <div className="form-group row mt-3">
                            <div className="col-9 text-left">
                                <input type="text" className="form-control" placeholder="Lost Item" style={inputStyle} />
                            </div>
                        </div>
                        <div className="form-group row mt-3">
                            <div className="col-5 offset-2 text-center">
                                <label>Date of loss</label>
                                <input type="date" className="form-control" placeholder="Location" style={inputStyle} />
                           
                            </div>
                        </div>

                        <div className="form-group row mt-4">
                            <div className="col-9 text-left">
                                <input type="email" className="form-control" placeholder="Email" style={inputStyle} />
                            </div>
                        </div>
                        
                        <div className="form-group row mt-5">
                            <div className="col-9 text-center">
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
