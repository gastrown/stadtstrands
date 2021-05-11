import React, {useState} from "react";
import { 
  MDBContainer, MDBRow, MDBCol, MDBCard, 
  MDBCardBody, MDBCardTitle, MDBBtn, MDBIcon,
  MDBModal, MDBModalBody
} from 'mdbreact';
import AdminStyle from '../../AppStyles/AdminStyles.module.css';
import AdminNavbar from '../../AppComponents/AdminComp/AdminNavbar';
import Locations from '../../AppComponents/AdminComp/AdminLocationComponents/Locations';
import { useHistory } from 'react-router-dom';
import MapContainer from '../../AppComponents/MapContainer';

function AdminSetLocation (props) {
  const history = useHistory();
  const iconStyle = {
    fontSize:"70px",
    color:"gray",
    marginTop:"5px",
    marginBottom:"5px"
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
    <MDBContainer fluid className={AdminStyle.adminbody2}>
      <AdminNavbar />
      <MDBContainer>
        <MDBRow>
          <MDBCol className={AdminStyle.cardAlignMiddle}>
            <MDBCard style={{ width: "30rem",borderRadius:"20px" }}>
              <MDBCardBody className="text-center mt-2">
                <MDBCardTitle className='text-center'>Set your location</MDBCardTitle>
                <div>
                    <MDBIcon style={iconStyle} icon="map-marker-alt" />
                </div>
                <div className="mt-2">
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

                    <MDBModal isOpen={modal} toggle={toggle} size="md" centered rounded-20>
                      <MDBModalBody>
                        <h5 className='text-center'>Add Location</h5>
                        <div className="form-group row mt-5">
                          <div className="col-md-8 offset-md-2">
                            <input type="text" className="form-control" placeholder="Location Name" style={{borderRadius:'15px'}} />
                          </div>
                        </div>

                        <div className="orm-group row mt-2">
                            <div className="col-md-8 offset-md-2">
                              <MapContainer />
                            </div>
                        </div>
                          
                        
                        <div className="form-group row mt-5">
                          <div className="col-md-8 offset-md-2">
                            <input type="file" id="file" style={{display: "none"}} 
                                                    onChange={(e) => onChangeFile(e)}/>
                                                <label htmlFor="file" style={imageFileStyle}>
                                                        Add location image <span className='fa fa-download' style={{backgroundColor:'#39729b', color:'#ffffff', padding:'5px', borderRadius:'10px'}}> </span>
                            </label>
                          </div>
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

export default AdminSetLocation;