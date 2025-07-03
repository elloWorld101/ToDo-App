import { useEffect, useState } from "react"
import axios from 'axios'
import { CompleteTodo } from "./CompleteTodo";
import { DeleteTodo } from "./DeleteTodo";

export function RenderTodos({prop, functionProp}){
    const [displayTodos, setDisplayTodos] = useState([]);
    const [completed, setCompleted] = useState(0); 
    const [deleted, setDeleted] = useState(0); 
    const [id, setId] = useState("");


    useEffect(function(){
        axios.get("http://localhost:3000/api/v1/todo/tasks")
            .then(function(response){
                setDisplayTodos(response.data.Todos);
            })
    },[prop])

    function callCompleted(id){
        setCompleted(completed+1);
        setId(id);
    }

    function callDeleted(id){
        setDeleted(deleted+1);
        setId(id);
    }

    return (
        <div class="w-full mt-4 ">
            {
                displayTodos.map(function(todo){
                    return(
                        <div class="flex border-b pb-2 mt-2 border-gray-400 ">
                            <h2 class="w-full pl-3  ">{todo.title}</h2>
                            <button class="" 
                                onClick={()=>{
                                    callCompleted(todo._id)
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3.5} stroke="currentColor" 
                                class="size-5 text-green-500 mr-1">
                                <path strokeLinecap="bevel" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                            </button>
                            <button onClick={()=>{
                                callDeleted(todo._id);
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                                class="size-6 text-red-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </button>
                            
                        </div>
                    )
                })
            }
            <CompleteTodo id={id} prop={completed}/>
            <DeleteTodo id={id} prop={deleted} functionProp = {functionProp}/>
        </div>
    )
}


// import { useState, useEffect } from 'react'
// import axios from 'axios'
// import { DeleteTodo } from './DeleteTodo';

// export function RenderTodos({todos, setData}){
//     const [deleted, setDeleted] = useState(0);
//     const [id, setId] = useState("");
    
//     function clicked(id){
//         setDeleted(deleted+1);
//         setId(id);
//         console.log(id);
//     }

//     useEffect(function(){
//         console.log("Hello inside useEffect");
//         console.log(`http://localhost:3000/api/v1/todo/tasks/${id}`);
//         axios.delete(`http://localhost:3000/api/v1/todo/tasks/${id}`)
//             .then(function(response){
//                 console.log("Inside then");
//                 console.log(response.data.msg);
//                 setData();
//             })
//     },[deleted])

//     return(
//         <div class="w-full m-3">
//             {
//                 todos.map(function(todo){
//                     return(
//                         <div class="flex bg-yellow-400">
//                             <h2 class="w-full">{todo.title}</h2>
//                             <button>{todo.completed}Completed?</button>
//                             <button onClick={()=>{
//                                 clicked(todo._id);
//                             }} class="bg-red-400">Delete</button>
//                         </div>
//                     )
//                 }) 
//             }
            
//         </div>
//     )
// }


