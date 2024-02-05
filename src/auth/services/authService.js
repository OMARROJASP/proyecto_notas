import axios from "axios";

export const loginUser = async ({nombre, contrasena})=> {
    try{
        return await axios.post('http://localhost:8080/login',{
            nombre,
            contrasena
        })
    }catch (e){
        console.error(e);
    }
}