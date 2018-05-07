import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import CustomerFormReducer from './CustomerFormReducer';
import DriverFormReducer from './DriverFormReducer';
import OtpReducer from './OtpReducer';

export default combineReducers({
    auth: AuthReducer,
    customerDetailsForm: CustomerFormReducer,
    driverDetailsForm: DriverFormReducer,
    otpReducer: OtpReducer,

})