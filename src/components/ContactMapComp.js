import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
class ContactMapComp extends Component {
    static defaultProps = {
        center: {
            lat: 10.823099,
            lng: 106.629662
        },
        zoom: 13
    };
    render() {
        return (
            <section>
                <div className="contact-map">
                    <div className="container">
                        <div className="map">
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: 'AIzaSyCMcZIPem8BOTEWNsLpqXYxRzyASEqBLJA' }}
                                defaultCenter={this.props.center}
                                defaultZoom={this.props.zoom}
                            >
                                <AnyReactComponent
                                    lat={10.823099}
                                    lng={106.629662}
                                    text="My Marker"
                                />
                            </GoogleMapReact>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactMapComp;