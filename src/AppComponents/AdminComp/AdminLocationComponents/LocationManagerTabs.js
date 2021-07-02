import React, { useState } from "react";
import LocationManagerTab from "./LocationManagerTab";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import { Link } from "react-router-dom";

function LocationManagerTabs(props) {
  const location = props.location;
  console.log(location);

  const [tabs] = useState([
    {
      id: "1",
      locationtabtitle: "Form Manager",
      tablink: `/admin/form/manager/${location.id}`,
    },
    {
      id: "2",
      locationtabtitle: "Brand Page Manager",
      tablink: `/admin/brand-page/manager/${location.id}`,
    },
    {
      id: "3",
      locationtabtitle: "Reporting View",
      tablink: `/admin/reporting-view/${location.id}`,
    },
    {
      id: "4",
      locationtabtitle: "Mailbox Manager",
      tablink: "/admin/mailbox/manager",
    },
    {
      id: "5",
      locationtabtitle: "Waiter Manager",
      tablink: `/admin/waiter/manager/${location.id}`,
    },
  ]);

  return (
    <MDBContainer>
      <MDBRow center>
        {tabs.map((locationtab) => {
          return (
            <MDBCol
              size="5"
              key={locationtab.id}
              className="mt-3 ml-1"
              attribute={false}
            >
              <Link
                to={{
                  pathname: locationtab.tablink,
                  state: {
                    location: location,
                  },
                }}
                key={locationtab.id}
              >
                <LocationManagerTab
                  key={locationtab.id}
                  locationtabtitle={locationtab.locationtabtitle}
                />
              </Link>
            </MDBCol>
          );
        })}
      </MDBRow>
    </MDBContainer>
  );
}

export default LocationManagerTabs;
