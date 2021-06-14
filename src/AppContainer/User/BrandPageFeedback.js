import React, { useState, useEffect } from "react";
import UserNavbar from "../../AppComponents/UserComp/UserNavbar";
import { MDBContainer, MDBIcon, MDBRating, MDBBtn } from "mdbreact";
import { Link, useHistory } from "react-router-dom";
import UserStyles from "../../AppStyles/UserStyles.module.css";
import Axios from "axios";

export default function BrandPageFeedback(props) {
  const brandPageId = props.match.params.brandpageid;

  const history = useHistory();

  const [basic] = useState([
    {
      tooltip: "Very Bad",
      choosed: true,
    },
    {
      tooltip: "Poor",
    },
    {
      tooltip: "Ok",
    },
    {
      tooltip: "Good",
    },
    {
      tooltip: "Excellent",
    },
  ]);
  const [feedbackQuestions, setFeedbackQuestion] = useState([]);
  const [loading, setLoading] = useState(true);

  const onChangeFile = (event) => {
    console.log("event.target.files[0]", event.target);
  };

  const imageFileStyle = {
    padding: "10px",
    border: "1px dotted #CCCCCC",
    marginLeft: "12px",
    width: "90%",
    borderRadius: "10px",
    textAlign: "center",
    fontSize: "12px",
  };

  useEffect(() => {
    Axios.get(
      `https://stadtstrandapp.ecrdeveloper.website/api/v1/brandpagefeedback/${brandPageId}`
    )
      .then((response) => {
        console.log(response);
        setFeedbackQuestion(response.data.data.Feedbacks);
        setLoading(false);
        // setScreenLoader(false);
        // setBrandPageDetail(response.data.data);
      })
      .catch((e) => {});
  }, [brandPageId]);
  return (
    <React.Fragment>
      <UserNavbar />
      <MDBContainer fluid style={{ height: "100%", background: "#b5cdd9" }}>
        <div className="row">
          <div
            className="col-10 offset-1 col-md-5 offset-md-3 mt-3 mb-5"
            id={UserStyles.listCard}
          >
            <div className="row mt-3">
              <div className="col-2 text-left">
                <div onClick={history.goBack} className="black-text">
                  <MDBIcon
                    className="mt-2"
                    style={{ fontSize: "25px", color: "#000000" }}
                    icon="chevron-circle-left"
                  />
                </div>
              </div>
              <div className="col-10 text-left mt-1">
                <h3>
                  <b>Give Feedback</b>
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col-10 offset-1 mt-3 font-small text-left ">
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: "500",
                    color: "#c2c2c2",
                  }}
                  className="mt-4"
                >
                  Rate us on how you feel about our service
                </span>
              </div>
            </div>
            {loading ? (
              <div className="col-12 mt-2 mb-2 text-center">
                <div
                  className="spinner-grow text-primary fast ml-2"
                  role="status"
                >
                  <span className="sr-only mt-2">Loading...</span>
                </div>
              </div>
            ) : feedbackQuestions.length < 1 ? (
              <h4>No Feed back questions</h4>
            ) : (
              <div>
                <div className="row">
                  <div className="col-10 offset-1 mt-3 font-small text-left ">
                    {feedbackQuestions.map((feedback) => {
                      return (
                        <div className="mt-2" key={feedback.id}>
                          <span style={{ fontSize: "14px" }}>
                            {feedback.question} <br />
                            <MDBRating data={basic} />
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <form>
                  <div className="form-group row">
                    <div className="col-10 offset-1 mt-3 text-left">
                      <input
                        type="file"
                        id="file"
                        style={{ display: "none" }}
                        onChange={(e) => onChangeFile(e)}
                      />
                      <label htmlFor="file" style={imageFileStyle}>
                        Add location image
                        <span className="ml-4">
                          <MDBIcon
                            icon="cloud-download-alt"
                            style={{
                              backgroundColor: "#39729b",
                              color: "#ffffff",
                              padding: "5px",
                              borderRadius: "10px",
                            }}
                          />
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-10 offset-1 mt-3 text-left">
                      <textarea
                        className="form-control"
                        style={imageFileStyle}
                        defaultValue="Care to share any personal feedback?"
                      ></textarea>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-12 text-center">
                      <MDBBtn
                        type="button"
                        color="blue"
                        style={{ borderRadius: "20px" }}
                        className="waves-effect z-depth-1a"
                        size="md"
                      >
                        Send
                      </MDBBtn>
                    </div>
                  </div>
                </form>
              </div>
            )}

            <div className="row mt-3">
              <div className="col-12 text-center">
                <div className="black-text">
                  <Link
                    to={{
                      pathname: `/user/form/${brandPageId}`,
                    }}
                  >
                    <MDBIcon
                      className="mt-2"
                      style={{ fontSize: "15px", color: "#000000" }}
                      icon="chevron-circle-left"
                    />
                    <span
                      className="ml-1"
                      style={{ fontSize: "15px", color: "#000000" }}
                    >
                      Back to Menu Icons
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MDBContainer>
    </React.Fragment>
  );
}
