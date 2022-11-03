import {combineReducers} from "redux";
import {counterReducer} from "./countReducer";

const reducers = combineReducers({
    state: counterReducer
})

export default reducers