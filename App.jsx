import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { RenderTodos } from '../components/RenderTodos'
import { AddTodo } from '../components/AddTodo'


function App() {
    return(
      <div>
        {/* Landing page */}
        <AddTodo/> 

      </div>
    )
}

export default App
