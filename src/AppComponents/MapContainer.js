import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapContainer = () => {
    const mapStyles = {        
        height: "300px",
        width: "100%"};
      
    const currentLocation = {
        lat: 41.3954,
        lng: 2.162 
      }

    const locations = [
        {
          name: "Location 1",
          location: { 
            lat: 41.3954,
            lng: 2.162 
          },
        },
        {
          name: "Location 2",
          location: { 
            lat: 41.3917,
            lng: 2.1649
          },
        }
      ];

    return (
        <LoadScript
        googleMapsApiKey='AIzaSyCzEFkhf36FaUK789CPv7PYk5KdoZZpsLA'>
            <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={13}
            center={currentLocation}
            >
                {
                    locations.map(item => {
                    return (
                    <Marker key={item.name} position={item.location} />
                    )
                    })
                }
            </GoogleMap>
        </LoadScript>
    )
}

export default MapContainer;
