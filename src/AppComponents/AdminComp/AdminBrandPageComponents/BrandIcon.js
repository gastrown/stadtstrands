import React from 'react';
import { MDBIcon } from "mdbreact";

export default function BrandIcon(props) {
    const circleIcon = {
        width: '95px',
        height: '95px',
        background: '#39729b',
        borderRadius: '50%',
       
    }
    
    const textStyle = {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize:'9px',
        color:'#ffffff'
    }


    return (
        <div style={circleIcon}>
            <MDBIcon icon={props.iconName} style={{paddingTop:'20px',fontSize:'30px',color:'#ffffff'}}/>
            <p style={textStyle}>{props.iconTitle}</p>
        </div>
    )
}
