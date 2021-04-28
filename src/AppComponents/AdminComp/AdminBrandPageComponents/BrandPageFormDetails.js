import React from 'react';
import { MDBRow, MDBCol, MDBBtn } from 'mdbreact';


export default function BrandPageFormDetails() {
    const imgstyle = {
        width:"130px",
        height:"110px",
        borderRadius:"15px",
        backgroundColor:'#ffffff', 
        color:'#000000', 
        padding:'10px',
        border:'2px solid #cccccc',
        fontSize: '14px'
    }

    const uploadDiv = {
        textAlign:'center',
        display: 'none'
    }

    const imageFileStyle = {
        padding:'10px',
        border:'1px dotted #CCCCCC',
        marginLeft: '12px',
        width:'60%',
        boxShadow:'1px 1px 0.5px 1px #888888',
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
                        <input type="file" id="file" style={uploadDiv}
                                        onChange={(e) => onChangeFile(e)}/>
                        <label htmlFor="file" style={imgstyle}>
                            
                            <br/>
                            Logo 
                        </label>
                    </div>  
                    <div className="form-group mt-4">
                        <input style={{border:'1px dotted black', borderRadius:'10px'}} 
                        type="text" className="form-control text-center" 
                        placeholder="Enter welcome text here" />
                    </div> 
                    <div>
                        <input  type="file" 
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

                    <div className="mt-2">
                        <MDBBtn
                          type="button"
                          color="blue"
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
