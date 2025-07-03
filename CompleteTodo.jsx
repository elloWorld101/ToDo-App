import { useEffect } from "react"
import axios from 'axios'

export function CompleteTodo({prop , id}){
    
    useEffect(function(){
        axios.put(`http://localhost:3000/api/v1/todo/tasks/${id}`)
            .then(function(response){
                alert(response.data.msg);
                prop+1;
            })
    },[prop])
    
    
    return(
        <div>
            
        </div>
    )
}