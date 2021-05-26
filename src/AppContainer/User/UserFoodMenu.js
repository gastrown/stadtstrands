import React from 'react';
import UserNavbar from "../../AppComponents/UserComp/UserNavbar";
import { 
    MDBContainer,MDBIcon,MDBFormInline
  } from 'mdbreact';

import { Link, useHistory } from 'react-router-dom';

import UserStyles from '../../AppStyles/UserStyles.module.css';

export default function UserFoodMenu() {
    const history = useHistory();

    const foodSubList = [
        {
            id:'1',
            subCatName:'Snacks',
            subCatList: 
            [
                {
                    id:'1',
                    drinkname:'Meat Rolls',
                    drinkImg:'/images/others/softdrink1.png',
                    drinkAmount:'5.00',
                    drinkDescription:'Orange & Lime well ganised for your good health'
                },
                
            ]
        }
    ]

    let drinkMenuList = foodSubList.map( subdrinklist => {
        return (
            <div className="container" key={subdrinklist.id}>
                <div className="row mt-1">
                    <div className="col-8 text-left">
                        <h5><b>{subdrinklist.subCatName}</b></h5>
                    </div>

                    <div className="col-4 text-right">
                        <span style={{fontSize:'12px',fontWeight:'500'}}>
                            SEE ALL <MDBIcon icon="ellipsis-v" /> 
                        </span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="row" style={{paddingRight:'40px',paddingTop:'10px'}}>
                            {
                                subdrinklist.subCatList.map( drinklist => {
                                    return (
                                        <div className="col-5 col-md-2 offset-1  mt-1 mb-3" >
                                            <div className="row">
                                                <div className="col-12" id={UserStyles.foodSubList}>

                                                    <img src={drinklist.drinkImg} alt="drink 1" className="img-fluid" 
                                                   id={UserStyles.imgBoxed} />
                                                   
                                                </div>
                                            </div>
                                            <div className="row text-center mt-1">
                                                <div className="col-12" style={{fontSize:'11px',fontWeight:'500'}}>
                                                    {drinklist.drinkname} <br/>
                                                    ${drinklist.drinkAmount}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
                
            </div>
        );
    })

    return (
        <React.Fragment>
        <UserNavbar />
        <MDBContainer fluid style={{height:'100%', background:'#b5cdd9'}}>
            <div className="row" >
                <div className="col-10 offset-1 col-md-8 offset-md-2 mt-3 mb-5" id={UserStyles.listCard}>
                    <div className="row">
                        <div className="col-6 col-md-6 mt-2 font-small text-left ">
                            <div onClick={history.goBack} className="black-text" style={{fontSize:'20px'}}>
                                <MDBIcon icon="chevron-circle-left" /> 
                                <span className="ml-2" style={{fontSize:'20px',fontWeight:'500'}}>Back</span>
                            </div>
                        </div>

                        <div className="col-6 col-md-6 mt-2 font-small text-right ">
                            <Link to={{pathname:'/menu/drinks'}}>
                                <div className="black-text" style={{fontSize:'20px'}}>
                                    <span className="mr-2" style={{fontSize:'20px',fontWeight:'500'}}>Drinks</span>
                                    <MDBIcon icon="chevron-circle-right" /> 
                                </div>
                            </Link>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-12 col-md-12 mt-2 font-small text-center ">
                            <div className="black-text" style={{fontSize:'30px'}}>
                                <MDBIcon icon="utensils" /> <br/>
                                <span className="ml-2" style={{fontSize:'25px',fontWeight:'500'}}>Food Menu List</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-12 font-small pb-3">
                            <MDBFormInline className="md-form">
                                <input 
                                    className="form-control form-control-sm ml-3 w-75 text-center" 
                                    type="text" 
                                    placeholder="Search for any food" 
                                    aria-label="Search for any food" />
                                    <MDBIcon icon="search" className="ml-2"/>
                            </MDBFormInline>
                        </div>
                    </div>

                    {/* Drinks Catergory and subcatergoried */}

                    {drinkMenuList}
                   
                </div>
            </div>
        </MDBContainer>
        </React.Fragment>
    )
}
