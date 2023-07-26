'use client';

import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

const ClientComponent = ({ children }) => {
  const { count, setCount } = useContext(CounterContext);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>

      <div>{children}</div>
    </div>
  );
};

export default ClientComponent;
