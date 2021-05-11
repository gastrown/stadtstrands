import React, { useState } from 'react';
import WaiterStyle from '../../AppStyles/WaiterStyles.module.css';
import { MDBIcon, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

export const OrderCard = () => {
    const [singleListModal, setSingleListModal] = useState(false);

    const toggleList= () => { 
        setSingleListModal(!singleListModal); 
    }

    const waitersOrders = [
        {
            id:'1',
            orderRefNob:'GWY342ES2321',
            fullname:'Chime Emmanuel',
            order:[
                {
                    id:'1',
                    menu:'Evolution Fresh Cold Juice',
                    quantity: '2',
                    price: '10.99',
                    total: '21.98',
                    menuImg:'/images/others/softdrink1.png',
                    dateTime:'14:34pm 14 March 2021'
                }
            ],
            
        },
        {
            id:'2',
            orderRefNob:'AAE112ES2321',
            fullname:'Solomon Job',
            order:[
                {
                    id:'1',
                    menu:'Evolution Fresh Cold Juice',
                    quantity: '2',
                    price: '10.99',
                    total: '21.98',
                    menuImg:'/images/others/softdrink2.png',
                    dateTime:'03:04pm 10 March 2021'
                },
                {
                    id:'2',
                    menu:'Smoked Fish and Garri',
                    quantity: '1',
                    price: '25.99',
                    total: '25.99',
                    menuImg:'/images/others/softdrink3.png',
                    dateTime:'03:04pm 10 March 2021'
                }
            ],
            
        },
    ]

  

    let orderDetails = waitersOrders.map( waiterOrder => {
        return(
            //console.log(waitersOrders[1].order)
                    <div className="row shadow-sm bg-light mt-3" key={waiterOrder.id} id={WaiterStyle.listCard}>
                                    <div className="col-12 col-md-12">
                                        <div className="row">
                                            <div className="col-8 col-md-8">
                                                <h5>{waiterOrder.fullname}</h5>
                                            </div>
                                            <div className="col-4 col-md-4 text-right">
                                                <MDBIcon icon="cog" onClick={toggleList} style={{fontSize:'25px'}}/>
                                                <MDBModal isOpen={singleListModal} toggle={toggleList}>
                                                    <MDBModalHeader toggle={toggleList}>Order List</MDBModalHeader>
                                                    <MDBModalBody>
                                                    
                                                     <h5>{waiterOrder.fullname}</h5>
                                                         
                                                    </MDBModalBody>
                                                    <MDBModalFooter>
                                                    <MDBBtn color="secondary" onClick={toggleList}>Close</MDBBtn>
                                                    <MDBBtn color="primary">Save changes</MDBBtn>
                                                    </MDBModalFooter>
                                                </MDBModal>  
                                            </div>
                                        </div>
                                        {waiterOrder.order.map( order => {
                                        return(
                                            <div className="row" key={order.id}>
                                                <div className="col-3 col-md-3">
                                                    <img 
                                                        src={order.menuImg} 
                                                        id={WaiterStyle.listCardImg}  
                                                        className="img-fluid" 
                                                        alt="orderList" />
                                                </div>
                                                <div className="col-9 col-md-9 mt-2">
                                                    <div className="row">
                                                        <div className="col-7 col-md-7">
                                                            <p>
                                                            <span style={{fontSize:'14px',fontWeight:'bold'}}>Order</span> <br/>
                                                            {order.menu}
                                                            <br/>
                                                            <span style={{fontSize:'10px'}}>{order.dateTime}</span>
                                                            </p>
                                                        </div>

                                                        <div className="col-5 col-md-5">
                                                            <div className="row mt-5">
                                                                <div className="col-6 col-md-6 mt-1">
                                                                    <h6><b>{order.quantity}</b></h6>
                                                                </div>
                                                                <div className="col-6 col-md-6">
                                                                    <h5 style={{color:'red'}}>${order.price}</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                        })}
                                    </div>
                    </div>

            );
        }
    );

    return (
        <div className="col-md-12" >
            {orderDetails}
        </div>     
    )
}

export default OrderCard;
