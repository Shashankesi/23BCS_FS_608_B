import React, { useState } from 'react'

const DemoState = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
        <h1>value {count}</h1>
        <button onClick={() => setCount(count + 1)}>onClick</button>
        <button onClick={() => setCount(count - 1)}>onClick</button>
    </div>

    )   
}

export default DemoState