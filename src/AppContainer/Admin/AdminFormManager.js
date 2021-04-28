import React from "react";
import { 
  MDBContainer, MDBRow, MDBCol, MDBCard, 
  MDBCardBody, MDBIcon, MDBBtn
} from 'mdbreact';
import AdminStyle from '../../AppStyles/AdminStyles.module.css';
import AdminNavbar from '../../AppComponents/AdminComp/AdminNavbar';
import FormManagerComponents from '../../AppComponents/AdminComp/AdminFormManagerComponents/FormManagerComponent';
import { Link, useHistory } from 'react-router-dom';

function AdminFormManager () {
  const history = useHistory();
  
  const saveBtnStyle = {
    fontSize:'12px',
    borderRadius:'20px'
  }

  return (
    <MDBContainer fluid className={AdminStyle.adminbody}>
      <AdminNavbar />
      <MDBContainer>
        <MDBRow>
          <MDBCol className={AdminStyle.cardAlignMiddle}>
            <MDBCard style={{ width: "45rem",borderRadius:"20px" }}>
              <MDBCardBody className="text-center mt-5">
               
                <div>
                <FormManagerComponents />
                </div>

                <div>
                <MDBBtn
                        type="button"
                        color="blue"
                        style={saveBtnStyle}
                        size="sm"
                >Save</MDBBtn>
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

export default AdminFormManager;