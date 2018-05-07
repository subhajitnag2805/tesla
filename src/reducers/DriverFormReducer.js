import {
    DRIVER_UPDATE,
    DRIVER_CREATE
} from '../actions/types';

const INITIAL_STATE = {
      name: '',
      phone: '', 
      email: '',
      password: '',
      address: '',
      city: '',
      states: '',
      zipcode: '',
      country: ''
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case DRIVER_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case DRIVER_CREATE:
            return INITIAL_STATE;
        default:
            return state;
    }
};