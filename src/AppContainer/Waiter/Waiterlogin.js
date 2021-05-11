import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBBtn} from 'mdbreact';
import WaiterStyles from '../../AppStyles/WaiterStyles.module.css';


function WaiterLogin () {
  
  return (
    <MDBContainer fluid className={WaiterStyles.waiterbody2}>
      <MDBContainer fluid style={{ backgroundColor: '#b5cdd9'}}>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12" className="mt-4 mb-4">
            <img src="/images/others/StSt_logo.png" alt="logo" style={{width:'100px'}}/>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBContainer>
      <MDBContainer>
        <MDBRow>
          <MDBCol className={WaiterStyles.cardAlignMiddle}>
            <MDBCard style={{ width: "30rem",borderRadius:"20px" }}>
              <MDBCardBody className="text-center mt-5">
                <MDBCardTitle cascade className='text-center'>Waiter Sign in</MDBCardTitle>
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

              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBContainer>
    );
  
}

export default WaiterLogin;