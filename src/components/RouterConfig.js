
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PATH from "../config"
import Web_Pages from '../pages/index'

const RouterConfig = () => {
    return (

        <Routes>
            <Route path={PATH.HOME} element={Web_Pages.HOME} />

        </Routes>

    )
}

export default RouterConfig
