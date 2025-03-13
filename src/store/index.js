// import { createStore } from "redux"
// import { createSlice, configureStore } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'
import authReducer from './auth'


// const initialCounterState = { counter: 0, showCounter: true }
// // createSlice is a build in method from redux toolkit, used to create
// // a slice of the global state. createSlice can especially be used when
// // we have different unrelated app-wide state, e.g: authentication, counter.
// const counterSlice = createSlice({
//     name: "counter",
//     initialState: initialCounterState,
//     // reducers is an object or a map of all the reducers this slice needs
//     reducers: {
//         // Every method here automatically recieves the latest state as an parameter.
//         // Mutating the existing state is allowed in redux toolkit because, behind the
//         // scenes in redux toolkit, another package called imgur, will detect code where
//         // the state is mutated and clone the existing state, create a new state object,
//         // keep all the state which we are not editing, and overwrite the state which we
//         // are editing in an immutable way. 
//         increment (state) {
//             state.counter++
//         },
//         decrement (state) {
//             state.counter--
//         },
//         increase (state, action) {
//             // state.counter = state.counter + action.amount
//             state.counter = state.counter + action.payload
//         },
//         toggleCounter(state) {
//             state.showCounter = !state.showCounter
//         }
//     }
// })

// const initialAuthState = { isAuthenticated: false }

// const authSlice = createSlice({
//     name: "authentication",
//     initialState: initialAuthState,
//     reducers: {
//         logIn (state) {
//             state.isAuthenticated = true
//         },
//         logOut (state) {
//             state.isAuthenticated = false
//         }
//     }
// })

// This "reducer" contains all previously defined "reducers" methods executed
// conditionally. 
// const store = createStore(counterSlice.reducer)
// configureStore method like createStore, creates a store but it makes merging
// multitple reducers into one reducer easier. In configure store, we pass an
// object - and not a reducer function like in createStore. This object is called
// a "configuration object", and is expected by configureStore. This configuration
// object contains an expected reducer property. In the "reducer" key in the 
// configuration object, we can either set a single reducer or an object containing
// multiple reducers. This is what makes us merge reducers using configureStore. 

const store = configureStore({
    // These individual reducers will be merged into one reducer, which is
    // exposed to the store. 
    // reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }
    reducer: { counter: counterReducer, auth: authReducer }

})

// For dispatching actions, createSlice automatically creates unique action 
// identifiers for our different reducers. To access these action identifiers,
// we use counterSlice.action.key names that have been assigned to individual
// reducers methods. These methods we are accessing are called 'action creators',
// and they have a 'type' property with a unique identifier per action created behind
// the scenes.  

// export const counterActions = counterSlice.actions
// export const authActions = authSlice.actions

export default store



// const counterReducer = (state = initialState, action) => {
//     // Side note: redux does not merge changes to states, it overwrittes them.

//     if (action.type === "increment") {
//         return {
//             // In redux, you should never mutate the state directly, e.g: 
//             // state.counter++
//             // Instead, you should return a brand new state object. If the formeer
//             // is used, the state may get out of sync in large projects, and the 
//             // state represented may not be the current, actual state. 
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         }
//     }

//     if (action.type === "increase") {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         }
//     }

//     if (action.type === "decrement") {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         }
//     }

//     if (action.type === "toggle") {
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter
//         }
//     }

//     return state
// }

// const store = createStore(counterReducer)

// export default store