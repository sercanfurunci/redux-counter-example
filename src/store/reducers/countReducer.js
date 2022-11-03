import * as actionTypes from "../actions/actions"


export const counterReducer = (state = 0, action) => {


    switch (action.type) {
        case actionTypes.INCREASE_COUNTER:
            return (state += action.payload)
        case actionTypes.DECREASE_COUNTER:
            return (state -= action.payload)
        case actionTypes.INCREASE_BY_TWO_COUNTER:
            return (state += action.payload)
        case actionTypes.DECREASE_BY_TWO_COUNTER:
            return (state -= action.payload)
        case actionTypes.RESET:
            return state = 0
        default:
            return state;

    }
}
