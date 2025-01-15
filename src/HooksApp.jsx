import React from 'react'
import { FormsApp } from './components/FormsApp'
import { FetchApp } from './components/FetchApp'
import { CounterApp } from './components/CounterApp'

import { CalculoPesadoApp } from './components/CalculoPesadoApp'
import { Callback } from './components/Callback'
import { ListaTareasComponent } from './components/ListaTareasComponent'

export const HooksApp = () => {
    return (
        <>
            <CounterApp />
            <hr />
            <FetchApp />
            <hr />
            <FormsApp />
            <hr />
            <CalculoPesadoApp />
            <hr />
            <Callback />
            <hr />
            <ListaTareasComponent />
        </>
    )
}
