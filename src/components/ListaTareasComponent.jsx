import React, { useReducer } from 'react'
import { useForm } from '../hooks/useForm'

export const ListaTareasComponent = () => {
    const initialState = [ { id: 1, name: 'Ver reducer', finalizado: false } ]

    // reducer
    const tareaReducer = (state = initialState, action = {}) => {
        
        // Si la acción es ... se devuelvo el state con la nueva tarea
        switch (action.type) {
            case '[TAREAS] Agregar Tarea':
                return [...state, action.payload]

            case '[TAREAS] Finalizar Tarea':
                return state.map(tarea => {
                    if(tarea.id === action.payload) {
                        return {
                            ...tarea,
                            finalizado: !tarea.finalizado
                        }
                    } else return tarea
                })

            case '[TAREAS] Eliminar Tarea':
                return state.filter(tarea => tarea.id !== action.payload)

            case '[TAREAS] Borrar tareas':
                return []
            default:
                break;
        }
        return state
    }

    const addTask = (e) => {
        e.preventDefault()
        if(tarea === '' ) return;
        const nuevaTarea = {
            id: new Date().getTime(),
            name: tarea,
            finalizada: false 
        }
        const action = {
            type: '[TAREAS] Agregar Tarea',
            payload: nuevaTarea
        }
        dispatch(action)
    }

    const endTask = (id) => {
        const action = {
            type: '[TAREAS] Finalizar Tarea',
            payload: id
        }
        dispatch(action)
    }

    const deleteTask = (id) => {
        const action = {
            type: '[TAREAS] Eliminar Tarea',
            payload: id
        }
        dispatch(action)
    }

    const deleteAll = () => {
        const action = {
            type: '[TAREAS] Borrar tareas',
        }
        dispatch(action)
    }

    const { tarea, onInputChange} = useForm({tarea: ''})
    const [state, dispatch] = useReducer(tareaReducer, initialState)

    return (
        <>
            <h1>Lista de tareas con Reducer:</h1>
            <form action="" onSubmit={addTask}>
                <div className='mb-3'>
                    <label htmlFor="tarea" className='form-label'>Agregar Nueva Tarea</label>
                    <input 
                        type="text"
                        className='form-control'
                        id='tarea'
                        name='tarea'
                        onChange={onInputChange}
                        />
                </div>
                <button type='submit' className='btn btn-primary'>Agregar</button>
                <button type='button' className='btn btn-danger' onClick={deleteAll}>Borrar lista</button>
            </form>
            <hr />

            <ul className='list-group'>
                {state.map(tarea => {
                    return( 
                    <li className='list-group-item d-flex justify-content-between align-items-start' 
                        key={tarea.id}>
                        <span>{tarea.name}</span>
                        <input type="checkbox" 
                            value={tarea.finalizada} 
                            onChange={() => endTask(tarea.id)} 
                        />
                        <button 
                            className='btn btn-danger'
                            onClick={() => deleteTask(tarea.id)}
                            >Eliminar</button>
                    </li>)
                }
                )}
            </ul>
        </>
    )
}
