import React from 'react';
import { MDBCol, MDBContainer, MDBRow} from 'mdbreact';

const AdminNavbar = () => {
  return (
    <MDBContainer>
        <MDBRow>
          <MDBCol md="12" className="mt-4 mb-4">
            <img src="/images/others/StSt_logo.png" alt="logo" style={{width:'100px'}}/>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
  )
}

export default AdminNavbar;