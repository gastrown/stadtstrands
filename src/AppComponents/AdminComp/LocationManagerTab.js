import React from 'react';
import { MDBCol
  } from 'mdbreact';

const locationmanagertab = (props) => {
    const tabStyle = {
        width:"140px",
        height:"140px",
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
               <MDBCol size="6" className="ml-5 mt-4">
                   <div style={tabStyle}>
                        <h6 
                        style={{textAlign:'center',padding:'50px 0px 5px 0px',transform:'skew(170deg)'}}>{props.locationtabtitle}
                        </h6>
                   </div>
               </MDBCol>
    );
}

export default locationmanagertab;