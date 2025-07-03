import { useState } from 'react'
import axios from 'axios'
import { RenderTodos } from './RenderTodos';

export function AddTodo(){
    const [todo, setTodo] = useState("");
    const [calldisplayTodos, setCallDisplayTodos] = useState(0);

    async function addTodo(){
        const response= await axios.post("http://localhost:3000/api/v1/todo/tasks",{
            title: todo
        })

        console.log(response.data);
        display();
            
    }

    function display(){
        setCallDisplayTodos(calldisplayTodos+1);
    }
    
    return(
        <div className='flex justify-center h-screen items-center bg-zinc-100'>
            <div className='p-10 w-lg flex flex-col items-center rounded-lg shadow-lg bg-white'>
                <h1 className='text-2xl font-bold '>Todo Application</h1>
                <input 
                className= ' mt-4 border border-gray-400 rounded-lg p-2 w-full' 
                type="text" placeholder='Add a new task' onChange={function(e){
                    const value = e.target.value;
                    setTodo(value);
                }}/>
                <button  className='bg-blue-500 w-full rounded mt-2 text-white p-2 rounded-lg'
                onClick={addTodo}
                >Add Task</button>
                <RenderTodos prop={calldisplayTodos} functionProp={display}/>
            </div>
        </div>
    )
}




//   const [todo, setTodo] = useState("");
//   const [data, setData] = useState(0);
//   const [displayTodos, setDisplayTodos] = useState([]);

  
//   useEffect(function(){
//     console.log("Inside Axios App");
//     axios.get("http://localhost:3000/api/v1/todo/tasks")
//       .then(function(response){
//         setDisplayTodos(response.data.Todos); 
//       })
//   },[data])

//   function settingData(){
//     setData(data+1);
//   }

//   function addTodo(){
//     console.log(todo);
//     axios.post("http://localhost:3000/api/v1/todo/tasks",{
//       title: todo
//     }).then(function(response){
//       settingData();//response.data.msg); //I can actually remove the get route and fetch all the data in the post request itself by fetching the data after the todo has been added
//     })

//   }

//   return (
    
//   )

