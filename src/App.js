/* eslint-disable no-undef */
import Form from './component/form/form'
import Header from './component/header/header'
import './App.css'
import { useState } from 'react'
import TodosList from './component/todosList/todosList'
import React from 'react'
import { Theme } from './component/providers/theme'


const App = () => {

    let data = {
        name: 'Todo List'
    }

    const [input, setInput] = useState('')
    const [todos, setTodos] = useState([])
    const [editTodo, setEditTodo] = useState(null)

    return (
        <div className="container">
            <div className="app-wrapper">
                <Theme.Provider value={data}>
                    <div>
                        <Header />
                    </div>
                </Theme.Provider>
                <div>
                    <Form input={input} setInput={setInput} todos={todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo}/>
                </div>
                <div>
                    <TodosList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
                </div>    
            </div>
        </div>
    )
}

export default App