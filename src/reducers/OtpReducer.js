import {
    OTP_UPDATE, 
    OTP_CREATE, 
    OTPSUBMIT_UPDATE, 
    OTP_SUBMIT,
    DRVOTP_CREATE,
    DRVOTP_UPDATE,
    DRVOTPSUBMIT_UPDATE,
    DRVOTP_SUBMIT,
    FGPOTP_UPDATE, 
    FGPOTP_CREATE, 
    FGPOTPSUBMIT_UPDATE, 
    FGPOTP_SUBMIT,
    RESETPASS_UPDATE,
    RESET_UPDATE,
    RESET_SUBMIT
} from '../actions/types';

const INITIAL_STATE = {
    phone: '' ,
    otp: '',
    pass: '',
    repass: ''
}

export default (state = INITIAL_STATE, action ) => {
    console.log(action);
    switch (action.type) {
        case OTP_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case OTP_CREATE:
            return INITIAL_STATE;
        case OTPSUBMIT_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value }
        case OTP_SUBMIT:
            return INITIAL_STATE;
        case DRVOTP_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case DRVOTP_CREATE:
            return INITIAL_STATE;
        case DRVOTPSUBMIT_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value }
        case DRVOTP_SUBMIT:
            return INITIAL_STATE;      
        case FGPOTP_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case FGPOTP_CREATE:
            return INITIAL_STATE;
        case FGPOTPSUBMIT_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value }
        case FGPOTP_SUBMIT:
            return INITIAL_STATE; 
        case RESET_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value }
        case RESETPASS_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value }
        case RESET_SUBMIT:
            return INITIAL_STATE;
         default:
            return state;   
    }
}