import { useEffect, useRef, useState } from "react";


export const RefExample = () => {
    const [count, setCount] = useState(0)
    const previousCount = useRef(0)

    useEffect(() => {
        previousCount.current = count;
    }, [count])
    return(
        <div>
            <p>Count : {count}</p>
            <p>Previous : {previousCount.current}</p>
            <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
        </div>
    );
};