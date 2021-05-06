import React from 'react';
import AdminStyles from '../../../AppStyles/AdminStyles.module.css';

export default function DrinkSubCategory(props) {

    return (
        <div className={AdminStyles.subCatIcon}>
            <p>{props.title}</p>
        </div>
    )
}
