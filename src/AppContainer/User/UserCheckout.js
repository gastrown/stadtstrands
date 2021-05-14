import React from 'react';
import UserNavbar from "../../AppComponents/UserComp/UserNavbar";
import { 
    MDBContainer,MDBIcon,MDBInput, MDBBtn
  } from 'mdbreact';

import { Link, useHistory } from 'react-router-dom';

import UserStyles from '../../AppStyles/UserStyles.module.css';

export default function UserCart(props) {
    const history = useHistory();

    const cartList = [
        {
            id:'1',
            cartproductname:'Fresh Cold - Summer Love Beer',
            cartproductprice: '10.04',
            cartproductqty:'2',
            cartprouductimg:'/images/others/softdrink1.png'
        },
        {
            id:'2',
            cartproductname:'Lime & Salt',
            cartproductprice: '9.04',
            cartproductqty:'1',
            cartprouductimg:'/images/others/softdrink2.png'
        },
    ];
   
    return (
        <>
        <UserNavbar />
        <MDBContainer fluid style={{height:'100%', background:'#b5cdd9'}}>
            <div className="row" >
                <div className="col-10 offset-1 col-md-6 offset-md-3 mt-3 mb-5" id={UserStyles.listCard}>
                    <div className="row">
                        <div className="col-9 col-md-9 mt-2 font-small text-left ">
                            <div onClick={history.goBack} className="black-text" style={{fontSize:'25px'}}>
                                <MDBIcon icon="chevron-circle-left" />  
                                <span className="ml-5" style={{fontSize:'35px',fontWeight:'400'}}> Checkout</span>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-9 col-md-9 offset-md-1 mt-2 font-small text-left ">
                            <h6>ORDER POSITION</h6>

                            <h6 className="mt-4"><b>THEODOR_HEUSS_BRUCKE</b></h6>

                            <p className="mt-4">Downslope seat 23</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-10 col-md-10 offset-md-1 mt-2 font-small text-left ">
                            <h6>PAYMENT METHOD</h6>

                            <select className="browser-default custom-select form-control">
                                <option>Choose payment method</option>
                                <option value="1">Banking Card</option>
                                <option value="2">Paypal</option>
                                <option value="3">Apple Pay</option>
                                <option value="3">Google Pay</option>
                            </select>
                        </div>

                    </div>
                    <hr/>

                    {
                        cartList.map( cart => {
                            return(
                                <div key={cart.id}>
                                <div className="row mt-3">
                                    <div className="col-3 col-md-3 offset-md-1" >
                                        <img 
                                            src={cart.cartprouductimg} alt="drink 1" 
                                            className="img-fluid" id={UserStyles.imgBoxed_md} />
                                    </div>
                                    <div className="col-9 col-md-8 mt-3" >
                                        <div className="row">
                                            <div className="col-12 text-left">
                                                <h5 style={{fontWeight:'400'}}>{cart.cartproductname} </h5>
                                                <span style={{color:'red'}}>€{cart.cartproductprice}</span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-8 col-md-6">
                                                        <MDBInput label="Quantity" 
                                                                hint={cart.cartproductqty} 
                                                                disabled type="number" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr/>
                                </div>
                            );
                        })
                    }

                    <div className="row mt-3">
                        <div className="col-5 text-center"> 
                            <h6>TOTAL ORDER CREATED</h6>
                            <span style={{color:'red'}}>€19.08</span>
                        </div> 
                        <div className="col-7 text-center"> 
                        <Link to={{pathname:'/menu/checkout'}}>
                            <MDBBtn
                                type="button"
                                color="blue"
                                style={{borderRadius:'20px'}}
                                className="waves-effect z-depth-1a"
                                size="sm">
                                PLACE ORDER  <MDBIcon icon="chevron-circle-right" /> 
                            </MDBBtn>
                        </Link>
                        </div>  
                    </div>
                    <hr/>
                    <div className="row mt-3">
                        <div className="col-12 text-center"> 
                        <Link to={{pathname:'/menu/drinks'}}>
                            <MDBBtn
                                type="button"
                                color="blue"
                                style={{borderRadius:'20px'}}
                                className="waves-effect z-depth-1a"
                                size="sm">
                                ORDER MORE DRINKS
                            </MDBBtn>
                        </Link>
                        <Link to={{pathname:'/menu/food'}}>
                            <MDBBtn
                                type="button"
                                color="blue"
                                style={{borderRadius:'20px'}}
                                className="waves-effect z-depth-1a"
                                size="sm">
                                ORDER MORE FOOD
                            </MDBBtn>
                        </Link>
                        </div>  
                    </div>

                </div>
            </div>
            
        </MDBContainer>
        </>
    )
}
