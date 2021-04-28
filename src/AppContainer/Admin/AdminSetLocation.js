import React, {useState} from "react";
import { 
  MDBContainer, MDBRow, MDBCol, MDBCard, 
  MDBCardBody, MDBCardTitle, MDBBtn, MDBIcon,
  MDBModal, MDBModalBody, MDBInput
} from 'mdbreact';
import AdminStyle from '../../AppStyles/AdminStyles.module.css';
import AdminNavbar from '../../AppComponents/AdminComp/AdminNavbar';
import Locations from '../../AppComponents/AdminComp/AdminLocationComponents/Locations';
import { Link, useHistory } from 'react-router-dom';

function AdminSetLocation () {
  const history = useHistory();
  const iconStyle = {
    fontSize:"100px",
    color:"gray",
    marginTop:"10px"
  }

  function handleNextScreen() {
    history.push("/admin/location/manager");
  }

  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  }

  const onChangeFile = (event) => {
    console.log('event.target.files[0]', event.target)
  }

  const imageFileStyle = {
    padding:'10px',
    border:'1px dotted #CCCCCC',
    marginLeft: '12px',
    width:'90%',
    boxShadow:'1px 1px 0.5px 1px #888888',
    borderRadius:"10px",
    textAlign:'center',
    fontSize:'12px'
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
                <div className="mt-5">
                  <Locations/>
                </div>
                <div className="text-center mb-3">
                    <MDBBtn
                    type="button"
                    color="blue"
                    style={{borderRadius:'20px'}}
                    className="waves-effect z-depth-1a"
                    size="md"
                    onClick={toggle}
                    >
                    Add Location
                    </MDBBtn>
                    <MDBModal isOpen={modal} toggle={toggle} size="sm" centered>
                     
                      <MDBModalBody>
                        <h5 className='text-center'>Add Location</h5>
                        <div>
                          <MDBInput label="Example label" outline size="sm" />
                          
                        </div>
                        <div>
                          <input type="file" id="file" style={{display: "none"}}
                                                    onChange={(e) => onChangeFile(e)}/>
                                                <label htmlFor="file" style={imageFileStyle}>
                                                        Add location image <span className='fa fa-download' style={{backgroundColor:'#39729b', color:'#ffffff', padding:'5px', borderRadius:'10px'}}> </span>
                            </label>
                        </div>
                        <div className="mt-3">
                        <MDBBtn
                          type="button"
                          color="blue"
                          style={{borderRadius:'20px'}}
                          className="waves-effect z-depth-1a"
                          size="sm"
                          onClick={handleNextScreen}
                          >
                          Save
                        </MDBBtn>
                        </div>
                      </MDBModalBody>
                    </MDBModal>
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

export default AdminSetLocation;