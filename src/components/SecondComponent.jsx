import {useCounterContext} from "../counter.context.jsx";

function SecondComponent() {
    const {counter} = useCounterContext()
    return <>
        <h2>Second Component</h2>
        <p>
            Display context counter value: {counter}
        </p>
    </>
}

export default SecondComponent;
