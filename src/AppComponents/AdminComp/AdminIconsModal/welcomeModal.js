import React, { useEffect, useState } from "react";
import { MDBModal, MDBModalBody, MDBBtn, MDBIcon } from "mdbreact";
import AdminStyle from "../../../AppStyles/AdminStyles.module.css";
import Axios from "axios";

export default function WelcomeModal(props) {
  //console.log(props.locationId);
  //const adminId = props.match.params.adminId;
  const [image, setImage] = useState("");
  const [imageWelcomePreview, setImageWelcomePreview] = useState("");
  const [welcomeText, setWelcomeText] = useState("");
  const [loader, setLoader] = useState(false);
  const brandPageId = props.locationId;

  useEffect(() => {
    Axios.get(
      `https://stadstrandnodeapi.herokuapp.com/api/v1/brandpagewelcome/${brandPageId}`
    )
      .then((response) => {
        const welcomeFile = response.data.data;
        setImageWelcomePreview(welcomeFile.imagePath);
        setWelcomeText(welcomeFile.welcomeText);
      })
      .catch((e) => {
        console.log(e.response);
      });
  }, []);

  const imageFileStyle = {
    padding: "10px",
    border: "1px dotted #CCCCCC",
    marginLeft: "12px",
    width: "60%",
    borderRadius: "10px",
    textAlign: "center",
    fontSize: "12px",
    backgroundColor: "#ffffff",
  };

  const welcomeChangeFile = (e) => {
    setImage(e.target.files[0]);
    setImageWelcomePreview(URL.createObjectURL(e.target.files[0]));
  };

  const createWelcomePage = (e) => {
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
          "https://stadstrandnodeapi.herokuapp.com/api/v1/brandpagewelcome",
          {
            brandPageId: brandPageId,
            welcomeText: welcomeText,
            imagePath: url,
          }
        )
          .then((response) => {
            console.log(response);
            //setModal(!modal);
            // window.location.reload();
            setLoader(false);
          })
          .catch((e) => {
            console.log(e.response);
            setLoader(false);
          });
      })
      .catch((err) => console.log(err));
  };

  return (
    <MDBModal isOpen={props.constName} toggle={props.functionName} centered>
      <MDBModalBody>
        <h3>Welcome</h3>
        <form onSubmit={createWelcomePage}>
          {imageWelcomePreview ? (
            <div className="row">
              <div className="col-md-10 offset-md-1 text-center">
                <img
                  src={imageWelcomePreview}
                  alt="img preview"
                  id={AdminStyle.imgBoxed}
                />
              </div>
            </div>
          ) : (
            <div></div>
          )}
          <div className="form-group mt-5">
            <input
              type="file"
              className="form-control"
              id="file2"
              style={{ display: "none" }}
              onChange={welcomeChangeFile}
            />
            <label htmlFor="file2" style={imageFileStyle}>
              Add location image <br />
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
          <div className="row form-group mt-4">
            <div className="col-md-8 offset-md-2 mt-4">
              <input
                placeholder="Enter welcome text here"
                defaultValue={welcomeText}
                type="text"
                className="form-control text-center"
                style={{ border: "1px dotted black" }}
                onChange={(e) => {
                  setWelcomeText(e.target.value);
                }}
              />
            </div>
          </div>

          {loader ? (
            <div className="spinner-border fast ml-2 mt-3" role="status">
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
                onClick={props.functionName}
              >
                Close
              </MDBBtn>
            </div>
          )}

          <div className="mt-5 font-small text-center pb-3">
            <div onClick={props.functionName} className="black-text">
              <MDBIcon icon="chevron-circle-left" /> Back
            </div>
          </div>
        </form>
      </MDBModalBody>
    </MDBModal>
  );
}
