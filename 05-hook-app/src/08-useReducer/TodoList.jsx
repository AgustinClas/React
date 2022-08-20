import { ToDoItem } from "./ToDoItem"

export const TodoList = ({todos = [], onDeleteTodo, onToggleTodo}) => {
    return (
        <ul className="list-group">
            {
                todos.map((todo) => {
                    return (
                        <ToDoItem 
                            key={ todo.id } 
                            todo={ todo } 
                            onDeleteTodo={ onDeleteTodo }
                            onToggleTodo={ onToggleTodo }    
                        />
                    )
                })
            }
        </ul>
    )
}
