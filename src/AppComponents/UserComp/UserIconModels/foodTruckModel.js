import React, { useState } from 'react';
import { 
   MDBModal, MDBModalBody, MDBIcon
  } from 'mdbreact';
  import { Link } from 'react-router-dom';

export default function FoodTruckModel(props) {
    
    const [foodTruckDetails] = useState({
        brandpageid:'hjhdsklsdgosldjssdsdhs',
        foodtruck: [
            {
                id:'1',
                truckId:'789322923hksjd922',
                truckName:'Food Truck A',
                truckImageUrl:'/images/others/truck1.jpg'
            },
            {
                id:'2',
                truckId:'hfidhdshdks87386983',
                truckName:'Food Truck B',
                truckImageUrl:'/images/others/truck2.jpg'
            },
            {
                id:'3',
                truckId:'fdfffevsdsdsadsd',
                truckName:'Food Truck C',
                truckImageUrl:'/images/others/dff.png',
            },
            
        ]
    })

    const iconStyle = { 
        borderRadius:'15px',
        width:'300px',
        height:'100px',
        // objectFit:'scale-down'
    }

    return (
        <MDBModal isOpen={props.constName} toggle={props.functionName} size='md' centered>
            <MDBModalBody>
                <div className="row">
                    <div className="col-3 text-left">
                        <div onClick={props.functionName}  className="black-text">
                            <MDBIcon icon="chevron-circle-left" /> 
                        </div>
                    </div>
                    <div className="col-8 text-left">
                        <h4 style={{fontWeight:'400'}}> Available Food Trucks</h4>
                    </div>
                </div>
                <hr/>

                <div className="row">
                    <div className="col-12 col-md-12 text-center">
                        <div className="row">
                            {
                                foodTruckDetails.foodtruck.map( truckfood => {
                                    return(
                                        <div className="col-4 text-center mt-2" key={truckfood.id}>
                                            <Link to={{
                                            pathname:`/food-truck/${truckfood.truckId}`,
                                            // state:{
                                            //     truckfoodDetail: truckfood
                                            // }
                                            }}>
                                                <div>
                                                    <img src={truckfood.truckImageUrl}
                                                        className="img-fluid" style={iconStyle} alt={truckfood.truckName} />
                                                </div>
                                            </Link>
                                            <div className="mt-2"><b>{truckfood.truckName}</b></div>
                                        </div>
                                    );
                                })
                            }
                           
                        </div>
                    </div>
                </div>
               
            </MDBModalBody>
        </MDBModal>
    )
}
