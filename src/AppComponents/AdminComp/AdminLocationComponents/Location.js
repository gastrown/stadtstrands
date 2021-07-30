import React from "react";
import { Link } from "react-router-dom";

const location = (props) => {
  const locationimgstyle = {
    borderRadius: "15px",
    height: "100px",
    weight: "100%",
    objectFit: "cover",
  };

  return (
    <div className="col-6 col-md-6">
      <Link
        to={{
          pathname: `/admin/location/manager/${props.location.id}`,
          state: {
            location: props.location,
          },
        }}
        style={{ color: "black" }}
      >
        <div>
          <img
            className="img-fluid"
            style={locationimgstyle}
            src={props.location.locationImagePath}
            alt={props.location.name}
          />
        </div>
        <p style={{ fontSize: "14px", marginTop: "5px" }}>
          {props.location.name}
        </p>
      </Link>
    </div>
  );
};

export default location;
