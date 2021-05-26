import React from 'react';
import { 
    MDBModal, MDBModalBody, MDBBtn, MDBIcon, MDBInputGroup
  } from 'mdbreact';
import DeactivateButton from '../../DeactivateButton';

const imageFileStyle = {
    padding:'10px',
    border:'1px solid #cccccc',
    marginLeft: '12px',
    width:'90%',
    borderRadius:"10px",
    textAlign:'center',
    fontSize:'12px',
    color:'#000000'

}

const onChangeFile = (event) => {
    console.log('event.target.files[0]', event.target)
}

export default function ContactIconModal(props) {

    return (
        <MDBModal isOpen={props.constName} toggle={props.functionName}  centered >
            <MDBModalBody>
            <div className="mt-1 font-small text-left">
                <div onClick={props.functionName} className="black-text">
                    <MDBIcon icon="chevron-circle-left" /> Back 
                </div>
            </div>
            <hr/>

            <h6 className="mt-2"><strong>Edit About </strong></h6>

            <form>
                 <div className="row">
                     <div className="col-md-10 offset-md-1">

                        <div className="form-group row mt-5">
                            <div className="col-md-8 offset-md-2 text-center">
                                <input  type="file" 
                                        id="file" 
                                        style={{display: "none"}}
                                        onChange={(e) => onChangeFile(e)}/>
                                <label htmlFor="file" style={imageFileStyle}>
                                        Upload About image <span className='fa fa-download' style={{backgroundColor:'#39729b', color:'#ffffff', padding:'5px', borderRadius:'10px'}}> </span>
                                </label>
                            </div>
                        </div>
                     </div>
                </div>
                <hr/>
               
                <div className="row mt-3">
                    <div className="col-md-12">
                            <div className="row form-group">
                                <div className="col-md-8 offset-md-2">
                                    <MDBInputGroup
                                        material
                                        containerClassName="mb-3 mt-0"
                                        type="text"
                                        hint="Enter Title"
                                        append={
                                            <div>
                                                <MDBIcon icon="minus-circle" className="mt-3 ml-3" />
                                            </div>
                                        }
                                    />
                                </div>
                            </div>

                            <div className="row form-group">
                                <div className="col-md-8 offset-md-2">
                                    <textarea className="form-control" rows="4" style={{border:'1px dotted #cccccc',borderRadius:'20px'}}>
                                        Enter about text
                                    </textarea>
                                </div>
                            </div>

                            <div className="row form-group">
                                <div className="col-md-8 offset-md-2">
                                    <textarea className="form-control" rows="4" style={{border:'1px dotted #cccccc',borderRadius:'20px'}}>
                                        Enter new session
                                    </textarea>
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
                                    Add Section
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
