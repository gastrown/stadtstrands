import { MDBCol, MDBContainer, MDBRow, MDBIcon } from 'mdbreact';
import React from 'react';

export default function BrandPageIcons() {
    const circleIcon = {
        width: '80px',
        height: '80px',
        background: '#1976D2',
        borderRadius: '50%',
       
    }

    const textStyle = {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize:'11px',
        color:'#ffffff'
    }
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol size="4" md="2" className="mt-3 ">
                    <div style={circleIcon}>
                        <MDBIcon icon="heart" style={{paddingTop:'15px',fontSize:'30px',color:'#ffffff'}}/>
                        <p style={textStyle}>Welcome</p>
                    </div>
                </MDBCol>
                <MDBCol size="4" md="2" className="mt-3">
                    <div style={circleIcon}>
                        <MDBIcon icon="heart" style={{paddingTop:'15px',fontSize:'30px',color:'#ffffff'}}/>
                        <p style={textStyle}>Welcome</p>
                    </div>
                </MDBCol>
                <MDBCol size="4" md="2" className="mt-3">
                    <div style={circleIcon}>
                        <MDBIcon icon="heart" style={{paddingTop:'15px',fontSize:'30px',color:'#ffffff'}}/>
                        <p style={textStyle}>Welcome</p>
                    </div>
                </MDBCol>
                <MDBCol size="4" md="2" className="mt-3">
                    <div style={circleIcon}>
                        <MDBIcon icon="heart" style={{paddingTop:'15px',fontSize:'30px',color:'#ffffff'}}/>
                        <p style={textStyle}>Welcome</p>
                    </div>
                </MDBCol>
                <MDBCol size="4" md="2" className="mt-3">
                    <div style={circleIcon}>
                        <MDBIcon icon="heart" style={{paddingTop:'15px',fontSize:'30px',color:'#ffffff'}}/>
                        <p style={textStyle}>Welcome</p>
                    </div>
                </MDBCol>
                <MDBCol size="4" md="2" className="mt-3 ">
                    <div style={circleIcon}>
                        <MDBIcon icon="heart" style={{paddingTop:'15px',fontSize:'30px',color:'#ffffff'}}/>
                        <p style={textStyle}>Welcome</p>
                    </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}
