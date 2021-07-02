import React from "react";
import UserStyles from "../../AppStyles/UserStyles.module.css";

import BrandPageIcon from "./UserBrandPageIcon";

export default function BrandPageIcons(props) {
  return (
    <div className="container">
      <div className="row">
        {props.icons.map((brandicon) => {
          return (
            <div key={brandicon.id}>
              {brandicon.deactivate ? (
                <div className="col-4 col-md-2 mt-3">
                  <div
                    onClick={brandicon.iconToggle}
                    className={UserStyles.iconButton}
                  >
                    <BrandPageIcon
                      key={brandicon.id}
                      iconName={brandicon.iconName}
                      iconTitle={brandicon.iconTitle}
                    />
                  </div>
                </div>
              ) : (
                <span></span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
