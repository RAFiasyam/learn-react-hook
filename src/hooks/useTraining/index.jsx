import { useEffect, useState } from "react";


// Level 1, Num 1
export const TrainingExample = () => {
    const [count, setCount] = useState(0)
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (!isRunning) return;

        const interval = setInterval(() => {
            setCount((prevCount) => prevCount + 1)
        }, 3000)

        return () => clearInterval(interval)
    }, [isRunning])

    return (
        <>
            <div>
                <h1>{count}</h1>
                <button onClick={() => setIsRunning((prev) => !prev)}>
                    {isRunning? "Pause" : "Start"}
                </button>
                <button onClick={() => setCount(0)}>Reset</button>
            </div>
        </>
    );
}