import React from 'react';
import { 
    MDBModal, MDBModalBody, MDBBtn, MDBIcon
  } from 'mdbreact';

import DeactivateButton from '../../DeactivateButton';

export default function freeIconModal(props) {
   

    const imageFileStyle = {
        padding:'10px',
        border:'1px dotted #CCCCCC',
        marginLeft: '12px',
        width:'90%',
        borderRadius:"10px",
        textAlign:'center',
        fontSize:'12px'
    }

    const circleFileStyle = {
        width: '95px',
        height: '95px',
        background: '#39729b',
        borderRadius: '50%',
        padding:'20px',
        textAlign:'center',
        fontSize:'10px',
        color:"#ffffff"
    }


    const onChangeFile = (event) => {
        console.log('event.target.files[0]', event.target)
    }

    return (
        <MDBModal isOpen={props.constName} toggle={props.functionName}  centered >
            <MDBModalBody>
                <h5><strong>Edit Free icon</strong></h5>
               
                <div className="row mt-5">
                    <div className="col-md-12">
                        <form>
                            <div className="form-group row">
                                <div className="col-md-8 offset-md-2 text-center">
                                <input type="file" id="file" style={{display: "none",borderRadius:"500px"}}
                                                    onChange={(e) => onChangeFile(e)}/>
                                    <label htmlFor="file" style={circleFileStyle}>
                                        <span className='fa fa-download' 
                                            style={{backgroundColor:'#39729b', color:'#ffffff', padding:'5px', borderRadius:'10px'}}> 
                                        </span> <br/>
                                        Upload icon 
                                    </label>
                                </div>
                            </div>
                            <div className="form-group row mt-5">
                                <div className="col-md-8 offset-md-2 text-center">
                                    <input type="file" id="file" style={{display: "none"}}
                                                        onChange={(e) => onChangeFile(e)}/>
                                        <label htmlFor="file" style={imageFileStyle}>
                                                            Upload header image/video <span className='fa fa-download' style={{backgroundColor:'#39729b', color:'#ffffff', padding:'5px', borderRadius:'10px'}}> </span>
                                        </label>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-8 offset-md-2 text-center">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Enter Title"
                                        style={{borderRadius:'10px'}}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-10 offset-md-1 text-center">
                                  <textarea className="form-control" style={{border:'1px dotted #000000'}} >
                                      Description
                                  </textarea>
                                </div>
                            </div>
                            
                            <div className="form-group row">
                                <div className="col-md-8 offset-md-2 text-center">
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

                {/* <div className="row mt-3">
                    <div className="col-3 col-md-3 mt-4">
                        <div style={menuList}>
                            Menu 1
                        </div>
                    </div>
                    <div className="col-3 col-md-3 mt-4">
                        <div style={menuListNew}>
                            
                        </div>
                    </div>
                </div> */}

               <DeactivateButton /> 

               <div className="mt-5 font-small text-center pb-3">
                        <div onClick={props.functionName} className="black-text">
                            <MDBIcon icon="chevron-circle-left" /> Back 
                        </div>
                </div>

            </MDBModalBody>
        </MDBModal>
    )
}
