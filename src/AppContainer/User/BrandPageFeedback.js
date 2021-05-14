import React, { useState } from 'react';
import UserNavbar from "../../AppComponents/UserComp/UserNavbar";
import { 
    MDBContainer,MDBIcon, MDBRating, MDBBtn
  } from 'mdbreact';

import { Link, useHistory } from 'react-router-dom';

import UserStyles from '../../AppStyles/UserStyles.module.css';

export default function BrandPageFeedback() {
    const history = useHistory();

    const [basic] = useState([
        {
          tooltip: 'Very Bad'
        },
        {
          tooltip: 'Poor'
        },
        {
          tooltip: 'Ok',
          choosed: true
        },
        {
          tooltip: 'Good'
        },
        {
          tooltip: 'Excellent'
        }
      ]);

    const onChangeFile = (event) => {
        console.log('event.target.files[0]', event.target)
    }
    
    const imageFileStyle = {
        padding:'10px',
        border:'1px dotted #CCCCCC',
        marginLeft: '12px',
        width:'90%',
        borderRadius:"10px",
        textAlign:'center',
        fontSize:'12px'
    }

    const feedbackQuestions = {
            id:'1',
            brandpageid:'jhsmkdsdsdjksbdsds',
            questions: [
                {
                    id:'1',
                    question: 'How do we do?',
                },
                {
                    id:'2',
                    question: 'How is our delievery time?',
                },
                {
                    id:'3',
                    question: 'How do our food taste?',
                },
                {
                    id:'4',
                    question: 'What do you think about our stand?',
                }
            ]
        }
    ;
   
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
                        <div className="col-10 text-left mt-1">
                            <h3><b>Give Feedback</b></h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-10 offset-1 mt-3 font-small text-left ">
                           
                            <span style={{fontSize:'12px', fontWeight:'500',color:'#c2c2c2'}} className="mt-4">
                                Rate us on how you feel about our service
                            </span>
                        </div>
                    </div>

                    <div className="row">
                    <div className="col-10 offset-1 mt-3 font-small text-left ">
                    {
                        feedbackQuestions.questions.map( feedback => {
                            return(
                                <p className="mt-2"> 
                                    <span style={{fontSize:'14px'}}> 
                                        {feedback.question} <br/>
                                        <MDBRating data={basic} />
                                    </span> 
                                </p>
                            );
                        })
                    }
                    </div>
                    </div>

                    <form>
                        <div className="form-group row">
                            <div className="col-10 offset-1 mt-3 text-left">
                                <input type="file" id="file" style={{display: "none"}} 
                                                        onChange={(e) => onChangeFile(e)}/>
                                    <label htmlFor="file" style={imageFileStyle}>
                                            Add location image 
                                            <span className="ml-4">
                                                <MDBIcon icon="cloud-download-alt" style={{backgroundColor:'#39729b', color:'#ffffff', padding:'5px', borderRadius:'10px'}} />
                                            </span>
                                            
                                </label>
                            </div>
                        </div>

                        <div className="form-group row">
                            <div className="col-10 offset-1 mt-3 text-left">
                                <textarea className="form-control" style={imageFileStyle}>
                                    Care to share any personal feedback?
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
                                    size="md"
                                    >
                                    Send
                                </MDBBtn>
                            </div>
                        </div>
                    </form>

                    <div className="row mt-3">
                        <div className="col-12 text-center">
                        <div className="black-text">
                            <Link to={{
                                    pathname:`/user/form/${feedbackQuestions.brandpageid}`,
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
