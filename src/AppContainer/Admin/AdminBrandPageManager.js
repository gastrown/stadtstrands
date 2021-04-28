import React from "react";
import { 
  MDBContainer, MDBRow, MDBCol, MDBIcon
} from 'mdbreact';
import AdminStyle from '../../AppStyles/AdminStyles.module.css';
import AdminNavbar from '../../AppComponents/AdminComp/AdminNavbar';
import BrandPageFormDetails from '../../AppComponents/AdminComp/AdminBrandPageComponents/BrandPageFormDetails';
import BrandPageIcons from '../../AppComponents/AdminComp/AdminBrandPageComponents/BrandPageIcons';
import { Link, useHistory } from 'react-router-dom';

function AdminBrandPageManager () {
  const history = useHistory();
  

  return (
      <>
        <MDBContainer fluid className={AdminStyle.adminbody}>
            <AdminNavbar />
        </MDBContainer>
        <MDBContainer fluid>
            <MDBContainer>
                <MDBRow>
                    <MDBCol className="text-center mt-5">
                        <BrandPageFormDetails />
                    </MDBCol>
                </MDBRow>


                {/* Brand page Icons  */}
                <MDBRow>
                    <MDBCol className="text-center mt-2">
                        <BrandPageIcons />
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol >
                        <p className="mt-5 font-small text-center pb-3">
                            <a href="#!" className="black-text ml-1">
                            
                            <Link onClick={history.goBack} className="black-text">
                                <MDBIcon icon="chevron-circle-left" /> Back 
                            </Link>
                            </a>
                        </p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </MDBContainer>
      </>
    );
  
}

export default AdminBrandPageManager;