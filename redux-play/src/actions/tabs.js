
// actions
export const TAB_SELECTED = 'TAB_SELECTED';

export const selectTab = 
    (tabGroup, tabId) =>  ({ type: TAB_SELECTED, tabGroup, tabId });

