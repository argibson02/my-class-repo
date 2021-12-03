import React, { useState } from 'react';
import CardBody from './CardBody';

// TODO: Add a comment explaining what export default does
// export dedfault exports one and first found thing
export default function Counter() {
  // TODO: Add a comment that explains how the useState hook works
  // always us to keep track of the state of count
  let [count, setCount] = useState(0);

  // TODO: Explain what is happening with this click handler
  // increments thae state count by one
  const handleIncrement = () => {
    setCount((count + 1));
  };

  // TODO: Explain what is happening with this click handler
  // decrments the state coutn by one+

  const handleDecrement = () => {
    setCount((count - 1));
  };

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      {/* TODO: Add a comment that explains what props are getting passed to CardBody */}
      {/* return tun ght etotal count and the inc and dec coutns.*/}
      <CardBody
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
}
