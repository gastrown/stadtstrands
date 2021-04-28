import React from 'react';
import { MDBCol, MDBContainer, MDBRow} from 'mdbreact';

const AdminNavbar = () => {
  return (
    <MDBContainer fluid style={{ backgroundColor: '#b5cdd9'}}>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12" className="mt-4 mb-4">
            <img src="/images/others/StSt_logo.png" alt="logo" style={{width:'100px'}}/>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBContainer>
      
  )
}

export default AdminNavbar;