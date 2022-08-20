import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef();

    return (
        <>
            <h1>Focus Screen</h1>
            <hr></hr>

            <input
                ref={ inputRef }
                type="text"
                placeholder="Enter your name"
                className="form-control"
            />

            <button className="btn btn-primary mt-2" onClick={() => {inputRef.current.select();}}>
                Set Focus
            </button>
        </>
    )
}
