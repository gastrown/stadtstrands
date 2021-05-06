import React,{ useState} from 'react';
import { 
    MDBModal, MDBModalBody, MDBBtn, MDBIcon
  } from 'mdbreact';

import DrinkSubCategories from '../../AdminComp/AdminBrandPageComponents/DrinkSubCategories';


export default function DrinkSubMenu(props) {

    const [drinkCategories] = useState(
        [
            {
                id: '1',
                title:'Soft Drinks',
                catlink:'/drink/soft-drink'
            },
            {
                id: '2',
                title:'Cocktails',
                catlink:'/drink/cocktails'
            },
            {
                id: '3',
                title:'Palm Wine',
                catlink:'/drink/palm-wine'
            }
        ]
    );
    
   
    return (
        <MDBModal isOpen={props.constName} toggle={props.functionName}  centered >
            <MDBModalBody>
                <h5><strong>Create Drink sub-catergory</strong></h5>
               
                <div className="row mt-5">
                    <div className="col-md-12">
                        <form>
                            <div className="form-group row">
                                <div className="col-md-8 offset-md-2 text-center">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="catergory name"
                                        style={{borderRadius:'20px',border:'1px dotted #000000'}}/>
                                </div>
                            </div>
                            
                            <div className="form-group row">
                                <div className="col-md-8 offset-md-2 text-center">
                                <MDBBtn
                                    type="button"
                                    color="#39729b"
                                    style={{borderRadius:'20px', backgroundColor:'#39729b', color:'#ffffff'}}
                                    className="waves-effect z-depth-1a"
                                    size="sm"
                                    >
                                    Create
                                </MDBBtn>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <DrinkSubCategories 
                    drinkCat={drinkCategories}/>
                

               <div className="mt-5 font-small text-center pb-3">
                        <div onClick={props.functionName} className="black-text">
                            <MDBIcon icon="chevron-circle-left" /> Back 
                        </div>
                </div>

            </MDBModalBody>
        </MDBModal>
    )
}
