import { 
    COUNTER_INCREMENT,
    COUNTER_DECREMENT,
    COUNTER_RESET,
 } from '../actions';

const initialState = {
    value: 0,
    counterMessage: null,
};

const rootReducer = (state = initialState, action) => {
    let newState = state;
    // base reducer implementatoin
    switch(action.type) {
        case COUNTER_INCREMENT:
            newState = {
                ...state,
                value: state.value + action.value,
                counterMessage: null,
            };
            break;
        case COUNTER_DECREMENT:
            const newValue = state.value - action.value;
            if (newValue >= 0){
                newState = {
                    ...state,
                    value: newValue,
                };
            } else {
                newState = {
                    ...state,
                    counterMessage: 'non puoi scendere sotto 0',
                };
            }
            break;
        case COUNTER_RESET:
            newState = {
                ...state,
                value: 0,
                counterMessage: null,
            }
            break;
        default:
    }

    return newState;
};

export default rootReducer;