import React from 'react';
import { 
   MDBModal, MDBModalBody, MDBIcon
  } from 'mdbreact';

export default function TaxiModel(props) {
    
    const taxiDetails = {
        brandpageid:'hjhdsklsdgosldjssdsdhs',
        taxis: [
            {
                id:'1',
                taxiName:'Taxi A',
                taxiUrl:'https://taxiA.com'
            },
            {
                id:'2',
                taxiName:'Taxi B',
                taxiUrl:'https://taxiB.com'
            },
            {
                id:'3',
                taxiName:'Taxi C',
                taxiUrl:'https://taxiC.com'
            },
            {
                id:'4',
                taxiName:'Taxi D',
                taxiUrl:'https://taxiD.com'
            },
            {
                id:'5',
                taxiName:'Taxi E',
                taxiUrl:'https://taxiE.com'
            },
            {
                id:'6',
                taxiName:'Taxi F',
                taxiUrl:'https://taxiF.com'
            },
        ]
    }

    const iconStyle = { backgroundImage:`url(/images/others/beachparty.jpg)`,
    boxShadow:'inset 0 0 0 2000px rgba(0, 0, 0, 0.6)',
    backgroundRepeat:'no-repeat',
    backgroundSize: '100% 100%',
    fontSize:'60px', 
    padding:'10px', 
    borderRadius:'20px',
    color:'#ffffff' }

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
                        <h4 style={{fontWeight:'400'}}> Available Stadt Taxi</h4>
                    </div>
                </div>
                <hr/>

                <div className="row">
                    <div className="col-12 col-md-12 text-center">
                        <div className="row">
                            {
                                taxiDetails.taxis.map( taxi => {
                                    return(
                                        <div className="col-4 text-center mt-4" key="taxi.id">
                                            <div>
                                                <a href={taxi.taxiUrl} target="_blank" rel="noreferrer">
                                                    <MDBIcon icon="taxi" style={iconStyle} />
                                                </a>
                                            </div>
                                            <div className="mt-2"><b>{taxi.taxiName}</b></div>
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
