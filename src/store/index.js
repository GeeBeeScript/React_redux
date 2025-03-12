import { createStore } from "redux"

const initialState = { counter: 0, showCounter: true }
const counterReducer = (state = initialState, action) => {
    // Side note: redux does not merge changes to states, it overwrittes them.

    if (action.type === "increment") {
        return {
            // In redux, you should never mutate the state directly, e.g: 
            // state.counter++
            // Instead, you should return a brand new state object. If the formeer
            // is used, the state may get out of sync in large projects, and the 
            // state represented may not be the current, actual state. 
            counter: state.counter + 1,
            showCounter: state.showCounter
        }
    }

    if (action.type === "increase") {
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        }
    }

    if (action.type === "decrement") {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        }
    }

    if (action.type === "toggle") {
        return {
            counter: state.counter,
            showCounter: !state.showCounter
        }
    }

    return state
}

const store = createStore(counterReducer)

export default store