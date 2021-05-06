import React from 'react';
import { 
    MDBModal, MDBModalBody, MDBBtn, MDBIcon
  } from 'mdbreact';
import DeactivateButton from '../../DeactivateButton';


export default function ContactIconModal(props) {

    return (
        <MDBModal isOpen={props.constName} toggle={props.functionName}  centered >
            <MDBModalBody>
            <div className="mt-1 font-small text-left">
                <div onClick={props.functionName} className="black-text">
                    <MDBIcon icon="chevron-circle-left" /> Back 
                </div>
            </div>
            <h6 className="mt-2"><strong>Edit Taxi url </strong></h6>

            <hr/>

            <form>
                <div className="row mt-3">
                    <div className="col-md-12">
                            <div className="row form-group">
                                <div className="col-md-8 offset-md-2">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        style={{border:'1px dotted #cccccc',borderRadius:'20px'}} 
                                        placeholder="Enter taxi url"
                                    />
                                </div>
                            </div>
                            <div className="form-group row mt-1">
                                <div className="col-md-12 text-center">
                                <MDBBtn
                                    type="button"
                                    color="#39729b"
                                    style={{borderRadius:'20px', color:'#000000'}}
                                    className="waves-effect z-depth-1a"
                                    size="sm"
                                    >
                                    add more Taxi
                                </MDBBtn>
                                </div>
                            </div>


                            <div className="form-group row mt-4">
                                <div className="col-md-12 text-center">
                                <MDBBtn
                                    type="button"
                                    color="#39729b"
                                    style={{borderRadius:'20px', backgroundColor:'#39729b', color:'#ffffff'}}
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
                            
                    </div>
                </div>
            </form>

                
                
            <div className="mt-5 font-small text-center pb-3">
                <div onClick={props.functionName} className="black-text">
                    <MDBIcon icon="chevron-circle-left" /> Back 
                </div>
            </div>

            </MDBModalBody>
        </MDBModal>
    )
}