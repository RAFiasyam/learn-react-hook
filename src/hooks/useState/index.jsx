import React, { useState } from 'react'

export const StateExample = () => {
  const [count, setCount] = useState(0)

  const IncreaseCount = () => {
    setCount(() => count + 1);
    // setCount((prev) => prev + 1); // or you can do this too

    console.log(count)
  };

  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={IncreaseCount}>Increase Counter</button>
    </div>
  )
}
