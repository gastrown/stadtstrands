import React from 'react';
import { MDBRow, MDBCol} from "mdbreact";
import FormDetailFields from './FormDetailFields';


const formdetailupload = () => {
   
    return(
        <MDBRow>
            <MDBCol size="12" >
                <FormDetailFields />
            </MDBCol>
        </MDBRow>
    );
}

export default formdetailupload;