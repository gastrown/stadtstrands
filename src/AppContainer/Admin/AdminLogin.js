import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBInput, MDBBtn, MDBIcon} from 'mdbreact';
import AdminStyle from '../../AppStyles/AdminStyles.module.css';
import AdminNavbar from '../../AppComponents/AdminComp/AdminNavbar';
import { Link, useHistory } from 'react-router-dom';

function AdminLogin () {
  const history = useHistory();
  return (
    <MDBContainer fluid className={AdminStyle.adminbody}>
      <AdminNavbar />
      <MDBContainer>
        <MDBRow>
          <MDBCol className={AdminStyle.cardAlignMiddle}>
            <MDBCard style={{ width: "30rem",borderRadius:"20px" }}>
              <MDBCardBody className="text-center mt-5">
                <MDBCardTitle cascade className='text-center'>Sign in</MDBCardTitle>
                <p>to access your brand Page</p>
                <MDBInput
                  label="Email"
                  group
                  className="mt-5"
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Password"
                  group
                  type="password"
                  validate
                  containerClass="mb-0"
                />
               
              <div className="text-center mb-3">
                <MDBBtn
                  type="button"
                  color="blue"
                  style={{borderRadius:'20px'}}
                  className="waves-effect z-depth-1a"
                  size="md"
                >
                  Log in
                </MDBBtn>
              </div>

              <p className="mt-5 font-medium text-center pb-3">
                Don't have an account?
                <Link className="blue-text ml-1" to="/admin/0/signup">Sign up</Link>
              </p>

              <p className="mt-5 font-small text-center pb-3">
                <a href="#!" className="black-text ml-1">
                
                  <a onClick={history.goBack} href="#!" className="black-text">
                    <MDBIcon icon="chevron-circle-left" /> Back 
                  </a>
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

export default AdminLogin;