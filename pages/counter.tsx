import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";
import { increment, decrement } from "../redux/actions/counterActions";
import Layout from "../components/layout";
export default function Counter() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const incrementCounter = useCallback(() => dispatch(increment()), [dispatch]);
  const decrementCounter = useCallback(() => dispatch(decrement()), [dispatch]);

  return (
    <Layout>
      <section>
        <h1>Change the counter</h1>
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={decrementCounter}>Decrement</button>
        <p>Counter: {counter}</p>
      </section>
    </Layout>
  );
}
