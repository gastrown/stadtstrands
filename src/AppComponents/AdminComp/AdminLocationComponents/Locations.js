import { Component } from "react";
import Location from './Location';
import {MDBContainer, MDBRow, MDBCol } from 'mdbreact';


class Locations extends Component {
    state = {
        locations: [
            {
                id: '1',
                locationimg:"/images/others/stadtstrandFeature1.jpeg",
                alt:"location1",
                locationname:"Abia Beach"
            },
            {
                id: '2',
                locationimg:"/images/others/stadtstrandFeature2.jpg",
                alt:"location2",
                locationname:"Lekki Beach"
            },
            {
                id: '3',
                locationimg:"/images/others/stadtstrandFeature3.jpeg",
                alt:"location3",
                locationname:"Imo Beach"
            },
            {
                id: '4',
                locationimg:"/images/others/stadtstrandFeature2.jpg",
                alt:"location4",
                locationname:"Imo River"
            },
            {
                id: '5',
                locationimg:"/images/others/stadtstrandFeature1.jpeg",
                alt:"location5",
                locationname:"Asaba Caves"
            },
            {
                id: '6',
                locationimg:"/images/others/stadtstrandFeature2.jpg",
                alt:"location6",
                locationname:"Enugu Lakes"
            },
        ]
    }

    render() {

        let locations = 
            <MDBContainer>
                <MDBRow>
                    <MDBCol>
                        <h5 style={{textAlign:'center'}}>No Location available!</h5>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>;

        locations = this.state.locations.map( location => {
                return(
                        <Location 
                            key={location.id}
                            locationimg={location.locationimg}
                            alt={location.alt}
                            locationname={location.locationname}/>
                        );
                }
        );
        

        return (
            <MDBContainer>
                <MDBRow style={{alignItems:"center"}}>
                     {locations}
                </MDBRow>
            </MDBContainer>
        );
    }
}

export default Locations;