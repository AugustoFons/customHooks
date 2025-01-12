import { useCounter } from "../hooks/useCounter"

export const CounterApp = () => {

    const { counter, increment, decrement, reset } = useCounter(0)


    return (
        <>
            <h1>Contador:</h1>
            <h4>{counter}</h4>
            <button className="btn btn-primary" onClick={() => increment(2)}>+</button>
            <button className="btn btn-danger" onClick={() => reset()}>reset</button>
            <button className="btn btn-primary" onClick={() => decrement(2)}>-</button>

        </>
    ) /* 5:50 */
}
