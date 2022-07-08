import './index.less'
import React from 'react'
// import { render } from 'react-dom'
import ReactDOM from 'react-dom/client';
import App from "./components/App"
import { Provider } from 'react-redux'
import { store } from './components/reducers'

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );

// render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById("root")
// )
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

