import { useState } from "react";
import useTodos from "../Context/TodoContext";

const InputBox = () => {
    const { addTodo } = useTodos();
    const [value, setValue] = useState("");
    const submitHandler = (e) => {
        e.preventDefault()
        addTodo({ item: value })
        setValue("");
    }
    return (
        <div className="w-full h-auto flex flex-col justify-center items-center">

            <div className="text-white mb-9  text-3xl font-semibold">Manage Your Todo</div>

            <form className="w-1/2  flex justify-center text-white" onSubmit={submitHandler}>
                <input
                    type="text"
                    className=" border-2 w-11/12 rounded-l-lg outline-none text-white focus:outline-none text-[20px] p-1 pl-4  dark:bg-gray-600 "
                    onChange={(e) => { setValue(e.target.value) }}
                    value={value}
                    placeholder="Write todo..."
                    required
                />
                <input
                    className=" w-1/5 border border-l-0 rounded-r-lg  bg-green-500 text-[21px] font-semibold text-white p-1 outline-none cursor-pointer hover:bg-green-400 "
                    type="submit"
                    value="ADD"
                />
            </form>
        </div>
    );
}

export default InputBox;
