import { useState } from "react";

const CounterForEvenOdd = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>{counter}</h1>
      <p>
        {counter % 2 === 0 ? (
          <strong>It is Even Number</strong>
        ) : (
          <strong>It is Odd Number</strong>
        )}
      </p>
      <button onClick={() => setCounter(counter + 1)}>
        <strong> Even : Odd</strong>
      </button>

      {counter % 2 === 0 && <p style={{ color: "red" }}>Even !!</p>}
    </>
  );
};
export default CounterForEvenOdd;
