import { createContext, useReducer, useEffect} from "react";

export const AuthContext = createContext()

export const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {users: action.payload};
        case "LOGOUT":
            return {user: null}
        default:
            return state;
    }
}

export const AuthContextProvider = ({ children }) => {
    const[state, dispatch] = useReducer(authReducer, {
        user: null
    })
    useEffect(() => {
        
    })
}