import React from 'react'
import ReactDOM from 'react-dom/client'
// import { App } from './HelloWordApp'
// import FirstApp from './FirstApp'
import CounterApp from './CounterApp'

import './Styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <App />
        <FirstApp /> */}
        <CounterApp value={2}/>
    </React.StrictMode>
)
