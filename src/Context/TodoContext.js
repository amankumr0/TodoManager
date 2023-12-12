import { useContext } from "react";
import { createContext } from "react";

export const TodoContext = createContext(
    //{
    // todos: [
    //     {
    //         id: 0,
    //         item: "Todo message",
    //         completed: false
    //     }
    // ],
    // deleteTodo: (id) => { },
    // addTodo: (todo) => { },
    // updateTodo: (id, todo) => { },
    // toggleTodo: (id) => { }
    //}
)

console.log(TodoContext)

export const TodoProvider = TodoContext.Provider;

export default function useTodos() {
    return useContext(TodoContext);
}