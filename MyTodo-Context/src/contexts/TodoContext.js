import { createContext, useContext } from "react";

export const MytodoContext = createContext({

    todos:[  //initial state of todo
        {
            id:1,
            todo:"firsttodo",
            completed:false,
        }
    ],

    addTodo: (todo) =>{},
    updateTodo: (id,todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
}) 

export const useTodo = () => {
    return useContext(MytodoContext);
}

export const TodoProvider = MytodoContext.Provider