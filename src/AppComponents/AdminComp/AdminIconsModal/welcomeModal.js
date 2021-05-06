import React from 'react';
import { 
    MDBModal, MDBModalBody, MDBBtn, MDBIcon
  } from 'mdbreact';

export default function welcomeModal(props) {
    const imageFileStyle = {
        padding:'10px',
        border:'1px dotted #CCCCCC',
        marginLeft: '12px',
        width:'60%',
        borderRadius:"10px",
        textAlign:'center',
        fontSize:'12px',
        backgroundColor:'#ffffff'
    }

    const onChangeFile = (event) => {
        console.log('event.target.files[0]', event.target)
    }


    return (
        <MDBModal isOpen={props.constName} toggle={props.functionName}  centered>
            <MDBModalBody>
                <h3>Welcome</h3>
                <form>
                    <div className="form-group mt-5">
                        <input type="file" className="form-control"
                               id="file" 
                               style={{display: "none"}}
                               onChange={(e) => onChangeFile(e)}/>
                        <label htmlFor="file" style={imageFileStyle}>
                                 Add location image 
                                <span className='fa fa-download ml-3' 
                                      style={{backgroundColor:'#39729b', color:'#ffffff', padding:'5px', borderRadius:'10px'}}> 
                                </span>
                        </label>
                    </div>
                    <div className="row form-group mt-4">
                        <div className="col-md-8 offset-md-2 mt-4">
                            <input 
                                placeholder="Enter welcome text here"
                                type="text" 
                                className="form-control text-center" 
                                id="Welcome_message" 
                                style={{border:'1px dotted black'}} />
                        </div>
                    </div>

                    <div className="mt-5">
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
