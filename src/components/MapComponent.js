import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker} from 'google-maps-react';

 const mapStyles = {
        width: '100%',
        height: '100%' 
    };

export class MapContainer extends Component {



    render() {
        return (
            <div fluid style={{ height: '100vh', width: '100%', border: 'solid black' }}>
            <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={{
                    lat: -1.2884,
                    lng: 36.8233
                }}
            >
                    <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBMdZj3yIgA483pcxNNNWT3bEvPVWxoghU'
})(MapContainer);