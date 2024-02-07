import {traerUsuario} from "../services/userService.js";

export const useUser=()=> {
    const cargarUsuario = async (username)=> {
        const response = await traerUsuario(username);
        return response;
    }


    return{
        cargarUsuario
    }
}