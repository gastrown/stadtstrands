import React, { useState, useEffect } from "react";
import Location from './Location';
import {MDBContainer, MDBRow} from 'mdbreact';
import Axios from 'axios';


function Locations (props) {

    const [locations, setLocations] = useState([]);

    useEffect(() => {
        Axios.get(`https://stadstrandnodeapi.herokuapp.com/api/v1/brandpage/admin/${props.adminId}`)
            .then((response) => {
                const data = response.data.data;
                setLocations(data);
            })
            .catch((e) => {
                setLocations([]);
                console.log(e.response)
            });
      }, []);

        
    
        return (
            <MDBContainer>
                <MDBRow style={{alignItems:"center"}}>
                     {
                         (locations < 1) ? 
                            <div className='col-12 mt-2 mb-2'>
                                <div className="spinner-border fast ml-2" role="status">
                                    <span className="sr-only mt-2">Loading...</span>
                                </div>
                            </div>
                         :  
                         locations.map( (location) => {
                             return (
                                <Location 
                                    key={location.id}
                                    location={location}
                                />
                             );
                         })
                     }
                </MDBRow>
            </MDBContainer>
        );
    
}

export default Locations;