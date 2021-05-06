import React from 'react';

const locationmanagertab = (props) => {
    const tabStyle = {
        width:"120px",
        height:"120px",
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
    return(
            <div style={tabStyle}>
                <h6 
                    style={{textAlign:'center',padding:'35px 0px 5px 0px',transform:'skew(170deg)'}}>{props.locationtabtitle}
                </h6>
            </div>
    );

}

export default locationmanagertab;