import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBBtn, MDBIcon} from 'mdbreact';
import AdminStyle from '../../AppStyles/AdminStyles.module.css';
import AdminNavbar from '../../AppComponents/AdminComp/AdminNavbar';
import { Link, useHistory } from 'react-router-dom';

function AdminLogin () {
  const history = useHistory();
  return (
    <MDBContainer fluid className={AdminStyle.adminbody2}>
      <AdminNavbar />
      <MDBContainer>
        <MDBRow>
          <MDBCol className={AdminStyle.cardAlignMiddle}>
            <MDBCard style={{ width: "30rem",borderRadius:"20px" }}>
              <MDBCardBody className="text-center mt-5">
                <MDBCardTitle cascade className='text-center'>Sign in</MDBCardTitle>
                <p>to access your brand Page</p>
                <div className="form-group row">
                  <div className="col-md-10 offset-md-1">
                    <input 
                      type="email" 
                      placeholder="Email"
                      style={{borderRadius:'15px'}}
                      className="form-control mt-3" />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-10 offset-md-1">
                    <input 
                      type="password" 
                      placeholder="Password"
                      style={{borderRadius:'15px'}}
                      className="form-control mt-3" />
                  </div>
                </div>
               
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

              <p className="mt-2 font-medium text-center">
                Don't have an account?
                <Link className="blue-text ml-1" to="/admin/0/signup">Sign up</Link>
              </p>

              <div className="mt-2 font-small text-center">
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

export default AdminLogin;