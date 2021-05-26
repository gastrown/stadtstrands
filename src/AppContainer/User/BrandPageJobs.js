import React from 'react';
import UserNavbar from "../../AppComponents/UserComp/UserNavbar";
import { 
    MDBContainer,MDBIcon,MDBBtn
  } from 'mdbreact';

import { Link, useHistory } from 'react-router-dom';

import UserStyles from '../../AppStyles/UserStyles.module.css';

export default function BrandPageJobs() {
    const history = useHistory();

    const cardStyle = {
        borderRadius:'15px',
        backgroundColor: '#ffffff',
        paddingTop:'20px'
    }


    const jobsList = [
        {
            id:'1',
            jobId:'shfhsdsgaa',
            jobTitle: 'Stadt Laundry',
            jobDescription: `
            A job description is an internal document 
            that specifies the job requirements, job duties, job responsibilities, and skills required to perform a role.
            `,
            jobLocation: 'Corner ZYIAN, FL 33176',
            jobDate: '29th November, 2021',
            jobImg: "https://mdbootstrap.com/img/Photos/Others/images/86.jpg"
        },
        {
            id:'2',
            jobId:'hhdjhduteg',
            jobTitle: 'Theodor-Heuss-Brucke Waiter',
            jobDescription: `
            A job description is an internal document 
            that specifies the job requirements, job duties, job responsibilities, and skills required to perform a role.
            `,
            jobLocation: 'Corner ZYIAN, FL 33176',
            jobDate: '1st November, 2021',
            jobImg: "https://mdbootstrap.com/img/Photos/Others/images/54.jpg"
        },
        {
            id:'3',
            jobId:'aedasds342',
            jobTitle: 'Stadt Cleaner',
            jobDescription: `
            A job description is an internal document 
            that specifies the job requirements, job duties, job responsibilities, and skills required to perform a role.
            `,
            jobLocation: 'Corner ZYIAN, FL 33176',
            jobDate: '15th October, 2021',
            jobImg: "https://mdbootstrap.com/img/Photos/Others/images/32.jpg"
        },
        {
            id:'4',
            jobId:'weasaesd',
            jobTitle: 'Stadt Cleaner 2',
            jobDescription: `
            A job description is an internal document 
            that specifies the job requirements, job duties, job responsibilities, and skills required to perform a role.
            `,
            jobLocation: 'Corner ZYIAN, FL 33176',
            jobDate: '16th July, 2021',
            jobImg: "https://mdbootstrap.com/img/Photos/Others/images/15.jpg"
        }
    ]
   
    return (
        <React.Fragment>
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
                        <div className="col-10 text-left mt-1">
                            <h3><b>Available Jobs</b></h3>
                        </div>
                    </div>

                    <div className="row">
                        {
                           jobsList.map( job => {
                               return (
                                <div className="col-10 offset-1 mt-4 mt-3 font-small text-left" key={job.id} style={cardStyle}>
                                    <div className="row">
                                        <div className="col-5">
                                            <img
                                                className="img-fluid"
                                                src={job.jobImg}
                                                alt={job.jobTitle}
                                                style={{borderRadius:'10px'}}
                                            />
                                        </div>
                                        <div className="col-7">
                                            <div>
                                                <h5 style={{fontWeight:'500'}}>{job.jobTitle}</h5>
                                                <p>
                                                    <span className="mr-2" style={{fontSize:'12px'}}><MDBIcon icon="map-marker-alt" /></span>
                                                    <span style={{fontSize:'12px'}}>{job.jobLocation}</span> <br/>
                                                    <span style={{fontSize:'10px'}}>Posted {job.jobDate}</span> <br/>
                                                    <Link to={{
                                                        pathname:`/jobs/apply/${job.jobId}`,
                                                        state: {
                                                            jobDetail: job
                                                        }
                                                        }}>
                                                        <MDBBtn
                                                            type="button"
                                                            color="blue"
                                                            style={{borderRadius:'20px'}}
                                                            className="waves-effect z-depth-1a"
                                                            size="sm">
                                                            Apply
                                                        </MDBBtn>
                                                    </Link>
                                                </p>
                                            </div>
                                        </div>          
                                    </div>
                                </div>
                               );
                           }) 
                        }
                        
                    </div>

                  

                    <div className="row mt-3">
                        <div className="col-12 text-center">
                            <div onClick={history.goBack} className="black-text">
                                    <MDBIcon className="mt-2" style={{fontSize:'15px',color:'#000000'}} icon="chevron-circle-left" />  
                                    <span className="ml-1" style={{fontSize:'15px',color:'#000000'}}>Back to Menu Icons</span>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </MDBContainer>
        </React.Fragment>
    )
}
