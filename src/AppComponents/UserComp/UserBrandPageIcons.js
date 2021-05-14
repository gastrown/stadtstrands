import React from 'react';
import UserStyles from '../../AppStyles/UserStyles.module.css';

import BrandPageIcon from './UserBrandPageIcon';


export default function BrandPageIcons(props) {
    

    let brandPageIcons = props.icons.map( brandicon => {
        return(
            <div  className="col-4 col-md-2 mt-3" key={brandicon.id}>
                <div onClick={brandicon.iconToggle}  className={UserStyles.iconButton}> 
                    <BrandPageIcon 
                        key={brandicon.id}
                        iconName={brandicon.iconName}
                        iconTitle={brandicon.iconTitle}/>
                </div>
            </div>
            );
        }
    );

    return (
        <div className="container">
            <div className="row">
                {brandPageIcons}
            </div>
        </div>
    )
}
