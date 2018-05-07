import {
    CUSTOMER_UPDATE,
    CUSTOMER_CREATE
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
        case CUSTOMER_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case CUSTOMER_CREATE:
            return INITIAL_STATE;
        default:
            return state;
    }
};