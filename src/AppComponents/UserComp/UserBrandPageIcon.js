import React from 'react';
import { MDBIcon } from "mdbreact";

export default function UserBrandPageIcon(props) {
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

    const divStyle = {
        width:"120px",
        height:"110px",
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
        <div style={divStyle}>
            <div style={circleIcon}>
                <MDBIcon icon={props.iconName} style={{paddingTop:'20px',fontSize:'30px',color:'#ffffff'}}/>
                <p style={textStyle}>{props.iconTitle}</p>
            </div>
        </div>
    )
}
