import {useAuth} from "../hooks/useAuth.js";
import { AuthContext } from "./AuthContext"
export const AuthProvider = ({ children }) => {

    const { login,user, handlerLogin, handlerLogout } = useAuth();

    return (
        <AuthContext.Provider value={
            {
                login,
                user,
                handlerLogin,
                handlerLogout
            }
        }>
            {children}
        </AuthContext.Provider>
    )
}