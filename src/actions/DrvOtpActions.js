import {
    DRVOTP_UPDATE,
    DRVOTP_CREATE,
    DRVOTP_SUBMIT ,
    DRVOTPSUBMIT_UPDATE
} from './types';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { Alert } from 'react-native';

export const drvotpUpdate = ({ prop, value }) => {
    return {
        type: DRVOTP_UPDATE,
        payload: { prop, value }
    }
}

export const drvotpSubmitUpdate = ({ prop, value }) => {
    return {
        type: DRVOTPSUBMIT_UPDATE,
        payload: { prop, value }
    }
}

let ph;

export const drvotpCreate = ({ otpPhone }) => {
    ph=otpPhone;
    console.log("otpPhone===" + otpPhone);
    return (dispatch) => {
        let data = {
            phoneNumber: otpPhone
        }
        console.log(data);

        axios.post('http://ec2-52-27-118-19.us-west-2.compute.amazonaws.com:5555/user/verifyUser', data)
        .then(function (response){
            console.log(response);
            console.log("qwertyyyyyhdsf====" + JSON.stringify(response.data.error))

            let test=response.data.error;
            let res=response.data.message;

            if(test==false)
            {
                dispatch({ type: DRVOTP_CREATE });
               Actions.OtpStep2();
            }
            else if(test==true)
            Alert.alert(
                'Phone Number field Empty',
                'Enter a Valid Phone Number',
                [
                  {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
              )
    
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
        })
    } 
}

export const drvotpSubmit = ({tempCode}) => {
    console.log("otp123456890////" + tempCode);
    console.log("    ph==       " + ph);
  //console.log("phone........." + phone);  
    return(dispatch) => {
        let data = {
            phoneNumber: ph,
            code: parseInt(tempCode)
        }
        console.log(data);
        axios.post('http://ec2-52-27-118-19.us-west-2.compute.amazonaws.com:5555/user/verifyOtp',data)
        .then(function (response) {
            console.log(response);

            let test=response.data.error;
            let res=response.data.message;

            console.log('my test ==  '+test);
            console.log("my repochagsku   " + res);

            

            if(test==false)
            {
                dispatch({ type: DRVOTP_SUBMIT });
                console.log("phoneinside==========" + ph);
                Actions.createDriverFirst({
                    phoneNumber: ph
            });
                alert("OTP Verified Successfully");
            }
            else if(test==true)
                alert(JSON.stringify(response.data.message));

            else if(response.Error)
                alert("Network Error: User cant be verified");
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
        })
    }
}