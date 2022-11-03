import {useDispatch, useSelector} from "react-redux";
import {
    decreaseByTwoCounter,
    decreaseCounter,
    increaseByTwoCounter,
    increaseCounter,
    reset
} from "./store/actions/counterActions";

export default function App() {
    const dispatch = useDispatch()
    const state = useSelector(state => state.state)
    return (

        <>
            <button onClick={() => dispatch(increaseCounter())}>Arttır</button>
            <br/>
            <button onClick={() => dispatch(decreaseCounter())}>Azalt</button>
            <br/>
            <button onClick={() => dispatch(increaseByTwoCounter())}>2 arttır</button>
            <br/>
            <button onClick={() => dispatch(decreaseByTwoCounter())}>2 azalt</button>
            <br/>
            <button onClick={() => dispatch(reset())}>Reset</button>
            <br/>
            <h2>{state}</h2>
        </>
    );
}
