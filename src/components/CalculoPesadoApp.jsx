import React, { useMemo, useState } from 'react'

export const CalculoPesadoApp = () => {

    const [show, setShow] = useState(true)
    const [numList, setNumList] = useState([2,3,4,5,6,7,8,9])

    /* use Memo memoriza el cálculo (no numList), y recalcula solo cuando 
    cambia numList, sin depender del estado de show */
    const getCalculo = (numList) => useMemo(() => {
        console.log('calculando')
        return numList.reduce((a,b) => a*b)
    }, [numList])

    const addNumber = () => {
        setNumList([...numList, numList[numList.length - 1]+1])
    }

    return (
        <>
            <h2>useMemo </h2>
            <h4>El cálculo es: { getCalculo(numList) }</h4>
            {show && <h6>Los números son: {numList}</h6>}

            <button className='btn btn-info' onClick={() => setShow(!show)}>{show ? 'Ocultar Cálculo' : 'Mostrar Cálculo'}</button>
            <button className='btn btn-danger' onClick={() => addNumber()}>Agregar más números</button>
        </>
    )
}
