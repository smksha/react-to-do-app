import React, {useState} from 'react'
import TodoForm from './TodoForm'
import {RiCloseCircleLine, RiCheckboxBlankLine, RiCheckboxFill} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'


function Todo({todos, completeTodo, removeTodo, editTodo}) {
    const [edit, setEdit] = useState ({
        id : null,
        value : ""
    })
    
    const submitUpdate = value => {
        editTodo(edit.id, value);
        setEdit({
            id : null,
            value: ""
        });
    }
    if(edit.id){
        return <TodoForm onSubmit={submitUpdate} edit={edit} />
    }
    return todos.map((todo, index)=>{
        if(todo.isComplete){
            return (
                <div className='todo-row complete' key={index}>
                <div key={todo.id} onClick={()=> completeTodo(todo.id)}>
                    <RiCheckboxFill className='checkBox'/>
                    <p className="complete-text">{todo.text}</p>
                </div>
                <div id="complete-date">
                    {new Date().toLocaleString()}
                </div>
            </div>
            )
        }
        else{
            return(
                <div className='todo-row' key={index}>
                <div key={todo.id} onClick={()=> completeTodo(todo.id)}>
                    <RiCheckboxBlankLine className='checkBox'/>
                    {todo.text}
                </div>
                <div className='icons'>
                    <RiCloseCircleLine 
                    onClick={()=> removeTodo(todo.id)}
                    className='delete-icon'/>
                    <TiEdit onClick={()=> setEdit({
                        id : todo.id, 
                        value : todo.text
                    })}
                    className='edit-icon' />
                </div>
            </div>
            )
        }
    })
    
}

export default Todo
