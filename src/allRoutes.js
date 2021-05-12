import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import HomePage from './AppContainer/HomePage';
import AdminLogin from './AppContainer/Admin/AdminLogin';
import AdminSignup from './AppContainer/Admin/AdminSignup';
import AdminSetLocation from './AppContainer/Admin/AdminSetLocation';
import AdminLocationManager from './AppContainer/Admin/AdminLocationManager';
import AdminFormManager from './AppContainer/Admin/AdminFormManager';
import AdminBrandPageManager from './AppContainer/Admin/AdminBrandPageManager';
import AdminSubMenuManager from './AppContainer/Admin/AdminSubMenuManager';
import AdminEditSubMenu from './AppContainer/Admin/AdminEditSubMenuItem';

import WaiterLogin from './AppContainer/Waiter/Waiterlogin';
import WaiterHomePage from './AppContainer/Waiter/WaiterHomePage';

import UserFormPage from './AppContainer/User/UserFormPage';
import UserFoodMenu from './AppContainer/User/UserFoodMenu';
import UserDrinksMenu from './AppContainer/User/UserDrinksMenu';
import UserSingleDrinkMenu from './AppContainer/User/UserSingleDrinkMenu';
import UserCart from './AppContainer/User/UserCart';


const allroutes = (props) => {
    return(
        <>
        <Router>
            <Switch>
                <Route path='/' exact component={HomePage}/>
                {/* Admin Routes */}
                    <Route path='/admin/0/login' exact component={AdminLogin}/>

                    <Route path='/admin/0/signup' exact component={AdminSignup}/>

                    <Route path='/admin/set-location' exact component={AdminSetLocation}/>

                    <Route path='/admin/location/manager' exact component={AdminLocationManager}/>
                    
                    <Route path='/admin/form/manager' exact component={AdminFormManager}/> 

                    <Route path='/admin/brand-page/manager' exact component={AdminBrandPageManager}/> 

                    <Route path='/drink/:subdrinktitle' exact component={AdminSubMenuManager}/> 

                    <Route path='/food/:subfoodtitle' exact component={AdminSubMenuManager}/> 

                    <Route path='/edit/:submenutitle' exact component={AdminEditSubMenu}/> 

                {/* Waiter Routes */}
                    <Route path='/waiter/login' exact component={WaiterLogin}/>

                    <Route path='/waiter/dashboard' exact component={WaiterHomePage}/>

                {/* User Routes */}
                    <Route path='/user/form/:formid' exact component={UserFormPage}/>

                    <Route path='/menu/food' exact component={UserFoodMenu}/>

                    <Route path='/menu/drinks' exact component={UserDrinksMenu}/>

                    <Route path='/drinks/:subdrinkcat/:subdrinkname' exact component={UserSingleDrinkMenu}/>

                    <Route path='/menu/cart' exact component={UserCart}/>

            </Switch>
        </Router>
        </>
    );
}

export default allroutes;