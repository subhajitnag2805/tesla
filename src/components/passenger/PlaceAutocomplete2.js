import RNGooglePlaces from 'react-native-google-places';
import GooglePlacesAutocomplete from './GoogleInput2';
import React, { Component } from 'react';


export default class PlaceAutocomplete2 extends Component {
    render() {
        return(
            <GooglePlacesAutocomplete

            placeholder='Enter Destination'
            minLength={2}
            autoFocus={false}
            returnKeyType={'default'}
            fetchDetails={true}
            styles={{
                textInputContainer: {
                    backgroundColor: 'rgba(0,0,0,0)',
                    borderTopWidth: 0,
                    borderBottomWidth: 0
                },
                textInput: {
                    marginLeft: 0,
                    marginRight: 0,
                    height: 38,
                    color: '#5d5d5d',
                    fontSize: 16
                }
                //   predefinedPlacesDescription: {
                //     color: '#1faadb'
                //   },
                
            }}
            />
        )
    }
}