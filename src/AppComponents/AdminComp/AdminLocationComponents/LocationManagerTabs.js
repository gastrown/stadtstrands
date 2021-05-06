import React, { useState} from 'react';
import LocationManagerTab from './LocationManagerTab';
import { MDBCol, MDBContainer, MDBRow} from 'mdbreact';
import { Link } from 'react-router-dom';


function LocationManagerTabs() {
    const [tabs] = useState(
        [
            {
                id: '1',
                locationtabtitle:"Form Manager",
                tablink:'/admin/form/manager'
            },
            {
                id: '2',
                locationtabtitle:"Brand Page Manager",
                tablink:'/admin/brand-page/manager'
            },
            {
                id: '3',
                locationtabtitle:"Reporting View",
                tablink:'/admin/reporting-view'
            },
            {
                id: '4',
                locationtabtitle:"Mailbox Manager",
                tablink:'/admin/mailbox/manager'
            },
           
        ]
    )

        
        let locationTabs = tabs.map( locationtab => {
                return(
                    <MDBCol size="5"  className="mt-5 ml-2">
                        <Link to={locationtab.tablink} key={locationtab.id}> 
                            <LocationManagerTab 
                                key={locationtab.id}
                                locationtabtitle={locationtab.locationtabtitle}/>
                        </Link>
                    </MDBCol>
                    );
                }
        );
        

        return (
            <MDBContainer>
                <MDBRow center>
                     {locationTabs}
                </MDBRow>
            </MDBContainer>
        );
    
}

export default LocationManagerTabs;