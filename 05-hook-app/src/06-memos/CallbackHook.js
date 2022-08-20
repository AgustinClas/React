import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10)

    const increment = useCallback(
      () => {
        setCounter((value) => value + 1);
      },
      [counter],
    )

    return (
        <>
            <h1>use CallbackHook: {counter}</h1>
            <hr/>

            <ShowIncrement increment={increment}/>
        </>
    )
}
