import React from 'react';
import UserNavbar from "../../AppComponents/UserComp/UserNavbar";
import { 
    MDBContainer,MDBIcon,MDBInputGroup, MDBBtn
  } from 'mdbreact';

import { Link, useHistory } from 'react-router-dom';

import UserStyles from '../../AppStyles/UserStyles.module.css';

export default function UserCart() {
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
        <MDBContainer fluid style={{height:'100vh', background:'#b5cdd9'}}>
            <div className="row" >
                <div className="col-10 offset-1 col-md-6 offset-md-3 mt-3 mb-5" id={UserStyles.listCard}>
                    <div className="row">
                        <div className="col-9 col-md-9 mt-2 font-small text-left ">
                            <div onClick={history.goBack} className="black-text" style={{fontSize:'25px'}}>
                                <MDBIcon icon="chevron-circle-left" />  <span className="ml-5" style={{fontSize:'35px',fontWeight:'400'}}> Cart</span>
                            </div>
                        </div>
                    </div>
                    <hr/>

                    {
                        cartList.map( cart => {
                            return(
                                <>
                                <div className="row mt-3" key={cart.id}>
                                <div className="col-3 col-md-3 offset-md-1" >
                                    <img 
                                        src={cart.cartprouductimg} alt="drink 1" 
                                        className="img-fluid" id={UserStyles.imgBoxed_md} />
                                </div>
                                <div className="col-7 col-md-6 mt-3" >
                                    <div className="row">
                                        <div className="col-12 text-left">
                                            <h5 style={{fontWeight:'400'}}>{cart.cartproductname} </h5>
                                            <span style={{color:'red'}}>€{cart.cartproductprice}</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-8 col-md-6">
                                                    <MDBInputGroup
                                                    material
                                                    hint={cart.cartproductqty}
                                                    containerClassName="mb-4 mt-0"
                                                    append={
                                                        <>
                                                       <MDBIcon icon="minus-circle" className="mt-3 ml-3"/>
                                                       <MDBIcon icon="plus-circle" className="mt-3 ml-3"/>
                                                        </>
                                                    }
                                                    />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-2 col-md-2 mt-1" >
                                    <div className="row">
                                        <div className="col-12 text-center">
                                            <MDBIcon far icon="times-circle" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            </>
                            );
                        })
                    }

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
                   
                    <hr/>
                    <div className="row mt-3">
                        <div className="col-7 text-center"> 
                            <h6>TOTAL ORDER CREATED</h6>
                            <span style={{color:'red'}}>€19.08</span>
                        </div> 
                        <div className="col-5 text-left"> 
                        <Link to={
                            {
                                pathname:'/menu/checkout',
                                // state: {
                                //     cartList: cartList  
                                // }
                            }}>
                            <MDBBtn
                                type="button"
                                color="blue"
                                style={{borderRadius:'20px'}}
                                className="waves-effect z-depth-1a"
                                size="sm">
                                CHECKOUT  <MDBIcon icon="chevron-circle-right" /> 
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
