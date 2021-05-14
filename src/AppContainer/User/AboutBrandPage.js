import React from 'react';
import UserNavbar from "../../AppComponents/UserComp/UserNavbar";
import { 
    MDBContainer,MDBIcon
  } from 'mdbreact';
import MapContainer from '../../AppComponents/MapContainer';

import { Link, useHistory } from 'react-router-dom';

import UserStyles from '../../AppStyles/UserStyles.module.css';

export default function AboutBrandPage(props) {
    const history = useHistory();

    const aboutDetails = {
            id:'1',
            brandpageid:'jhsmkdsdsdjksbdsds',
            aboutImg:'/images/others/header.PNG',
            aboutSubTitle:'CITY BEACH ON THE RHEINKNIEBRUCKE',
            weekdays_start_time:'10am',
            weekdays_end_time:'2pm',
            weekend_start_time:'10am',
            weekend_end_time:'12pm',
            SubSession: [
                {
                    id:'1',
                    aboutTitle:'URBAN BEACH FEELING ON THE RHEINKNIEBRUCKE',
                    aboutDescription:`
                    Read this warm tale of camaraderie and affection set in the wild and beautiful 
                    Savannah in our free illustrated kid's book. Ginger the giraffe uses her long 
                    neck to save the other animals from the blazing forest fire. Follow them in their 
                    jungle paths as they all meet with yet another adventure
                    `,
                },
                {
                    id:'2',
                    aboutTitle:'URBAN BEACH FEELING ON THE RHEINKNIEBRUCKE',
                    aboutDescription:`
                    Read this warm tale of camaraderie and affection set in the wild and beautiful 
                    Savannah in our free illustrated kid's book. Ginger the giraffe uses her long 
                    neck to save the other animals from the blazing forest fire. Follow them in their 
                    jungle paths as they all meet with yet another adventure
                    `,
                }
            ]

        }
    ;
   
    return (
        <>
        <UserNavbar />
        <MDBContainer fluid style={{height:'100%', background:'#b5cdd9'}}>
            <div className="row" >
                <div className="col-10 offset-1 col-md-6 offset-md-3 mt-3 mb-5" id={UserStyles.listCard}>
                    
                    <div className="row">
                        <div className="col-10 offset-1 text-left"  style={
                            { 
                                backgroundImage:`url(${aboutDetails.aboutImg})`,
                                boxShadow:'inset 0 0 0 2000px rgba(0, 0, 0, 0.4)',
                                backgroundRepeat:'no-repeat',
                                backgroundSize: 'cover',
                                height:'150px',
                                borderRadius:'15px'
                            }
                        }>
                            <div onClick={history.goBack} className="black-text">
                                <MDBIcon className="mt-2" style={{fontSize:'25px',color:'#ffffff'}} icon="chevron-circle-left" />  
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-10 offset-1 mt-3 font-small text-left ">
                            <h3><b>About</b></h3>

                            <span style={{fontSize:'12px', fontWeight:'500'}} className="mt-4">{aboutDetails.aboutSubTitle}</span>

                            <p className="mt-2"> 
                                <span style={{fontSize:'12px'}}> 
                                    Mon - Fri: {aboutDetails.weekdays_start_time} - {aboutDetails.weekdays_end_time}
                                </span> <br/>
                                <span style={{fontSize:'12px'}}> 
                                    Sat & Sun / Public Holidays:  {aboutDetails.weekend_start_time} - {aboutDetails.weekend_end_time}
                                </span> <br/>
                                <span style={{fontSize:'12px', fontWeight:'500'}}>(Depending on the Weather)</span>
                            </p>
                        </div>
                    </div>

                    <div className="row">
                    {
                        aboutDetails.SubSession.map( aboutsession => {
                            return(
                                <div className="col-10 offset-1 mt-3 font-small text-left ">
                                        <span style={{fontSize:'12px', fontWeight:'500'}} className="mt-4">
                                            {aboutsession.aboutTitle}
                                        </span>

                                        <p className="mt-2"> 
                                            <span style={{fontSize:'12px'}}> 
                                            {aboutsession.aboutDescription}
                                            </span> 
                                        </p>
                                </div>
                            );
                        })
                    }
                    </div>

                    <div className="row">
                        <div className="col-10 offset-1" style={{padding:'20px',border:'1px dotted #000000',borderRadius:'15px'}}>
                            <MapContainer />
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-12 text-center">
                        <div className="black-text">
                            <Link to={{
                                    pathname:`/user/form/${aboutDetails.brandpageid}`,
                                    }}>
                                <MDBIcon className="mt-2" style={{fontSize:'15px',color:'#000000'}} icon="chevron-circle-left" />  
                                <span className="ml-1" style={{fontSize:'15px',color:'#000000'}}>Back to Menu Icons</span>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </MDBContainer>
        </>
    )
}
