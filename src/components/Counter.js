import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter'

const Counter = () => {
  // useSelector() allows us to get a slice (a tiny part) of the state. This is 
  // because states using redux are usually more complex, and as such, we may
  // require getting only a slice of the entire state. As an argument to 
  // useSelector(), we pass in a function that returns the slice of the 
  // state we want to work with. When you use useSelector(), react-redux
  // automatically sets up a subscription to the redux store for this component. 
  const counter = useSelector(state => state.counter.counter)
  
  const show = useSelector(state => state.counter.showCounter)

  // calling useDispatch() will give you a dispatch function which you can execute
  const dispatch = useDispatch()

  const increaseHandler = () => {
    // dispatch({ type: "increment" })
    dispatch(counterActions.increment())
  }

  const incrementHandler = () => {
    // dispatch({ type: "increase", amount: 5 })
    dispatch(counterActions.increase(5))  //The value in the argument, will be stored in an extra
    // field called 'payload' behind the scenes
  }

  const decreaseHandler = () => {
    // dispatch({ type: "decrement" })
    dispatch(counterActions.decrement())
  }

  const toggleCounterHandler = () => {
    // dispatch({ type: "toggle" })
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { show && <div className={classes.value}>{ counter }</div> }
      <div>
        <button onClick={increaseHandler}>Increment</button>
        <button onClick={incrementHandler}>Increase By 5</button>
        <button onClick={decreaseHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// The 'useSelector' hook is a custom react hook made by the redux team. 
