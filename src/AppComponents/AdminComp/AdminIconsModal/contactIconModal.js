import React from 'react';
import { 
    MDBModal, MDBModalBody, MDBBtn, MDBIcon, MDBInputGroup
  } from 'mdbreact';
import DeactivateButton from '../../DeactivateButton';



export default function ContactIconModal(props) {

    return (
        <MDBModal isOpen={props.constName} toggle={props.functionName}  centered >
            <MDBModalBody>
                 <div className="mt-1 font-small text-left pb-3">
                        <div onClick={props.functionName} className="black-text">
                            <MDBIcon icon="chevron-circle-left" /> Back 
                        </div>
                </div>

                <h6 className="mt-5"><strong>Edit Contact </strong></h6>
               
                <div className="row mt-5">
                    <div className="col-md-12">
                        <form>
                            <div className="row form-group">
                                <div className="col-md-8 offset-md-2">
                                    <MDBInputGroup
                                        material
                                        containerClassName="mt-0"
                                        type="text"
                                        hint="Enter Phone Number"
                                        append={
                                            <>
                                                <MDBIcon icon="plus-circle" className="mt-3 ml-3"/>
                                                <MDBIcon icon="minus-circle" className="mt-3 ml-3" />
                                            </>
                                        }
                                    />
                                </div>
                            </div>

                            <div className="row form-group">
                                <div className="col-md-8 offset-md-2">
                                    <MDBInputGroup
                                        material
                                        containerClassName="mt-0"
                                        type="email"
                                        hint="Enter Email"
                                        append={
                                            <>
                                                <MDBIcon icon="plus-circle" className="mt-3 ml-3"/>
                                                <MDBIcon icon="minus-circle" className="mt-3 ml-3" />
                                            </>
                                        }
                                    />
                                </div>
                            </div>

                            <div className="row form-group">
                                <div className="col-md-8 offset-md-2">
                                    <MDBInputGroup
                                        material
                                        containerClassName="mt-0"
                                        type="text"
                                        hint="Enter Address"
                                        append={
                                            <>
                                                <MDBIcon icon="plus-circle" className="mt-3 ml-3"/>
                                                <MDBIcon icon="minus-circle" className="mt-3 ml-3" />
                                            </>
                                        }
                                    />
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-8 offset-md-2">
                                    <textarea
                                    className="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="5"
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12 text-center">
                                <MDBIcon icon="plus-circle" className="mt-3 ml-3"/>
                                </div>
                            </div>
                                
                            <div className="row">
                                <div className="col-md-10 offset-md-2">
                                <DeactivateButton /> 
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
                        </form>
                    </div>
                </div>

                
                

               <div className="mt-5 font-small text-center pb-3">
                        <div onClick={props.functionName} className="black-text">
                            <MDBIcon icon="chevron-circle-left" /> Back 
                        </div>
                </div>

            </MDBModalBody>
        </MDBModal>
    )
}
