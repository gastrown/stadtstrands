import React, { useState } from 'react';
import UserNavbar from "../../AppComponents/UserComp/UserNavbar";
import { 
    MDBContainer,MDBIcon, MDBBtn,

    // MDBNotification
  } from 'mdbreact';

import { useHistory } from 'react-router-dom';
import UserStyles from '../../AppStyles/UserStyles.module.css';
import ConfirmationModal from '../../AppComponents/ConfirmationModal';

export default function JobApplicationForm(props) {
    //console.log(props.location.state.jobDetails);
    const history = useHistory();

    const singleJobDetail = props.location.state.jobDetail;
    
    const imageFileStyle = {
        padding:'10px',
        border:'1px dotted #CCCCCC',
        marginLeft: '12px',
        width:'90%',
        borderRadius:"10px",
        textAlign:'center',
        fontSize:'12px'
    }

    const cardStyle = {
        borderRadius:'15px',
        backgroundColor: '#ffffff',
        paddingTop:'20px'
    }

    const [modalSuccess, setModalSuccess] = useState(false);
    
    const submitApplication = () => { setModalSuccess(!modalSuccess); }

    
    return (
        
        <>
        
        <UserNavbar />
        <MDBContainer fluid style={{height:'100%', background:'#b5cdd9'}}>
            <div className="row" >
                <div className="col-10 offset-1 col-md-5 offset-md-3 mt-3 mb-5" id={UserStyles.listCard}>
                
                    <div className="row mt-3">
                        <div className="col-2 text-left">
                            <div onClick={history.goBack} className="black-text">
                                <MDBIcon className="mt-2" style={{fontSize:'25px',color:'#000000'}} icon="chevron-circle-left" /> 
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-10 offset-1">
                        {/* {modalSuccess ?<MDBNotification
                                show
                                fade
                                iconClassName="text-primary"
                                title="Bootstrap"
                                message="Great, Your application has been submitted."
                                text="11 mins ago"
                            /> : <div></div>} */}
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-10 offset-1 mt-4 mt-3 font-small text-left" style={cardStyle}>
                            <div className="row">
                                <div className="col-5">
                                    <img
                                                className="img-fluid"
                                                src={singleJobDetail.jobImg}
                                                alt={singleJobDetail.jobTitle}
                                                style={{borderRadius:'10px'}}
                                            />
                                </div>
                                        <div className="col-7">
                                            <div>
                                                <h5 style={{fontWeight:'500'}}>{singleJobDetail.jobTitle}</h5>
                                                <p>
                                                    <span className="mr-2" style={{fontSize:'12px'}}><MDBIcon icon="map-marker-alt" /></span>
                                                    <span style={{fontSize:'12px'}}>{singleJobDetail.jobLocation}</span> <br/>
                                                    <span style={{fontSize:'10px'}}>Posted {singleJobDetail.jobDate}</span> <br/>
                                                </p>
                                            </div>
                                        </div>          
                            </div>
                            <div className="row mt-2 mb-2">
                                <div className="col-12">
                                <span style={{fontSize:'12px', fontWeight:'500',color:'#000000'}} className="mt-4">
                                Job Detail Description
                                </span> <br/>
                                <span style={{fontSize:'12px', fontWeight:'300',color:'#020202'}} className="mt-4">
                                    {singleJobDetail.jobDescription}
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-2">
                            <div className="col-10 offset-1 text-center">
                                <img src="/images/others/applyLogo.png" 
                                    className="img-fluid" 
                                    style={{borderRadius:'500px',width:'80px'}} 
                                    alt="Apply logo"/>
                            </div>
                    </div>

                    <form>
                        <div className="form-group row mt-3">
                            <div className="col-10 offset-1 text-left">
                                <input type="text" className="form-control" placeholder="Name" style={imageFileStyle} />
                            </div>
                        </div>

                        <div className="form-group row mt-3">
                            <div className="col-10 offset-1 text-left">
                                <input type="email" className="form-control" placeholder="Email Address" style={imageFileStyle} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <div className="col-10 offset-1 mt-3 text-left">
                                <textarea className="form-control" style={imageFileStyle} defaultValue="Application">
                                   
                                </textarea>
                            </div>
                        </div>

                        <div className="form-group row">
                            <div className="col-12 text-center">
                                <MDBBtn
                                    type="button"
                                    color="blue"
                                    style={{borderRadius:'20px'}}
                                    className="waves-effect z-depth-1a"
                                    size="sm"
                                    onClick={submitApplication}
                                    >
                                    Send
                                </MDBBtn>

                                <ConfirmationModal
                                constName={modalSuccess}
                                functionName={submitApplication}
                                successMessage="Your feedback have been submitted. Thanks for yout feedback."
                                />
                                

                                
                            </div>
                        </div>
                    </form>

                    <div className="row mt-3">
                        <div className="col-12 text-center">
                            <div onClick={history.goBack} className="black-text">
                                    <MDBIcon className="mt-2" style={{fontSize:'15px',color:'#000000'}} icon="chevron-circle-left" />  
                                    <span className="ml-1" style={{fontSize:'15px',color:'#000000'}}>Back</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </MDBContainer>
        </>
    )
}
