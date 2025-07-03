import { useEffect } from 'react'
import axios from 'axios'
import { RenderTodos } from './RenderTodos'

export function DeleteTodo({id, prop, functionProp}){
    
    useEffect(function(){
        console.log("hello")
        axios.delete(`http://localhost:3000/api/v1/todo/tasks/${id}`)
        .then(function(response){
            console.log(response.data);
            functionProp();
        })

    },[prop])

    
    
    return(
        <div>

        </div>
    )
}