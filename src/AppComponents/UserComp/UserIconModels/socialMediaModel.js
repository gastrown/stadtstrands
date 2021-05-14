import React from 'react';
import { 
   MDBModal, MDBModalBody, MDBIcon
  } from 'mdbreact';

export default function SocialMediaModel(props) {
    
    const socialMediaDetails = {
        brandpageid:'hjhdsklsdgosldjssdsdhs',
        facebookLink:'https://facebook.com/texterbrandpage',
        twitterLink:'https://twitter.com/texterbrandpage',
        instagramLink:'https://instagram.com/texterbrandpage',
    }

    const iconStyle = { backgroundImage:`url(/images/others/beachparty.jpg)`,
    boxShadow:'inset 0 0 0 2000px rgba(0, 0, 0, 0.6)',
    backgroundRepeat:'no-repeat',
    backgroundSize: '100% 100%',
    fontSize:'80px', 
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
                        <h4 style={{fontWeight:'400'}}> Connect with us</h4>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-12 col-md-12 text-center">
                        <div className="row mt-3">
                            <div className="col-4 text-center">
                                <div>
                                    <a href={socialMediaDetails.facebookLink} target="_blank" rel="noreferrer">
                                        <MDBIcon fab icon="facebook-square" style={iconStyle} />
                                    </a>
                                </div>
                                <div className="mt-2">Facebook</div>
                            </div>
                            <div className="col-4 text-center">
                                <div>
                                    <a href={socialMediaDetails.twitterLink} target="_blank" rel="noreferrer">
                                        <MDBIcon fab icon="twitter-square" style={iconStyle} />
                                    </a>
                                </div>
                                <div className="mt-2">Twitter</div>
                            </div>
                            <div className="col-4 text-center">
                                <div>
                                    <a href={socialMediaDetails.instagramLink} target="_blank" rel="noreferrer">
                                        <MDBIcon fab icon="instagram-square" style={iconStyle} />
                                    </a>
                                </div>
                                <div className="mt-2">Instagram</div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </MDBModalBody>
        </MDBModal>
    )
}
