import React from 'react';
import { 
    MDBModal, MDBModalBody, MDBIcon
  } from 'mdbreact';
import MapContainer from '../../MapContainer';

export default function WelcomeUserModal(props) {
    
    const descriptionStyle = {
        border:'1px dotted #ffffff',
        borderRadius:'10px',
        color:'#ffffff',
        padding:'5px'    
    }

    return (
        <MDBModal isOpen={props.constName} toggle={props.functionName} size='lg' centered>
            <MDBModalBody>
            <div className="container-fluid" style={
                { 
                    backgroundImage:`url(${props.pageDetails.brandpagewelcomedetail[0].welcomeimg})`,
                    boxShadow:'inset 0 0 0 2000px rgba(0, 0, 0, 0.6)',
                    backgroundRepeat:'no-repeat',
                    backgroundSize: '100% 100%',
                    height:'400px',
                    borderRadius:'15px'
                }
            }>
                    <div className="row" style={{padding:'10px',color:'#ffffff'}}>
                        <div className="col-md-12 text-center mt-5">
                            <h2 className="text-center" style={{marginTop:'50px',fontSize:'60px',fontWeight:'400'}}>
                            Welcome
                            </h2>  
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-8 offset-md-2 mt-4 text-center" style={{marginTop:'20px'}}>
                            <p style={descriptionStyle}>
                            {props.pageDetails.brandpagewelcomedetail[0].welcometext}
                            </p>
                        </div>
                    </div>
            </div>

            <div className="container-fluid mt-3">
                <div className="row">
                    <div className="col-12 col-md-12 text-center">
                        <h5>
                            <MDBIcon icon="map-marker-alt" /> {props.pageDetails.brandpagename}
                        </h5> 
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-12 col-md-12">
                        <MapContainer />
                    </div>
                </div>
            </div>
            </MDBModalBody>
        </MDBModal>
    )
}
