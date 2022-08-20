import { useEffect } from "react";
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";
export const FormWithCustomHook = () => {

    const {formState, onInputChange, onResetForm, username, email, password} = useForm({
        username: '',
        email: '',
        password: ''
    })

    //const {username, email, password} = formState

    return (
        <>
            <h1>Form with Custom HooK</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            >
            </input>
            <input
                type="email"
                className="form-control mt-2"
                placeholder="agustin@gmail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            >
            </input>
            <input
                type="password"
                className="form-control mt-2"
                placeholder="123456"
                name="password"
                value={password}
                onChange={onInputChange}
            >
            </input>
            
            <button onClick = {onResetForm} className="btn btn-primary mt-2"> Borrar </button>
            </>
    )
}
