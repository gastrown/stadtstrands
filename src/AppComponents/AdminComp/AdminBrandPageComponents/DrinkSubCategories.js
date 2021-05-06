import React from 'react';
import { Link } from 'react-router-dom';

import DrinkSubCategory from './DrinkSubCategory';


export default function DrinkSubCategories(props) {

    let drinkCategory = props.drinkCat.map( drinkSubCat => {
        return(
            <div className="col-6 col-md-4  mt-3">
                <Link to={{
                    pathname:drinkSubCat.catlink,
                    state: {
                        title: drinkSubCat.title,
                    }
                    }}>
                    <DrinkSubCategory 
                        key={drinkSubCat.id}
                        title={drinkSubCat.title}/>
                </Link>
                    
            </div>
            );
        }
    );

    return (
            <div className="row mt-3">
                {drinkCategory}
            </div>
    )
}
