/**
 * Created by root on 19/10/18.
 */
const initialState = {
    year: 2018

}


export default function year (state = initialState, action) {
    switch (action.type) {
        case "SET_YEAR":
            return {...state, year
        :
            action.payload
    }
    default:
    return state
}
}
