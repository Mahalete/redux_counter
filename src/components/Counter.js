import React from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);
  const incrementHundler = () => {
    dispatch({ type: "increment" });
  };
  const decrementHundler = () => {
    dispatch({ type: "decrement" });
  };
  const incrementByFiveHundler = () => {
    dispatch({ type: "increase", amount: 5 });
  };
  const decrementByFiveHundler = () => {
    dispatch({ type: "decrease", amount: 5 });
  };
  const resetHundler = () => {
    dispatch({ type: "reset" });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={decrementByFiveHundler}>Decrease by 5</button>
        <button onClick={incrementHundler}>Add 1</button>
        <button onClick={decrementHundler}>Subtract 1</button>
        <button onClick={resetHundler}>Reset</button>
        <button onClick={incrementByFiveHundler}>Increase By 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
