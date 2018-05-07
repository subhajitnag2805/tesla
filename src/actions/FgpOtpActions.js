import {
    FGPOTP_UPDATE,
    FGPOTP_CREATE,
    FGPOTP_SUBMIT ,
    FGPOTPSUBMIT_UPDATE,
    RESETPASS_UPDATE,
    RESET_UPDATE,
    RESET_SUBMIT
} from './types';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';

let ph;

export const resetPassUpdate = ({ prop, value }) => {
    return {
        type: RESETPASS_UPDATE,
        payload: { prop, value }
    }
}

export const resetUpdate = ({ prop, value }) => {
    return {
        type: RESET_UPDATE,
        payload: { prop, value }
    }
}

export const resetSubmit = ({ pass }) => {
    console.log("passwordreset===" + pass);
    return (dispatch) => {
        let data = {
            phoneNumber : ph,
            newPassword : pass
        }
        console.log(data);

        axios.put('http://ec2-52-27-118-19.us-west-2.compute.amazonaws.com:5555/user/changePassword', data)
        .then(function (response){
            console.log(response);
            console.log("qwertyyyyyhdsf====" + JSON.stringify(response.data.error))

            if(JSON.stringify(response.data.error))
            {
                dispatch({ type: RESET_SUBMIT });
                alert("Password changed successfully ");
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
        })
    }
}

export const fgpotpUpdate = ({ prop, value }) => {
    return {
        type: FGPOTP_UPDATE,
        payload: { prop, value }
    }
}

export const fgpotpSubmitUpdate = ({ prop, value }) => {
    return {
        type: FGPOTPSUBMIT_UPDATE,
        payload: { prop, value }
    }
}

export const fgpotpCreate = ({ otpPhone }) => {
    ph=otpPhone;
    console.log("otpPhone===" + otpPhone);
    return (dispatch) => {
        let data = {
            phoneNumber: otpPhone
        }
        console.log(data);

        axios.put('http://ec2-52-27-118-19.us-west-2.compute.amazonaws.com:5555/user/forgotPassword', data)
        .then(function (response){
            console.log(response);
            console.log("qwertyyyyyhdsf====" + JSON.stringify(response.data.error))

            if(JSON.stringify(response.data.error))
            {
                dispatch({ type: FGPOTP_CREATE });
               Actions.fpOtpStep2();
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
        })
    }
} 

export const fgpotpSubmit = ({tempCode}) => {
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
                dispatch({ type: FGPOTP_SUBMIT });
                console.log("phoneinside==========" + ph);
                Actions.fgtPassword();
                alert("OTP Verified Successfully");
            }
            else if(test==true)
                alert(JSON.stringify(response.data.message));

            else
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

