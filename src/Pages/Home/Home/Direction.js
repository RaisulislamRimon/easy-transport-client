import React, { useState } from 'react';
import { DirectionsService, DirectionsRenderer, GoogleMap } from '@react-google-maps/api';
const Direction = ({ origin, destination }) => {
    if (origin === '' || destination === '') {
        origin = 'uttara dhaka';
        destination = 'mirpur dhaka'
    }
    const [response, setResponse] = useState(null)
    const directionsCallback = (res) => {
        if (res !== null) {
            if (res.status === 'OK') {
                if (JSON.stringify(response) !== JSON.stringify(res)) {
                    setResponse(res)
                }
            } else {
                console.log('response: ', res)
            }
        }
    }
    return (
        <GoogleMap
            // required
            id='direction-example'
            // required
            mapContainerStyle={{
                height: '100vh',
                width: '100%'
            }}
            // required
            zoom={18}
            // required
            center={{
                lat: 0,
                lng: -180
            }}
        >
            {
                (
                    destination !== '' &&
                    origin !== ''
                ) &&
                (
                    <DirectionsService
                        options={{
                            destination: destination,
                            origin: origin,
                            travelMode: 'DRIVING'
                        }}
                        callback={directionsCallback}

                    />
                )
            }
            {
                response !== null && (
                    <DirectionsRenderer
                        // required
                        options={{
                            directions: response
                        }}

                    />
                )
            }
        </GoogleMap>
    );
};

export default Direction;