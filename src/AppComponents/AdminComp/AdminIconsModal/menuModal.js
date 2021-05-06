import React, { useState } from 'react';
import { 
    MDBModal, MDBModalBody, MDBBtn, MDBIcon
  } from 'mdbreact';

import DeactivateButton from '../../DeactivateButton';
import DrinkSubMenu from '../../AdminComp/AdminIconsModal/DrinkSubMenu';
import FoodSubMenu from '../../AdminComp/AdminIconsModal/FoodSubMenu';

export default function MenuModal(props) {
    const [modalDrinkSubMenu, setModalDrinkSubMenu] = useState(false);
    const [modalFoodSubMenu, setModalFoodSubMenu] = useState(false);

    const toogleDrinkSubMenu = () => {
        setModalDrinkSubMenu(!modalDrinkSubMenu);
    }

    const toogleFoodSubMenu = () => {
        setModalFoodSubMenu(!modalFoodSubMenu);
    }


    const tabStyle = {
        width:"100px",
        height:"100px",
        backgroundColor:'#39729b',
        color:'#ffffff',
        borderTopLeftRadius:'10px',
        borderTopRightRadius:'10px',
        borderBottomLeftRadius:'10px',
        transform: 'skew(185deg)',
        justifyContent: 'center',
        alignItems: 'center',
        position:'relative',
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

    const onChangeFile = (event) => {
        console.log('event.target.files[0]', event.target)
      }

    return (
        <MDBModal isOpen={props.constName} toggle={props.functionName}  centered >
            <MDBModalBody>
                <h5><strong>Customize Menu</strong></h5>
                <div className="row mt-5">
                    <div className="col-5 ml-5">
                        <div style={tabStyle} onClick={toogleDrinkSubMenu}>
                                <h6 style={{textAlign:'center',padding:'35px 0px 5px 0px',transform:'skew(170deg)'}}>
                                    Drink Menu
                                </h6>
                        </div>
                    </div>

                    <div className="col-4 ml-3" onClick={toogleFoodSubMenu}>
                        <div style={tabStyle}>
                            <h6 style={{textAlign:'center',padding:'35px 0px 5px 0px',transform:'skew(170deg)'}}>
                                Food Menu
                            </h6>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-12">
                        <form>
                            <div className="form-group row">
                                <div className="col-md-12 text-center">
                                    <h6><b>Create New Menu</b></h6>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-10 offset-md-1 text-center">
                                    <input 
                                        type="text" 
                                        className="form-control text-center" 
                                        placeholder="Enter menu name"
                                        style={{borderRadius:'20px',border:'1px dotted black'}}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-8 offset-md-2 text-center">
                                <input type="file" id="file" style={{display: "none"}}
                                                    onChange={(e) => onChangeFile(e)}/>
                                    <label htmlFor="file" style={imageFileStyle}>
                                                        Upload menu image <span className='fa fa-download' style={{backgroundColor:'#39729b', color:'#ffffff', padding:'5px', borderRadius:'10px'}}> </span>
                                    </label>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-8 offset-md-2 text-center">
                                <MDBBtn
                                    type="button"
                                    color="#39729b"
                                    style={{borderRadius:'20px', backgroundColor:'#39729b', color:'#ffffff'}}
                                    className="waves-effect z-depth-1a"
                                    size="sm"
                                    >
                                    Create menu
                                </MDBBtn>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                {/* <div className="row mt-3">
                    <div className="col-3 col-md-3 mt-4">
                        <div style={menuList}>
                            Menu 1
                        </div>
                    </div>
                    <div className="col-3 col-md-3 mt-4">
                        <div style={menuListNew}>
                            
                        </div>
                    </div>
                </div> */}

               <DeactivateButton /> 

               <div className="mt-5 font-small text-center pb-3">
                        <div onClick={props.functionName} className="black-text">
                            <MDBIcon icon="chevron-circle-left" /> Back 
                        </div>
                </div>

                <DrinkSubMenu
                            constName={modalDrinkSubMenu}
                            functionName={toogleDrinkSubMenu}/>
                
                <FoodSubMenu
                            constName={modalFoodSubMenu}
                            functionName={toogleFoodSubMenu}/>

            </MDBModalBody>
        </MDBModal>
    )
}
