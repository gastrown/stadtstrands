import React from 'react';
import UserNavbar from "../../AppComponents/UserComp/UserNavbar";
import { 
    MDBContainer,MDBIcon,MDBBtn
  } from 'mdbreact';

import { Link, useHistory } from 'react-router-dom';

import UserStyles from '../../AppStyles/UserStyles.module.css';
import { Fragment } from 'react';

export default function BrandPageEvents() {
    const history = useHistory();

    const cardStyle = {
        borderRadius:'15px',
        backgroundColor: '#ffffff',
        paddingTop:'20px'
    }

    const daysLeft = (eventDate) => { 
        const countDownDate = new Date(eventDate).getTime();
        const currentDate = new Date().getTime();
        const timeDistance = countDownDate - currentDate;
        const days = Math.floor(timeDistance / (1000 * 60 * 60 * 24));
        return days;
    }

    


    const eventsList = [
        {
            id:'1',
            eventId:'shfhsdsgaa',
            eventTitle: 'Stadt Laundry',
            eventDescription: `
            A event description is an internal document 
            that specifies the event requirements, event duties, event responsibilities, and skills required to perform a role.
            `,
            eventLocation: 'Corner ZYIAN, FL 33176',
            eventDate: '2021-06-01T10:49:04.000Z',
            eventImg: [
                {   
                    id:'1',
                    eventImgpath:"https://mdbootstrap.com/img/Photos/Others/images/86.jpg"
                },
                {   
                    id:'2',
                    eventImgpath:"https://mdbootstrap.com/img/Photos/Others/images/44.jpg"
                },
            ]
            
        },
        {
            id:'2',
            eventId:'hhdjhduteg',
            eventTitle: 'Theodor-Heuss-Brucke Waiter',
            eventDescription: `
            A event description is an internal document 
            that specifies the event requirements, event duties, event responsibilities, and skills required to perform a role.
            `,
            eventLocation: 'Corner ZYIAN, FL 33176',
            eventDate: '2021-04-27T10:49:04.000Z',
            eventImg: [
                {   
                    id:'1',
                    eventImgpath:"https://mdbootstrap.com/img/Photos/Others/images/54.jpg"
                }
            ]
           
        },
        {
            id:'3',
            eventId:'aedasds342',
            eventTitle: 'Stadt Cleaner',
            eventDescription: `
            A event description is an internal document 
            that specifies the event requirements, event duties, event responsibilities, and skills required to perform a role.
            `,
            eventLocation: 'Corner ZYIAN, FL 33176',
            eventDate: '2021-04-27T10:49:04.000Z',
            eventImg: [
                {   
                    id:'1',
                    eventImgpath:"https://mdbootstrap.com/img/Photos/Others/images/32.jpg"
                },
                {   
                    id:'2',
                    eventImgpath:"https://mdbootstrap.com/img/Photos/Others/images/09.jpg"
                },
                {   
                    id:'3',
                    eventImgpath:"https://mdbootstrap.com/img/Photos/Others/images/97.jpg"
                }
            ]
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
                            <h3><b>Events</b></h3>
                        </div>
                    </div>

                    <div className="row">
                        {
                           eventsList.map( event => {
                               return (
                                <div className="col-10 offset-1 mt-4 mt-3 font-small text-left" key={event.id} style={cardStyle}>
                                    <div className="row">
                                        <div className="col-5">
                                            <img
                                                className="img-fluid"
                                                src={event.eventImg[0].eventImgpath}
                                                alt={event.eventTitle}
                                                style={{borderRadius:'10px'}}
                                            />
                                            
                                        </div>
                                        <div className="col-7">
                                            <div>
                                                
                                               <p>
                                                <span style={
                                                    {         fontSize:'20px',
                                                              fontWeight:'500', 
                                                              backgroundColor:'green',
                                                              color:'#ffffff',
                                                              paddingRight:'10px', 
                                                              paddingLeft:'10px', 
                                                              borderRadius:'10px',
                                                    }
                                                } > {daysLeft(event.eventDate)} </span>
                                                <span style={{fontSize:'20px',fontWeight:'500', marginLeft:'5px'}}> 
                                                    Days to go
                                                </span>
                                               </p>
                                                <p>
                                                    <span style={{fontSize:'10px'}}>Posted {event.eventDate}</span> <br/>
                                                    <span style={{fontSize:'20px',fontWeight:'500'}}>{event.eventTitle}</span> <br/>
                                                    <span className="mr-2" style={{fontSize:'12px'}}><MDBIcon icon="map-marker-alt" /></span>
                                                    <span style={{fontSize:'12px'}}>{event.eventLocation}</span> <br/>
                                                    <Link to={{
                                                        pathname:`/event/details/${event.eventId}`,
                                                        state: {
                                                            eventDetail: event
                                                        }
                                                        }}>
                                                        <MDBBtn
                                                            type="button"
                                                            color="black"
                                                            style={{borderRadius:'20px'}}
                                                            className="waves-effect z-depth-1a"
                                                            size="sm">
                                                            i'am interested
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
