import React from 'react';
import { MDBCol } from 'mdbreact';
import AutoFillChecker from './AutofillChecker';
import FormDetailUpload from './FormDetailUpload';
import LogoUpload from './LogoUpload';

const formmanagercomponent = (props) => {
    
   
    return(
               <MDBCol size="12">
                   <LogoUpload />
                   <AutoFillChecker />
                   <FormDetailUpload />

               </MDBCol>
    );
}

export default formmanagercomponent;