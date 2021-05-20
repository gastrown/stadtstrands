import React from 'react';
import {Link} from 'react-router-dom'

const location = (props) => {
    const locationimgstyle = {
        borderRadius:"15px",
    }

    return(
               <div className="col-6 col-md-4" >
                   <Link to={{
                                pathname:`/admin/location/manager/${props.location.id}`,
                            }} 
                            style={{color:'black'}}>
                        <div>
                            <img className="img-fluid" 
                                style={locationimgstyle} 
                                src={props.location.locationImagePath} 
                                alt={props.location.name} 
                            />
                        </div>
                        <p style={{fontSize:'11px',marginTop:'4px'}}>
                            {props.location.name}
                        </p>
                    </Link>
               </div>
    );
}

export default location;