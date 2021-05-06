import React from "react";
import { 
  MDBContainer, MDBRow, MDBCol, MDBCard, 
  MDBCardBody, MDBCardTitle , MDBIcon
} from 'mdbreact';
import AdminStyle from '../../AppStyles/AdminStyles.module.css';
import AdminNavbar from '../../AppComponents/AdminComp/AdminNavbar';
import LocationManagerTabs from '../../AppComponents/AdminComp/AdminLocationComponents/LocationManagerTabs';
import { useHistory } from 'react-router-dom';

function AdminLocationManager () {
  const history = useHistory();
  

  return (
    <MDBContainer fluid className={AdminStyle.adminbody2}>
      <AdminNavbar />
      <MDBContainer>
        <MDBRow>
          <MDBCol className={AdminStyle.cardAlignMiddle}>
            <MDBCard style={{ width: "30rem",borderRadius:"20px" }}>
              <MDBCardBody className="text-center mt-5">
                <MDBCardTitle cascade className='text-center'>Location Manager</MDBCardTitle>
                    <MDBRow className="mt-5">
                        <LocationManagerTabs />
                    </MDBRow>
                

              <div className="mt-5 font-small text-center pb-3">
                  <div onClick={history.goBack} className="black-text">
                    <MDBIcon icon="chevron-circle-left" /> Back 
                  </div>
              </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBContainer>
    );
  
}

export default AdminLocationManager;