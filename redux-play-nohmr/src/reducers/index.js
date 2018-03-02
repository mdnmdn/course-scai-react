import { 
    COUNTER_INCREMENT,
    COUNTER_RESET,
 } from '../actions';

const initialState = {
    value: 0,
};

const rootReducer = (state = initialState, action) => {
    let newState = state;
    // base reducer implementatoin
    switch(action.type) {

        case COUNTER_INCREMENT:
            newState = {
                ...state,
                value: state.value + 1,
            }
            break;
        case COUNTER_RESET:
            newState = {
                ...state,
                value: 0,
            }
            break;
        default:
    }

    return newState;
};

export default rootReducer;