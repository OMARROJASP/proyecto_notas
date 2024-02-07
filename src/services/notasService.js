import axios from "axios";

const BASE_URL = 'http://localhost:8080';
export const traerTodasNotas = async ()=>{
    try {
        const response = await axios.get(`${BASE_URL}/notas`);
        return response;
    } catch (e){
        console.error(e);
    }
    return  null;
}

export const guardarNotas= async ({titulo, descripcion, usuario}) => {
    try {
        const token = sessionStorage.getItem('token');
        const axiosConfig = {
            headers: {
                'Authorization': token
            }
        }

        const response = await axios.post(`${BASE_URL}/notas`, {
            titulo,
            descripcion,
            usuario
        });

        // Devolver la respuesta de la solicitud POST
        return response.data;
    } catch (error) {
        console.error(error)

    }
}

export const actualizarNotas = async ({id, titulo, descripcion})=> {

    try {
        return await axios.put(`${BASE_URL}/notas/${id}`,{
            titulo,
            descripcion
        })
    }catch (e){
        console.error(e);
    }
}

export const eliminarNotas = async (id)=> {
    try {
        console.log(id)
         await axios.delete(`${BASE_URL}/notas/${id}`);
    }catch (e){
        console.error(e);
    }
}

export const TraerNotasDelUsuario= async (id) => {

    try{
        const token = sessionStorage.getItem('token');
        const axiosConfig = {
            headers: {
                'Authorization': token
            }
        }
        const response = await axios.get(`${BASE_URL}/notas/usuario/${id}`,axiosConfig)

        return response;
    }catch (e){
        console.error(e);
    }
}