import { SET_QUESTIONS } from "../Action/actionTypes"

const initialState = 
{
    data: [{ title: "", link: "",  details: "" ,topic: ""}]
}

export const reducer = (state=initialState, action) => {
    switch (action.type) {
    
        case SET_QUESTIONS:
            return {
                ...state,
                data: action.data
            }
        default:
            return state
    }
}
