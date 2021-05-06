import React from 'react';
import { 
    MDBModal, MDBModalBody, MDBIcon, MDBBtn
  } from 'mdbreact';


export default function CreateJobModal(props) {
    const imageFileStyle = {
        padding:'10px',
        border:'1px solid #ffffff',
        marginLeft: '12px',
        width:'90%',
        borderRadius:"10px",
        textAlign:'center',
        fontSize:'12px',
        color:'#ffffff'
    
    }

    
    const onChangeFile = (event) => {
        console.log('event.target.files[0]', event.target)
    }

    return (
        <MDBModal isOpen={props.constName} toggle={props.functionName}  centered size="lg">
            <MDBModalBody>
                <h6 className="mt-2"><strong>Create Job</strong></h6>
                <hr/>
                <div className="row">
                     <div className="col-md-10 offset-md-1" style={{
                         background:'url("/images/others/stadtstrandFeature1.jpeg") no-repeat fixed center',
                         height:'150px', borderRadius:'20px'}}>

                        <div className="form-group row mt-5">
                            <div className="col-md-8 offset-md-2 text-center">
                                <input type="file" id="file" style={{display: "none"}}
                                                    onChange={(e) => onChangeFile(e)}/>
                                    <label htmlFor="file" style={imageFileStyle}>
                                                        Upload image <span className='fa fa-download' style={{backgroundColor:'#39729b', color:'#ffffff', padding:'5px', borderRadius:'10px'}}> </span>
                                    </label>
                                </div>
                            </div>
                     </div>
                </div>

                <div className="row form-group mt-3">
                    <div className="col-md-4 mt-2">
                    </div>
                    <div className="col-md-4 mt-2">
                        <input type="text" 
                               name="" 
                               placeholder="Job title" 
                               className="form-control text-center"
                               style={{borderRadius:'20px',fontSize:'10px'}}
                               />
                    </div>
                    <div className="col-md-4 mt-2">
                    </div>
                </div>

                <div className="row form-group mt-3">
                    <div className="col-md-12">
                        <textarea 
                            className="form-control text-left"
                            style={{borderRadius:'10px',fontSize:'10px'}}
                            rows="3">
                                Job Description
                        </textarea>
                    </div>
                </div>

                <div className="form-group row mt-5">
                    <div className="col-md-12 text-center">
                        <MDBBtn
                            type="button"
                            color="#39729b"
                            style={{borderRadius:'20px', backgroundColor:'#39729b', color:'#ffffff'}}
                            className="waves-effect z-depth-1a"
                            size="sm"
                            >
                            Create advert
                        </MDBBtn>
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
