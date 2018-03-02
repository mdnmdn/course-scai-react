
// actions
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT';

export const COUNTER_RESET = 'COUNTER_RESET';


export const incrementCounter = 
    (value = 1) =>  ({ type: COUNTER_INCREMENT, value });

export const resetCounter = 
    () => ({ type: COUNTER_RESET });
