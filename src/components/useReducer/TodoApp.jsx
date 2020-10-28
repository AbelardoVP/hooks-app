import React from 'react'
import './styles.css'
import { useReducer } from 'react'
import { TodoReducer } from './TodoReducer'
import { useForm } from '../../hooks/useForm'
import { useEffect } from 'react'

export const TodoApp = () => {

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }


    const [todos, dispatch] = useReducer(TodoReducer, [], init)

    const [{ description }, handleInputChange, reset] = useForm({ description: '' })
    console.log(description);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


    const handleDelete = (todoId) => {
        console.log(todoId);
        const action = {
            type: 'delete',
            payload: todoId,
        }
        dispatch(action)

    }

    const handleToggle = (todoId) => {
        console.log(todoId);
        dispatch({
            type: 'toggle',
            payload: todoId
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) {
            return
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };
        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch(action);
        reset()
    }

    return (
        <div>
            <h1>Todo App ({todos.length})</h1>
            <hr />
            <div className="row">
                <div className="col-7">

                    <ul className="list-group list-group-flush">
                        {todos.map((todo, i) => (
                            <li key={todo.id} className="list-group-item">

                                <p className={`${todo.done && 'complete'}`} onClick={() => handleToggle(todo.id)}>
                                    {i + 1}. {todo.desc}
                                </p>
                                <button className="btn btn-danger" onClick={() => handleDelete(todo.id)}>Delete</button>
                            </li>
                        ))}
                    </ul>

                </div>
                <div className="col-5">
                    <h4>Add TODO</h4>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <input type="text"
                            name="description"
                            placeholder="Learn..."
                            autoComplete="off"
                            className="form-control"
                            value={description}
                            onChange={handleInputChange}
                        />
                        <button type="submit" className="btn btn-outline-primary mt-1 btn-block">
                            Add
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
