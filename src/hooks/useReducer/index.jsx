import { useReducer, useState } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "Increment":
            return { count: state.count + 1 }
        case "Decrement":
            return { count: state.count - 1 }
        case "Double":
            return { count: state.count * 2 }
    }
}

export const ReducerExample = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 })

    return (
        <div>
            <p>Count : {state.count}</p>
            <button onClick={() => dispatch({ type: "Increment" })}>+</button>
            <button onClick={() => dispatch({ type: "Decrement" })}>-</button>
            <button onClick={() => dispatch({ type: "Double" })}>*</button>
        </div>
    )
};