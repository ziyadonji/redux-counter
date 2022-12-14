import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name:'counter',
    initialState: initialCounterState,
    reducers:{
        increment(state){
            state.counter++;
        },
        decrement (state){
            state.counter--;
        },
        increase ( state,action){
            state.counter = state.counter + action.amount;
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter;
        }
    }
})

// const counterReducer = (state={counter:0}, action) => {
//     if (action.type === 'toggle'){
//         return {
//             counter : state.counter,
//             showCounter: !state.showCounter
//         };
//     }
//     if(action.type === 'increment'){
//         return {
//             counter :state.counter +1,
//             showCounter: state.showCounter
//         }
//     }
//     if (action.type === 'decrement'){
//         return {
//             counter: state.counter -1,
//             showCounter: state.showCounter
//         }
//     }
//     if (action.type === 'increase'){
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         }
//     }
//     else {
//         return state;
//     }
// }

// const store = createStore(counterReducer);

const store = configureStore({
    reducer : counterSlice.reducer
})

export default store;
