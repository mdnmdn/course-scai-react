import tabReducer from './tabs';
import counterReducer from './counter';

const initialState = {
    value: 0,
    counterMessage: null,
    tabs: {},
};

const rootReducer = (state = initialState, action) => {
    let newState = state;

    newState = tabReducer(newState, action);
    newState = counterReducer(newState, action);

    return newState;
};

export default rootReducer;