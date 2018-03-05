import { 
    TAB_SELECTED,
 } from '../actions/tabs';



const tabReducer = (state , action) => {
    let newState = state;
    
    switch(action.type) {
        case TAB_SELECTED:
            newState = {
                ...state,
                tabs: {
                    ...state.tabs,
                    [action.tabGroup]: action.tabId,
                }     
            };
            break;
        default:
    }

    return newState;
};

export default tabReducer;