import React from 'react';
import { MDBRow, MDBCol } from 'mdbreact';

const logoupload = (props) => {
 
    return(
        <MDBRow>
            <MDBCol size="12" >
                <form>    
                    <div className="form-group">
                        <div className="col-md-12">
                        <input type="text" placeholder="Name of your location" className="form-control text-center" style={{border:'none'}} />
                        </div>
                    </div>   
                      
                </form>
            </MDBCol>
        </MDBRow>
    );
}

export default logoupload;