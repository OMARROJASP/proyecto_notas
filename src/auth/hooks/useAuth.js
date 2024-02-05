import {useNavigate} from "react-router-dom";
import {useReducer, useState} from "react";
import {loginReducer} from "../reducers/loginReducer.js";
import {loginUser} from "../services/authService.js";
import Swal from "sweetalert2";

const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    isAdmin: false,
    user: undefined,
}

export const useAuth = () => {

    const [login, dispatch] = useReducer(loginReducer, initialLogin);
    const navigate = useNavigate();
    const [user, setUser] =useState("")

    const handlerLogin = async ({ nombre, contrasena }) => {

        try {
            const response = await loginUser({ nombre, contrasena });

            console.log(response.data.username)
            const token = response.data.token;
            const claims = JSON.parse(window.atob(token.split(".")[1]));
            console.log(claims);
            const user = { name: claims.sub }
            setUser(response.data.username)
            dispatch({
                type: 'login',
                payload: {user, isAdmin: claims.isAdmin},
            });
            sessionStorage.setItem('login', JSON.stringify({
                isAuth: true,
                isAdmin: claims.isAdmin,
                user,
            }));
            sessionStorage.setItem('token', `Bearer ${token}`);

            navigate('/notas');
        } catch (error) {
            if (error.response?.status == 401) {
                Swal.fire('Error Login', 'nombre o contraseña invalidos', 'error');
            } else if (error.response?.status == 403) {
                Swal.fire('Error Login', 'No tiene acceso al recurso o permisos!', 'error');
            } else {
                throw error;
            }
        }
    }
    const handlerLogout = () => {
        dispatch({
            type: 'logout',
        });
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('login');
        sessionStorage.clear();
    }
    return {
        login,
        user,
        handlerLogin,
        handlerLogout,
    }


}
