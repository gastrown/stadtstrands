import React from 'react';
import { MDBRow, MDBCol, MDBInput, MDBIcon } from 'mdbreact';

const logoupload = (props) => {
    const imgstyle = {
        width:"130px",
        height:"110px",
        borderRadius:"15px",
        backgroundColor:'#ffffff', 
        color:'#39729b', 
        padding:'10px',
        border:'2px solid #cccccc',
        fontSize: '14px'
    }

    const uploadDiv = {
        textAlign:'center',
        display: 'none'
    }

    const onChangeFile = (event) => {
        console.log('event.target.files[0]', event.target)
    }

    return(
        <MDBRow>
            <MDBCol size="12" >
                <form>         
                    <div>
                        <input type="file" id="file" style={uploadDiv}
                                        onChange={(e) => onChangeFile(e)}/>
                        <label htmlFor="file" style={imgstyle}>
                            <MDBIcon icon="cloud-download-alt" />
                            <br/>
                            Upload <br/> a <br/> logo 
                        </label>
                    </div>  
                    <div>
                        <MDBInput type="text" label="Name of your location" className="text-center"/>
                    </div>   
                      
                </form>
            </MDBCol>
        </MDBRow>
    );
}

export default logoupload;