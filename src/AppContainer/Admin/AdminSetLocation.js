import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBBtn,
  MDBIcon,
  MDBModal,
  MDBModalBody,
} from "mdbreact";
import AdminStyle from "../../AppStyles/AdminStyles.module.css";
import AdminNavbar from "../../AppComponents/AdminComp/AdminNavbar";
import Locations from "../../AppComponents/AdminComp/AdminLocationComponents/Locations";
import { useHistory } from "react-router-dom";
import MapContainer from "../../AppComponents/MapContainer";
import Geocode from "react-geocode";
import Axios from "axios";

Geocode.setApiKey("AIzaSyCzEFkhf36FaUK789CPv7PYk5KdoZZpsLA");

function AdminSetLocation(props) {
  const history = useHistory();
  const adminId = props.match.params.adminId;
  const token = localStorage.getItem("token");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [locationName, setlocationName] = useState("");
  const [locationAddress, setLocationAddress] = useState("");
  const [formattedAddress, setFormattedAddress] = useState("");
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [loader, setLoader] = useState(false);
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const imageFileStyle = {
    padding: "5px",
    border: "1px dotted #000000",
    marginLeft: "12px",
    width: "90%",
    borderRadius: "25px",
    textAlign: "center",
  };

  const onChangeFile = (e) => {
    setImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const createLocation = (e) => {
    e.preventDefault();
    setLoader(!loader);

    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "ecrtech");
    data.append("cloud_name", "ecrtechdev");

    Axios.post(
      "https://api.cloudinary.com/v1_1/ecrtechdev/image/upload",
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    )

      .then((response) => {
        const url = response.data.url;

        Axios.post(
          "https://stadtstrandapp.ecrdeveloper.website/api/v1/brandpage",
          {
            name: locationName,
            address: locationAddress,
            latitude: latitude,
            longitude: longitude,
            adminId: adminId,
            locationImagePath: url,
          },
          {
            headers: {
              auth: token,
            },
          }
        )
          .then((response) => {
            setModal(!modal);
            window.location.reload();
          })
          .catch((e) => {
            console.log(e.response);
            setLoader(false);
          });
      })
      .catch((err) => console.log(err));
  };

  const logout = () => {
    window.localStorage.clear();
    window.location.href = "/admin/0/login";
  };

  const iconStyle = {
    fontSize: "70px",
    color: "gray",
    marginTop: "5px",
    marginBottom: "5px",
  };

  const findLonLatfromAddress = (address) => {
    // Get latitude & longitude from address.
    Geocode.fromAddress(address).then(
      (response) => {
        setLocationAddress(address);
        setLatitude(response.results[0].geometry.location.lat);
        setLongitude(response.results[0].geometry.location.lng);
        setFormattedAddress(response.results[0].formatted_address);
      },
      (error) => {
        console.error(error);
      }
    );
  };

  return (
    <MDBContainer fluid className={AdminStyle.adminbody}>
      <AdminNavbar />
      <MDBContainer>
        <MDBRow>
          <MDBCol className={AdminStyle.cardAlignMiddle}>
            <MDBCard style={{ width: "30rem", borderRadius: "20px" }}>
              <MDBCardBody className="text-center mt-2">
                <MDBCardTitle className="text-center">
                  Set your location
                </MDBCardTitle>
                <div>
                  <MDBIcon style={iconStyle} icon="map-marker-alt" />
                </div>
                <div className="mt-2">
                  <Locations adminId={adminId} />
                </div>
                <div className="text-center mb-3">
                  <MDBBtn
                    type="button"
                    color="blue"
                    style={{ borderRadius: "20px" }}
                    className="waves-effect z-depth-1a"
                    size="md"
                    onClick={toggle}
                  >
                    Add Location
                  </MDBBtn>

                  <MDBModal isOpen={modal} toggle={toggle}>
                    <MDBModalBody>
                      <h5 className="text-center">Add Location</h5>
                      <form onSubmit={createLocation}>
                        <div className="form-group row mt-3">
                          <div className="col-md-8 offset-md-2">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Location Name"
                              style={{ borderRadius: "15px" }}
                              onChange={(e) => {
                                setlocationName(e.target.value);
                              }}
                            />
                          </div>
                        </div>

                        <div className="form-group row mt-2">
                          <div className="col-md-8 offset-md-2">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Location Address"
                              style={{ borderRadius: "15px" }}
                              onMouseOut={(e) => {
                                findLonLatfromAddress(e.target.value);
                              }}
                            />
                          </div>
                        </div>

                        <div className="orm-group row mt-2">
                          <div className="col-md-8 offset-md-2">
                            {latitude ? (
                              <MapContainer
                                lat={latitude}
                                log={longitude}
                                address={formattedAddress}
                              />
                            ) : (
                              <div></div>
                            )}
                          </div>
                        </div>

                        <div className="form-group row mt-2">
                          <div className="col-md-8 offset-md-2">
                            <input
                              type="file"
                              id="file"
                              style={{ display: "none" }}
                              onChange={onChangeFile}
                            />
                            <label htmlFor="file" style={imageFileStyle}>
                              <h6>Add location image </h6>
                              <MDBIcon
                                icon="cloud-download-alt"
                                style={{
                                  backgroundColor: "#39729b",
                                  color: "#ffffff",
                                  padding: "5px",
                                  borderRadius: "10px",
                                }}
                              />
                            </label>
                          </div>
                        </div>

                        {imagePreview ? (
                          <div className="row">
                            <div className="col-md-10 offset-md-1 text-center">
                              <img
                                src={imagePreview}
                                alt="img preview"
                                id={AdminStyle.imgBoxed}
                              />
                            </div>
                          </div>
                        ) : (
                          <div></div>
                        )}

                        <div className="form-group row">
                          <div className="col-md-12 text-center mb-3">
                            {loader ? (
                              <div
                                className="spinner-border fast ml-2 mt-3"
                                role="status"
                              >
                                <span className="sr-only mt-2">Loading...</span>
                              </div>
                            ) : (
                              <div>
                                <MDBBtn
                                  type="submit"
                                  color="blue"
                                  style={{ borderRadius: "20px" }}
                                  className="waves-effect z-depth-1a"
                                  size="md"
                                >
                                  save
                                </MDBBtn>
                                <MDBBtn
                                  type="submit"
                                  color="white"
                                  style={{ borderRadius: "20px" }}
                                  className="waves-effect z-depth-1a"
                                  size="sm"
                                  onClick={toggle}
                                >
                                  Close
                                </MDBBtn>
                              </div>
                            )}
                          </div>
                        </div>
                      </form>
                    </MDBModalBody>
                  </MDBModal>
                </div>

                <div className="row mt-5 font-small text-center pb-3">
                  <div className="col-6 black-text " onClick={history.goBack}>
                    <MDBIcon icon="chevron-circle-left" /> Back
                  </div>
                  <div className="col-6 black-text " onClick={logout}>
                    Log out <MDBIcon icon="sign-out-alt" />
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
