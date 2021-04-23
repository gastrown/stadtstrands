import React from 'react';
import {MDBCol} from 'mdbreact';

const location = (props) => {
    const locationimgstyle = {
        borderRadius:"15px",
    }
    return(
               <MDBCol size="4" >
                   <div>
                        <img className="img-fluid" style={locationimgstyle} src={props.locationimg} alt={props.altname} />
                    </div>
                    <p style={{fontSize:'11px',marginTop:'4px'}}>{props.locationname}</p>
               </MDBCol>
    );
}

export default location;