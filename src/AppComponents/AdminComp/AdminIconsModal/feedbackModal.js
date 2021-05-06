import React from 'react';
import { 
    MDBModal, MDBModalBody, MDBBtn, MDBInputGroup, MDBIcon
  } from 'mdbreact';
import DeactivateButton from '../../DeactivateButton';

export default function FeedbackModal(props) {
    
    return (
        <MDBModal isOpen={props.constName} toggle={props.functionName}  centered >
            <MDBModalBody>
                <h6><b>Edit Feedback</b></h6>
                <form>
                    <div className="row form-group mt-5">
                        <div className="col-md-10 offset-md-1">
                            <MDBInputGroup
                                material
                                containerClassName="mb-3 mt-0"
                                type="text"
                                hint=""
                                append={
                                    <>
                                        <MDBIcon icon="plus-circle" className="mt-3 ml-3"/>
                                        <MDBIcon icon="minus-circle" className="mt-3 ml-3" />
                                    </>
                                }
                            />
                        </div>
                    </div>
                    
                    <div className="row form-group mt-2">
                        <div className="col-md-10 offset-md-1">
                            <MDBInputGroup
                                material
                                containerClassName="mb-3 mt-0"
                                type="text"
                                hint=""
                                append={
                                    <>
                                        <MDBIcon icon="plus-circle" className="mt-3 ml-3"/>
                                        <MDBIcon icon="minus-circle" className="mt-3 ml-3" />
                                    </>
                                }
                            />
                        </div>
                    </div>

                    <div className="row form-group mt-2">
                        <div className="col-md-10 offset-md-1">
                            <MDBInputGroup
                                material
                                containerClassName="mb-3 mt-0"
                                type="text"
                                hint=""
                                append={
                                    <>
                                        <MDBIcon icon="plus-circle" className="mt-3 ml-3"/>
                                        <MDBIcon icon="minus-circle" className="mt-3 ml-3" />
                                    </>
                                }
                            />
                        </div>
                    </div>

                    <div className="row form-group mt-3">
                        <div className="col-md-10 offset-md-1">
                        <textarea
                        style={{border:'1px dotted #000000'}}
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="5"
                        />
                        </div>
                    </div>
                    <div className="mt-2">
                        <MDBBtn
                          type="button"
                          color="#39729b"
                          style={{borderRadius:'20px', backgroundColor:'#39729b', color:'#ffffff'}}
                          className="waves-effect z-depth-1a"
                          size="sm"
                          >
                          Create new question
                        </MDBBtn>
                    </div>

                    <DeactivateButton /> 

                    <div className="mt-2">
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

                    <div className="mt-5 font-small text-center pb-3">
                        <div onClick={props.functionName} className="black-text">
                            <MDBIcon icon="chevron-circle-left" /> Back 
                        </div>
                    </div>

                </form>
            </MDBModalBody>
        </MDBModal>
    )
}
