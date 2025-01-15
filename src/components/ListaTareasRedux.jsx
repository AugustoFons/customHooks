import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../hooks/useForm'

export const ListaTareasRedux = () => {

    const tareas = useSelector(state => state)
    const dispatch = useDispatch()
    
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
        dispatch(action) // Envío de la acción al store
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

    return (
        <>
            <h1>Lista de tareas con Redux:</h1>
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
                {tareas.map(tarea => {
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
