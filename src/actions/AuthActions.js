import { Actions } from 'react-native-router-flux';
import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};
export const passwordChanged = (text) => {
    return {
      type: PASSWORD_CHANGED,
      payload: text
    };
  };

  const apiUrl="http://ec2-52-27-118-19.us-west-2.compute.amazonaws.com:5555/";

  export const loginUser = ({ email, password }) => {
    return (dispatch) => {

        /* fetch(apiUrl + 'user/login?phoneNumber=' + email + '&password='+password,
                {
                    headers: {
                        'X-API-Key': 'GF8SEmj3T/3YrtHqnjPEjZS11fyk2fLrp10T8bdmpbk='
                    },
                    method: 'GET'
                })
                //.then((response) => response.json())
                .then(user => 
                    dispatch({type: 'LOGIN_USER_SUCCESS', payload:user}),
                )
        }; */

        fetch('http://ec2-52-27-118-19.us-west-2.compute.amazonaws.com:5555/user/login?phoneNumber='+email+'&password='+password)
        .then((response) => response.json())
        .then(user => {
            if(!user.error){
                //dispatch({type: 'LOGIN_USER_SUCCESS', payload:user})
                loginUserSuccess(dispatch, user);
            }
            else
            //dispatch({type: 'LOGIN_USER_FAIL'})
            loginUserFail(dispatch);
        })
        .catch((error) => { 
            loginUserFail(dispatch);
        });
  }
}

  const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL });
  };
  
  const loginUserSuccess = (dispatch, user) => {
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: user
    });
    Actions.book();
  }