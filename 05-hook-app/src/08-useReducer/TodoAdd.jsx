import { useForm } from "../hooks/useForm";

export const TodoAdd = ({onNewTodo}) => {

    const {formState, onInputChange, onResetForm, description} = useForm({
        description: '',
    })

    const AddToDo = (event) => {
        event.preventDefault();

        if(description.length <= 2) return 
        
        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description
        }

        onNewTodo(newTodo)
        onResetForm();
    }

    return (
        <form onSubmit={AddToDo}>
            <input type="text" placeholder="what is there to do" className="form-control" 
            name="description"
            value={description}
            onChange={onInputChange}
            />
            <button type="submit" className="btn btn-outline-primary mt-1">
                ADD
            </button>
        </form>
    )
}
