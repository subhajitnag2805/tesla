import { Actions } from 'react-native-router-flux';
import {
    CUSTOMER_UPDATE,
    CUSTOMER_CREATE
} from './types';
import axios from 'axios';

export const custUpdate = ({ prop, value }) => {
    return {
        type: CUSTOMER_UPDATE,
        payload: { prop, value }
    };
};

export const custCreate = ({ name, phone, email, password, address, city, states, zipcode, country }) => {
    return (dispatch) => {
        let data = {
            role: 'user',
            name: name,
            phoneNumber: phone,
            email: email,
            password: password,
            address: address,
            city: city,
            state: states,
            zipcode: zipcode,
            country: country
        }
        console.log(data);

        axios.post('http://ec2-52-27-118-19.us-west-2.compute.amazonaws.com:5555/user', data)
            .then(function (response) {
                
                console.log(response);

                if(JSON.stringify(response.data.error))
                {
                     dispatch({ type: CUSTOMER_CREATE });   
                     alert("Registration Successful");
                     Actions.auth();
                }
                else
                alert(JSON.stringify(response.data.message));

            })
            .catch(function (error) {
                console.log(error);
                Alert.alert(
                    'Network Error',
                    'Connect to internet',
                    [
                      {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                      {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ],
                    { cancelable: false }
                  )
       });

    }
};

