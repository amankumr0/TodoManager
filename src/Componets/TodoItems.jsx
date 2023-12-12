import useTodos from "../Context/TodoContext";
import Todo from "./Todo";

const TodoItems = () => {

    const { todos } = useTodos();
    return (
        <div className="w-full flex flex-col items-center justify-center mt-4">
            {todos.map(todo => {
                console.log(todo, "Insider messege")
                return <Todo key={todo.id * 2} id={todo.id} item={todo.item} completed={todo.completed}></Todo>
            })
            }
        </div>
    );
}

export default TodoItems;
