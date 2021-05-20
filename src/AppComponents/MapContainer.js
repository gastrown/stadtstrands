import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapContainer = (props) => {
    const mapStyles = {        
        height: "200px",
        width: "100%"};
      
    const currentLocation = {
        lat: props.lat,
        lng: props.log 
      }

    // const locations = [
    //     {
    //       name: props.address,
    //       location: { 
    //         lat: props.lat,
    //         lng: props.log  
    //       },
    //     },
    //   ];

    return (
        <LoadScript
        googleMapsApiKey='AIzaSyCzEFkhf36FaUK789CPv7PYk5KdoZZpsLA'>
            <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={13}
            center={currentLocation}
            >
                {
                  <Marker position={currentLocation} />
                    // locations.map(item => {
                    // return (
                    // <Marker key={item.name} position={item.location} />
                    // )
                    // })
                }
            </GoogleMap>
        </LoadScript>
    )
}

export default MapContainer;
