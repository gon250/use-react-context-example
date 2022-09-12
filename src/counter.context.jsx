import {createContext, useContext, useState} from "react";

export const CounterContext = createContext();

export const CounterProvider = ({children}) => {
    const [counter, setCounter] = useState(0);

    return <CounterContext.Provider value={{counter, setCounter}}>
        {children}
    </CounterContext.Provider>
}

export const useCounterContext = () => {
    const context = useContext(CounterContext);

    if (context === undefined) {
        throw new Error('useCounterContext has to be used within a CounterProvider')
    }

    return context;
}
