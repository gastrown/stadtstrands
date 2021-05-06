import React from 'react';
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import AdminStyles from '../../../AppStyles/AdminStyles.module.css';

import BrandIcon from './BrandIcon';


export default function BrandPageIcons(props) {
    

    let brandPageIcons = props.icons.map( brandicon => {
        return(
            <MDBCol size="4" md="2" className="mt-3">
                <div onClick={brandicon.iconToggle} key={brandicon.id} className={AdminStyles.iconButton}> 
                    <BrandIcon 
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