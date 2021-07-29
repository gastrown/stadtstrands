import React, { useState } from "react";
import LocationManagerTab from "./LocationManagerTab";
import { MDBContainer } from "mdbreact";
import { Link } from "react-router-dom";

function LocationManagerTabs(props) {
  const location = props.location;

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
      <div className="row">
        {tabs.map((locationtab) => {
          return (
            <div className="col-6 col-md-3 mt-3 ml-3" key={locationtab.id}>
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
            </div>
          );
        })}
      </div>
    </MDBContainer>
  );
}

export default LocationManagerTabs;
