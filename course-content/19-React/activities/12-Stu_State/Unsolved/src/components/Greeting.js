// We have to first import `useState` with React in order to take advantage of the hook
import React, { useState } from 'react';

function Greeting() {
  // TODO: Convert `greeting` to a state variable using the useState hook. Give it a initial value of 'Welcome the following students to class!'
  let greeting = 'Welcome the following students to class!';

  // TODO: Convert `group` to a state variable using the useState hook. Set to an initial value to an array including three students in your class. (ex. ["John", "Grace", "Jared"])
  let group = ['alex', 'henry', 'daniel'];

  const [greeting] = useState(greeting)

  const [group] = useState(0)

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">State activity!</div>
      <div className="card-body">
        {/* TODO: Fix the `p` tag below to instead render the `greeting` variable */}
        <p className="card-text">{greeting}</p>
        <ul>
          {/* TODO: Fix the list below so that each member of your group is accessed from the `group` array */}
          {group.map(student => <li>{setGroup(student)}</li>)}


          <li>{group}</li>
          <li>{group}</li>
          <li>{group}</li>
        </ul>
      </div>
    </div>
  );
}

export default Greeting;
