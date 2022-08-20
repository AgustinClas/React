import { useTodo } from "../hooks/useTodo"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"

export const TodoApp = () => {
    
    const {handleDeleteTodo, handleNewTodo, handleToggleTodo, todos, todosCounter, pendingTodosCounter} = useTodo();

    return (
        <>
            <h1>To Do : {todosCounter} <small>Pendientes: {pendingTodosCounter}</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={todos} 
                        onDeleteTodo={ handleDeleteTodo }
                        onToggleTodo={ handleToggleTodo }
                    />
                </div>
                <div className="col-5">
                    <h4>Add To Do</h4>
                    <hr></hr>
                    <TodoAdd onNewTodo={handleNewTodo}/>
                </div>
            </div>
        </>
    )
}
