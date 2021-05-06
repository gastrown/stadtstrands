import React from 'react';
import { 
    MDBModal, MDBModalBody, MDBBtn, MDBIcon
  } from 'mdbreact';



export default function DrinkIconModal(props) {

    const imageFileStyle = {
        padding:'10px',
        border:'1px dotted #CCCCCC',
        marginLeft: '12px',
        width:'90%',
        borderRadius:"10px",
        textAlign:'center',
        fontSize:'12px'
    }

    const onChangeFile = (event) => {
        console.log('event.target.files[0]', event.target)
      }


    return (
        <MDBModal isOpen={props.constName} toggle={props.functionName}  centered >
            <MDBModalBody>
                <h6 className="mt-5"><strong>Upload Drink Menu </strong></h6>
               
                <div className="row mt-5">
                    <div className="col-md-12">
                        <form>
                            <div className="form-group row">
                                <div className="col-md-8 offset-md-2 text-center">
                                <input type="file" id="file" style={{display: "none"}}
                                                    onChange={(e) => onChangeFile(e)}/>
                                    <label htmlFor="file" style={imageFileStyle}>
                                                        Upload menu image <span className='fa fa-download' style={{backgroundColor:'#39729b', color:'#ffffff', padding:'5px', borderRadius:'10px'}}> </span>
                                    </label>
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

                
                

               <div className="mt-5 font-small text-center pb-3">
                        <div onClick={props.functionName} className="black-text">
                            <MDBIcon icon="chevron-circle-left" /> Back 
                        </div>
                </div>

            </MDBModalBody>
        </MDBModal>
    )
}
