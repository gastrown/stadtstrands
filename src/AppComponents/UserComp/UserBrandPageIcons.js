import React from 'react';
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import UserStyles from '../../AppStyles/UserStyles.module.css';

import BrandPageIcon from './UserBrandPageIcon';


export default function BrandPageIcons(props) {
    

    let brandPageIcons = props.icons.map( brandicon => {
        return(
            <MDBCol size="4" md="2" className="mt-3" key={brandicon.id}>
                <div onClick={brandicon.iconToggle}  className={UserStyles.iconButton}> 
                    <BrandPageIcon 
                        key={brandicon.id}
                        iconName={brandicon.iconName}
                        iconTitle={brandicon.iconTitle}/>
                </div>
            </MDBCol>
            );
        }
    );

    return (
        <MDBContainer>
            <MDBRow>
                {brandPageIcons}
            </MDBRow>
        </MDBContainer>
    )
}
