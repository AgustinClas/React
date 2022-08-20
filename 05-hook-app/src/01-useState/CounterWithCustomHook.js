import { useCounter } from "../hooks/UseCounter"

export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter();

    return (
        <>
            <h1>Counter with Hook: {counter}</h1>
            <br></br>
            <button className='btn btn-primary' onClick={() => decrement(2)}>-1</button>
            <button className='btn btn-primary' onClick={reset}>Reset</button>
            <button className='btn btn-primary' onClick={() => increment(4)}>+1</button>
        </>
    )
}
