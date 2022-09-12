import {useCounterContext} from "../counter.context.jsx";

function FirstComponent() {
    const {counter, setCounter} = useCounterContext()

    const handleClick = () => {
        setCounter(counter + 1);
    }

    return <>
        <h2>First Component</h2>
        <button onClick={handleClick}>Raise counter amount by context</button>
    </>
}

export default FirstComponent;
