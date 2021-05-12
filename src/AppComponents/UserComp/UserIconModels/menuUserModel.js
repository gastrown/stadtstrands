import React from 'react';
import { 
   MDBModal, MDBModalBody, MDBIcon
  } from 'mdbreact';
import { Link } from 'react-router-dom';

export default function MenuUserModal(props) {
    const circleIcon = {
        width: '95px',
        height: '95px',
        background: '#39729b',
        borderRadius: '50%',
    }
    
    const textStyle = {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize:'15px',
        color:'#ffffff'
    }

    const divStyle = {
        width:"120px",
        height:"120px",
        backgroundColor:'#ffffff',
        color:'#ffffff',
        border:'1px #cccccc solid',
        borderTopLeftRadius:'10px',
        borderTopRightRadius:'10px',
        borderBottomLeftRadius:'10px',
        justifyContent: 'center',
        alignItems: 'center',
        position:'relative',
        padding:'10px'
    }

    return (
        <MDBModal isOpen={props.constName} toggle={props.functionName} size='md' centered>
            <MDBModalBody>
                <div className="row">
                    <div className="col-12 col-md-12 text-left">
                        <div onClick={props.functionName}  className="black-text">
                            <MDBIcon icon="chevron-circle-left" /> Close 
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-12 col-md-12 text-center">
                        <h4><MDBIcon icon="clipboard-list" /> Menu</h4>
                        <div className="row mt-4">
                            <div className="col-6 col-md-4 offset-md-2">
                                <Link to={{
                                    pathname:'/menu/food',
                                    }}>
                                    <div style={divStyle}>
                                        <div style={circleIcon}>
                                            <MDBIcon icon="utensils" style={{paddingTop:'20px',fontSize:'30px',color:'#ffffff'}}/>
                                            <p style={textStyle}>Food</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-6 col-md-6">
                                <Link to={{
                                        pathname:'/menu/drinks',
                                    }}>
                                        <div style={divStyle}>
                                            <div style={circleIcon}>
                                                <MDBIcon icon="wine-bottle" style={{paddingTop:'20px',fontSize:'30px',color:'#ffffff'}}/>
                                                <p style={textStyle}>Drink</p>
                                            </div>
                                        </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
               
            </MDBModalBody>
        </MDBModal>
    )
}
