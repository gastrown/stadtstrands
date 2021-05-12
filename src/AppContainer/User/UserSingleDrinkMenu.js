import React from 'react';
import UserNavbar from "../../AppComponents/UserComp/UserNavbar";
import { 
    MDBContainer,MDBIcon,MDBInputGroup, MDBBtn
  } from 'mdbreact';

import { Link, useHistory } from 'react-router-dom';

import UserStyles from '../../AppStyles/UserStyles.module.css';

export default function UserSingleDrinkMenu(props) {
    const history = useHistory();
   
    
    const singleDrinkDetail = props.location.state.drinkdetail;
    console.log(singleDrinkDetail);
    return (
        <>
        <UserNavbar />
        <MDBContainer fluid style={{height:'100%', background:'#b5cdd9'}}>
            <div className="row" >
                <div className="col-10 offset-1 col-md-8 offset-md-2 mt-3 mb-5" id={UserStyles.listCard}>
                    <div className="row">
                        <div className="col-8 col-md-8 mt-2 font-small text-left ">
                            <div onClick={history.goBack} className="black-text" style={{fontSize:'25px'}}>
                                <MDBIcon icon="chevron-circle-left" /> 
                            </div>
                        </div>
                    </div>

                    <div className="row mt-2">
                        <div className="col-12 col-md-5 offset-md-1" >
                            <img 
                                src={singleDrinkDetail.drinkImg} alt="drink 1" 
                                className="img-fluid" id={UserStyles.imgBoxed_lg} />
                        </div>
                        <div className="col-12 col-md-5 offset-md-1 mt-4" >
                            <div className="row">
                                <div className="col-12 text-left">
                                    <h2 style={{fontWeight:'400'}}>{singleDrinkDetail.drinkname}</h2>
                                    <span style={{color:'red'}}>€{singleDrinkDetail.drinkAmount}</span>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-10 offset-1 text-left" style={{backgroundColor:'#E7E7E7',borderRadius:'5px',padding:'10px'}}>
                                   <div className="row">
                                        <div className="col-6">
                                            <MDBInputGroup
                                            material
                                            hint="1"
                                            containerClassName="mb-4 mt-0"
                                            append={
                                                <>
                                               <MDBIcon icon="minus-circle" className="mt-3 ml-3"/>
                                               <MDBIcon icon="plus-circle" className="mt-3 ml-3"/>
                                                </>
                                            }
                                            />
                                        </div>
                                        <div className="col-6 text-center mt-2">
                                            <h5>
                                                <b>Total:</b> 
                                                <span className="ml-2" style={{color:'red'}}>€{singleDrinkDetail.drinkAmount}</span>
                                            </h5>
                                        </div>
                                   </div>
                                   <div className="row">
                                        <div className="col-12 text-center"> 
                                       
                                        <MDBBtn
                                            type="button"
                                            color="blue"
                                            style={{borderRadius:'20px'}}
                                            className="waves-effect z-depth-1a"
                                            size="sm"
                                            >
                                            Add to Cart
                                        </MDBBtn>
                                        </div>  
                                   </div>
                                </div>
                            </div>
                            <div className="row mt-3">
                        <div className="col-12 col-md-7 col-md-10" >
                            <h5 style={{fontWeight:'400'}}>Description</h5>
                            <p>
                                {singleDrinkDetail.drinkDescription}
                            </p>
                        </div>
                    </div>
                        </div>
                    </div>
                    
                    <div className="row mt-3">
                        <div className="col-6 mt-2 font-small text-right">
                            <div onClick={history.goBack} className="black-text" style={{fontSize:'15px'}}>
                                <MDBIcon icon="chevron-circle-left" /> 
                                <span className="ml-2" style={{fontSize:'15px'}}>Order More</span>
                            </div>
                        </div>

                        <div className="col-6 col-md-6 mt-2 font-small text-left">
                            <Link to={{pathname:'/menu/cart'}}>
                                <div className="black-text" style={{fontSize:'15px'}}>
                                    <span className="mr-2" style={{fontSize:'15px'}}>Goto Cart</span>
                                    <MDBIcon icon="chevron-circle-right" /> 
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </MDBContainer>
        </>
    )
}
