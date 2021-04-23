import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBBtn, MDBIcon} from 'mdbreact';
import AdminStyle from '../../AppStyles/AdminStyles.module.css';
import AdminNavbar from '../../AppComponents/AdminComp/AdminNavbar';
import { Link, useHistory } from 'react-router-dom';

function AdminSignup () {
  const history = useHistory();
  const iconStyle = {
    fontSize:"100px",
    color:"gray",
    marginTop:"10px"
}

  return (
    <MDBContainer fluid className={AdminStyle.adminbody}>
      <AdminNavbar />
      <MDBContainer>
        <MDBRow>
          <MDBCol className={AdminStyle.cardAlignMiddle}>
            <MDBCard style={{ width: "30rem",borderRadius:"20px" }}>
              <MDBCardBody className="text-center mt-5">
                <MDBCardTitle cascade className='text-center'>Set your location</MDBCardTitle>
                <div>
                    <MDBIcon style={iconStyle} icon="map-marker-alt" />
                </div>
                <div className="text-center mb-3">
                    <MDBBtn
                    type="button"
                    color="blue"
                    style={{borderRadius:'20px'}}
                    className="waves-effect z-depth-1a"
                    size="md"
                    >
                    Add Location
                    </MDBBtn>
                </div>

              <p className="mt-5 font-small text-center pb-3">
                <a href="#!" className="black-text ml-1">
                
                  <Link onClick={history.goBack} className="black-text">
                    <MDBIcon icon="chevron-circle-left" /> Back 
                  </Link>
                </a>
              </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBContainer>
    );
  
}

export default AdminSignup;