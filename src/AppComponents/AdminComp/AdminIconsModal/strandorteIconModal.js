import React from 'react';
import { 
    MDBModal, MDBModalBody, MDBBtn, MDBIcon
  } from 'mdbreact';
import DeactivateButton from '../../DeactivateButton';

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

export default function ContactIconModal(props) {

    return (
        <MDBModal isOpen={props.constName} toggle={props.functionName}  centered >
            <MDBModalBody>
            <form>
                 <div className="row">
                     <div className="col-md-10 offset-md-1" style={{
                         background:'url("/images/others/stadtstrandFeature1.jpeg") no-repeat fixed center',
                         height:'200px', borderRadius:'20px'}}>

                        <div className="form-group row mt-4"> 
                            <div className="col-md-6 offset-md-3 text-center ">
                                <input 
                                    type="text" 
                                    name="location_title" 
                                    className="form-control text-center"
                                    style={{background:"transparent",border:'1px dotted #ffffff',color:'#ffffff',borderRadius:'20px' }}
                                    placeholder="location title"
                                    />
                            </div>
                        </div>  
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
               
                <div className="row mt-3">
                    <div className="col-md-12">
                            <div className="row form-group">
                                <div className="col-md-8 offset-md-2">
                                <label htmlFor="exampleFormControlTextarea1">
                                    Upload Location text
                                </label>
                                    <textarea
                                    className="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="5"
                                    />
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
