import { useState } from "react";
import useTodos from "../Context/TodoContext";


// eslint-disable-next-line react/prop-types
const Todo = ({ id, item, completed }) => {
    const [value, setValue] = useState(completed)
    const [disabled, setDisabled] = useState(true);
    const [todoValue, setTodoValue] = useState(item)
    const { toggleTodo, updateTodo, deleteTodo } = useTodos();


    const updateHandle = () => {
        setDisabled(prev => !prev)
        const todoNew = {
            id: id,
            item: todoValue,
            completed: completed
        }
        updateTodo(id, todoNew)
    }

    const handleToggle = () => {
        toggleTodo(id);
        setValue(prev => !prev)

    }

    return (
        <div className="flex flex-wrap justify-around text-white text-2xl  w-1/2 rounded-lg border border-white bg-gray-700 p-1 mb-4">
            <input
                type="checkbox"
                name="taskStatus"
                id="task"
                checked={value}
                onChange={handleToggle}
            />
            <input
                onChange={(e) => { setTodoValue(e.target.value) }}
                className={`text-xl flex w-9/12 flex-wrap outline-none focus:outline-none h-full bg-gray-700 + ${(completed && disabled) ? " line-through text-red-400 " : "text-white"}`}
                type="text"
                value={todoValue}
                disabled={disabled}
            />

            <div>
                <input
                    onClick={(disabled) ? (() => setDisabled(prev => !prev)) : (updateHandle)}
                    className=" w-11 cursor-pointer font-bold rounded-lg text-lg pl-2 pr-2 outline-none bg-gray-900 "
                    type="button"
                    value={(disabled ? " ✏️" : "📁")}
                />
                <input
                    onClick={() => deleteTodo(id)}
                    className=" w-11 ml-4 cursor-pointer font-bold rounded-lg text-lg pl-2 pr-2 outline-none bg-gray-900"
                    type="button"
                    value="❌"
                />
            </div>
        </div>
    );
}

export default Todo;
