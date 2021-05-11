import React from 'react';
import AdminStyle from '../../../AppStyles/AdminStyles.module.css';
import { MDBRow, MDBCol, MDBBtn } from 'mdbreact';


export default function BrandPageFormDetails() {
    
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
        <MDBRow>
            <MDBCol size="12" >
                <form>         
                    <div className="form-group mt-2">
                        <input style={{border:'none', borderRadius:'10px'}} 
                        type="text" className="form-control text-center" 
                        placeholder="Enter location name" />
                    </div> 

                    <div>
                        <input type="file" id="file" className={AdminStyle.uploadDiv}
                                        onChange={(e) => onChangeFile(e)}/>
                        <label htmlFor="file" className={AdminStyle.imgInputStyle}>
                            
                            <br/>
                            Logo 
                        </label>
                    </div>  
                    <div className="form-group row mt-4">
                        <div className="col-md-8 offset-md-2">
                            <textarea style={{border:'1px dotted black', borderRadius:'10px'}} className="form-control text-center" >
                            Enter text here
                            </textarea>
                        </div>
                    </div> 
                    <div className="form-group row mt-4">
                        <div className="col-md-6 offset-md-3">
                            <input  type="file" 
                                    id="file" 
                                    style={{display: "none"}}
                                    onChange={(e) => onChangeFile(e)}/>
                            <label htmlFor="file" style={imageFileStyle}>
                                    Add Brand Page Background image 
                                    <span className='fa fa-download ml-3' 
                                        style={{backgroundColor:'#39729b', color:'#ffffff', padding:'5px', borderRadius:'10px'}}> 
                                    </span>
                            </label>
                        </div>
                    </div>

                    <div className="mt-2">
                        <MDBBtn
                          type="button"
                          color="#39729b"
                          style={{borderRadius:'20px'}}
                          className="waves-effect z-depth-1a"
                          size="sm"
                          >
                          Save
                        </MDBBtn>
                    </div>
                </form>
            </MDBCol>
        </MDBRow>
    )
}
