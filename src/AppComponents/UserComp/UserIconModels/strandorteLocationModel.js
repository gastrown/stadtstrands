import React, { useState } from 'react';
import { 
   MDBModal, MDBModalBody, MDBIcon
  } from 'mdbreact';
  import { Link } from 'react-router-dom';

export default function StrandorteLocationModel(props) {
    
    const [LocationDetails] = useState({
        brandpageid:'hjhdsklsdgosldjssdsdhs',
        locations: [
            {
                id:'1',
                locationId:'789322923hksjd922',
                locationName:'Location A',
                locationImageUrl:'https://mdbootstrap.com/img/Photos/Others/images/86.jpg'
            },
            {
                id:'2',
                locationId:'hfidhdshdks87386983',
                locationName:'Location B',
                locationImageUrl:'https://mdbootstrap.com/img/Photos/Others/images/12.jpg'
            },
            {
                id:'3',
                locationId:'fdfffevsdsdsadsd',
                locationName:'Location C',
                locationImageUrl:'https://mdbootstrap.com/img/Photos/Others/images/55.jpg',
            },
            
        ]
    })

    const iconStyle = { 
        borderRadius:'15px',
        width:'300px',
        height:'100px',
        // objectFit:'scale-down'
    }

    return (
        <MDBModal isOpen={props.constName} toggle={props.functionName} size='md' centered>
            <MDBModalBody>
                <div className="row">
                    <div className="col-3 text-left">
                        <div onClick={props.functionName}  className="black-text">
                            <MDBIcon icon="chevron-circle-left" /> 
                        </div>
                    </div>
                    <div className="col-8 text-left">
                        <h4 style={{fontWeight:'400'}}> Pick a Location</h4>
                    </div>
                </div>
                <hr/>

                <div className="row">
                    <div className="col-12 col-md-12 text-center">
                        <div className="row">
                            {
                                LocationDetails.locations.map( location => {
                                    return(
                                        <div className="col-4 text-center mt-2" key={location.id}>
                                            <Link to={{
                                            pathname:`/location-details/${location.locationId}`,
                                            }}>
                                                <div>
                                                    <img src={location.locationImageUrl}
                                                        className="img-fluid" style={iconStyle} alt={location.locationName} />
                                                </div>
                                            </Link>
                                            <div className="mt-2"><b>{location.locationName}</b></div>
                                        </div>
                                    );
                                })
                            }
                           
                        </div>
                    </div>
                </div>
               
            </MDBModalBody>
        </MDBModal>
    )
}
