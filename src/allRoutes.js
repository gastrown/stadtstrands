import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./AppContainer/HomePage";
import AdminLogin from "./AppContainer/Admin/AdminLogin";
import AdminSignup from "./AppContainer/Admin/AdminSignup";
import AdminSetLocation from "./AppContainer/Admin/AdminSetLocation";
import AdminLocationManager from "./AppContainer/Admin/AdminLocationManager";
import AdminFormManager from "./AppContainer/Admin/AdminFormManager";
import AdminBrandPageManager from "./AppContainer/Admin/AdminBrandPageManager";
import AdminSubMenuManager from "./AppContainer/Admin/AdminSubMenuManager";
import AdminEditSubMenu from "./AppContainer/Admin/AdminEditSubMenuItem";

import WaiterLogin from "./AppContainer/Waiter/Waiterlogin";
import WaiterHomePage from "./AppContainer/Waiter/WaiterHomePage";

import UserFormPage from "./AppContainer/User/UserFormPage";
import UserFoodMenu from "./AppContainer/User/UserFoodMenu";
import UserDrinksMenu from "./AppContainer/User/UserDrinksMenu";
import UserSingleDrinkMenu from "./AppContainer/User/UserSingleDrinkMenu";
import UserCart from "./AppContainer/User/UserCart";
import UserCheckout from "./AppContainer/User/UserCheckout";
import UserOrder from "./AppContainer/User/UserOrder";
import AboutBrandPage from "./AppContainer/User/AboutBrandPage";
import FeedbackBrandPage from "./AppContainer/User/BrandPageFeedback";
import SingleFoodTruck from "./AppContainer/User/SingleFoodTruck";
import SingleLocation from "./AppContainer/User/SingleLocation";
import BrandPageJob from "./AppContainer/User/BrandPageJobs";
import JobApplication from "./AppContainer/User/JobApplicationForm";
import BrandPageEvent from "./AppContainer/User/BrandPageEvents";
import EventDetail from "./AppContainer/User/EventDetail";

const allroutes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        {/* Admin Routes */}
        <Route path="/admin/0/login" exact component={AdminLogin} />

        <Route path="/admin/0/signup" exact component={AdminSignup} />

        <Route
          path="/admin/set-location/:adminId"
          exact
          component={AdminSetLocation}
        />

        <Route
          path="/admin/location/manager/:locationId"
          exact
          component={AdminLocationManager}
        />

        <Route
          path="/admin/form/manager/:locationId"
          exact
          component={AdminFormManager}
        />

        <Route
          path="/admin/brand-page/manager/:locationId"
          exact
          component={AdminBrandPageManager}
        />

        <Route
          path="/admin/menu/:subdrinktitle"
          exact
          component={AdminSubMenuManager}
        />

        <Route
          path="/admin/edit-menu/:submenutitle"
          exact
          component={AdminEditSubMenu}
        />

        {/* Waiter Routes */}
        <Route path="/waiter/login" exact component={WaiterLogin} />

        <Route path="/waiter/dashboard" exact component={WaiterHomePage} />

        {/* User Routes */}
        <Route path="/user/form/:Brandpageid" exact component={UserFormPage} />

        <Route path="/menu/food" exact component={UserFoodMenu} />

        <Route path="/menu/drinks" exact component={UserDrinksMenu} />

        <Route
          path="/drinks/:subdrinkcat/:subdrinkname"
          exact
          component={UserSingleDrinkMenu}
        />

        <Route path="/menu/cart" exact component={UserCart} />

        <Route path="/menu/checkout" exact component={UserCheckout} />

        <Route path="/user/orders" exact component={UserOrder} />

        <Route
          path="/about-brandpage/:brandpageid"
          exact
          component={AboutBrandPage}
        />

        <Route
          path="/brand-page/feedback/:brandpageid"
          exact
          component={FeedbackBrandPage}
        />

        <Route path="/food-truck/:truckId" exact component={SingleFoodTruck} />

        <Route
          path="/location-details/:locationId"
          exact
          component={SingleLocation}
        />

        <Route path="/brand-page/jobs" exact component={BrandPageJob} />

        <Route path="/jobs/apply/:jobId" exact component={JobApplication} />

        <Route path="/brand-page/events" exact component={BrandPageEvent} />

        <Route path="/event/details/:eventId" exact component={EventDetail} />
      </Switch>
    </Router>
  );
};

export default allroutes;
