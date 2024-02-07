import axios from "axios";

const BASE_URL = 'http://localhost:8080';
export const traerUsuario = async (username)=>{
    try {
        const token = sessionStorage.getItem('token');
        const axiosConfig = {
            headers: {
                'Authorization': token
            }
        }

        const response = await axios.get(`${BASE_URL}/usuario/id/${username}`, axiosConfig);

        return response.data;
    } catch (e){
        console.error(e);
    }
    return  null;
}