
export const ShowIncrement = ({increment}) => {

    console.log("generado");
  return (
    <button className="btn btn-primary" 
    onClick={() => increment()}>
        Increment
    </button>
  )
}
