import { createSlice } from '@reduxjs/toolkit'

const initialCounterState = { counter: 0, showCounter: true }
// createSlice is a build in method from redux toolkit, used to create
// a slice of the global state. createSlice can especially be used when
// we have different unrelated app-wide state, e.g: authentication, counter.
const counterSlice = createSlice({
    name: "counter",
    initialState: initialCounterState,
    // reducers is an object or a map of all the reducers this slice needs
    reducers: {
        // Every method here automatically recieves the latest state as an parameter.
        // Mutating the existing state is allowed in redux toolkit because, behind the
        // scenes in redux toolkit, another package called imgur, will detect code where
        // the state is mutated and clone the existing state, create a new state object,
        // keep all the state which we are not editing, and overwrite the state which we
        // are editing in an immutable way. 
        increment (state) {
            state.counter++
        },
        decrement (state) {
            state.counter--
        },
        increase (state, action) {
            // state.counter = state.counter + action.amount
            state.counter = state.counter + action.payload
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        }
    }
})

export const counterActions = counterSlice.actions

export default counterSlice.reducer