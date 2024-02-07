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
        console.log(titulo)
        console.log(usuario)

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

export const actualizarNotas = async ({id, titulo, descripcion,usuario})=> {


        try {
            const token = sessionStorage.getItem('token');
            const axiosConfig = {
                headers: {
                    'Authorization': token
                }
            }
        return await axios.put(`${BASE_URL}/notas/${id}`,{
            titulo,
            descripcion,
            usuario
        },axiosConfig)
    }catch (e){
        console.error(e);
    }
}

export const eliminarNotas = async (id)=> {
    try {
        const token = sessionStorage.getItem('token');
        const axiosConfig = {
            headers: {
                'Authorization': token
            }
        }

         await axios.delete(`${BASE_URL}/notas/${id}`,axiosConfig);
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