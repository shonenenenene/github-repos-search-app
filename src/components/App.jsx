import React from 'react';
import './app.less'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setCount } from './reducers/reposReducer';

const App = () => {

    const dispatch = useDispatch()
    const count = useSelector(state => state.repos.count)

    function onCountClick() {
        dispatch(setCount(5))
    }

    return (
        <div className='app'>
            <button onClick={() => onCountClick()}>cunt</button>
            <div>{ count  }</div>
        </div>
    )
}

export default App