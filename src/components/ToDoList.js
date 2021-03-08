import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function ToDoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        if(!todo.text){
            return
        }
        const newTodos = [todo, ...todos]
        setTodos(newTodos);
    }
    const editTodo = (id, editedTodo) => {
        if(!editedTodo.text){
            return
        }
        setTodos(prev => prev.map(item => item.id === id ? editedTodo : item));
    }
    const removeTodo = id => {
        const removeTodos = [...todos].filter(todo => todo.id !== id);
        setTodos(removeTodos);
    }
    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if(todo.id === id){
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        })
        updatedTodos.sort((a,b)=> a.isComplete - b.isComplete )
        setTodos(updatedTodos);
    }
    return (
        <div>
            <h1>Add your tasks here !</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo todos={todos} 
            completeTodo={completeTodo}
            removeTodo = {removeTodo}
            editTodo = {editTodo}/>
        </div>
    )
}

export default ToDoList
