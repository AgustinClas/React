import { useState, useEffect } from "react";
import { Message } from "./Message";
export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Agustin',
        email: 'agustin@gmail.com'
    });

    const {username, email} = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target

        setFormState({
            ...formState,
            [ name ]: value
        })
    }

    return (
        <>
            <h1>Formulario Simple</h1>
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
            {
                username === 'strider2' &&
                <Message/>
            }
        </>
    )
}
