import React from 'react';
import UserNavbar from "../../AppComponents/UserComp/UserNavbar";
import { 
    MDBContainer,MDBIcon,MDBInputGroup, MDBBtn
  } from 'mdbreact';

import { Link, useHistory } from 'react-router-dom';

import UserStyles from '../../AppStyles/UserStyles.module.css';

export default function UserCart(props) {
    const history = useHistory();
   
    return (
        <>
        <UserNavbar />
        <MDBContainer fluid style={{height:'100%', background:'#b5cdd9'}}>
            <div className="row" >
                <div className="col-10 offset-1 col-md-8 offset-md-2 mt-3 mb-5" id={UserStyles.listCard}>
                    <div className="row">
                        <div className="col-8 col-md-8 mt-2 font-small text-left ">
                            <div onClick={history.goBack} className="black-text" style={{fontSize:'25px'}}>
                                <MDBIcon icon="chevron-circle-left" />  Cart
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
