import React from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Main from "./main/Main"



const App = () => {

const dispatch = useDispatch()


    return (
        
        <HashRouter>
            <Routes >
                    <Route path="/" element={<Main />} />
                </Routes>
            </HashRouter>
        
    )
}

export default App