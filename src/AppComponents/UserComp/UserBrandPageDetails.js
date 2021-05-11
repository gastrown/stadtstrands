import React from 'react';
import { MDBIcon } from "mdbreact";


const UserBrandPageDetails = (props) => {
    const circleIcon = {
        width: '95px',
        height: '95px',
        background: '#ffffff',
        borderRadius: '50%',
        border:'1px solid #ffffff'
    }

    const descriptionStyle = {
        border:'1px dotted #ffffff',
        borderRadius:'10px',
        color:'#ffffff',
        padding:'5px'    
    }

    const socialStyle = {
        fontSize:'30px',
        color:'#ffffff',
        marginBottom:'30px'
    }


    

    return (
        <div className="container-fluid" style={
                { 
                    backgroundImage:`url(${props.pageDetails.brandpageimg})`,
                    boxShadow:'inset 0 0 0 2000px rgba(0, 0, 0, 0.6)',
                    backgroundRepeat:'no-repeat',
                    backgroundAttachment: 'fixed',
                    backgroundPosition:'center',
                    backgroundSize: 'cover',
                    height:'auto'
                }
            }>
            <div className="container">
                <div className="row" style={{padding:'10px',color:'#ffffff'}}>
                      <h5>
                        <MDBIcon icon="map-marker-alt" /> {props.pageDetails.brandpagename}
                      </h5>  
                </div>
                <div className="row">
                    <div className="col-12 col-md-12 text-center">
                        <img src={props.pageDetails.brandpagelogo} alt="Brand page logo" style={circleIcon} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-8 offset-md-2 mt-4 text-center">
                        <p style={descriptionStyle}>
                        {props.pageDetails.brandpagedescription}
                        </p>
                    </div>
                </div>
                <div className="row mt-5 mb-5">
                    <div className="col-12 col-md-12 text-center">
                        <a href={props.pageDetails.brandpagesocialmedialink[0].facebooklink} target="_blank" rel="noreferrer">
                            <MDBIcon fab icon="facebook" style={socialStyle}/>
                        </a> 
                        <a href={props.pageDetails.brandpagesocialmedialink[0].twitterlink} target="_blank" rel="noreferrer">
                            <MDBIcon className="ml-5" fab icon="twitter-square" style={socialStyle}/>
                        </a> 
                        <a href={props.pageDetails.brandpagesocialmedialink[0].instagramlink} target="_blank" rel="noreferrer">
                            <MDBIcon className="ml-5" fab icon="instagram" style={socialStyle}/>
                        </a>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserBrandPageDetails
