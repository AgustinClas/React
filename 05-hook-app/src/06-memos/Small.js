import { memo } from "react";


export const Small = memo(({ counter }) => {

    console.log("rendrizado");

    return (
        <small>{counter}</small>
    )
}
)