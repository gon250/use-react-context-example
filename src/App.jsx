import {CounterProvider} from "./counter.context.jsx";
import FirstComponent from "./components/FirstComponent.jsx";
import SecondComponent from "./components/SecondComponent.jsx";

import './App.css'

function App() {
    return (
        <div className="App">
            <h1>How to use React context</h1>
            <div className="card">
                <CounterProvider>
                    <FirstComponent/>
                    <SecondComponent/>
                </CounterProvider>
            </div>
        </div>
    )
}

export default App
