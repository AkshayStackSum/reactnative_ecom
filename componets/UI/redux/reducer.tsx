import { ADD_TO_CART } from "./constants";

const initialValues = []
export const reducer = (state = initialValues, action: any) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [
                ...state,
                action.data
            ]
        default:
            return state
    }
}