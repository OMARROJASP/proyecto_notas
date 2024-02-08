import {useReducer, useState} from "react";
import {notasReducers} from "../reducers/notasReducers.js";
import {
    actualizarNotas,
    eliminarNotas,
    guardarNotas,
    TraerNotasDelUsuario,
    traerTodasNotas
} from "../services/notasService.js";
import {traerUsuario} from "../services/userService.js";

const notasIniciales=[]

const notaInicialFormulario = {
    id: 0,
    titulo:'' ,
    descripcion:'',
    usuario:null

}

export const useNotas =()=> {

    const [notas, dispatch] = useReducer(notasReducers,notasIniciales);
    const [seleccionarForm,setSeleccionarForm] = useState(notaInicialFormulario)
    const [loadingNota,setLoadingNota] = useState(false);


//let filterN  = [...notas]
    const filtarNotaPalabraClave =async(palabraClave, user)=> {
        // filterN = notas.filter(n =>
        //     n.titulo.toString().toLowerCase().includes(palabraClave.toLowerCase())
        // )
        // console.log(filterN);
        // setFiltrarNotas(...filterN)
        // console.log(filtrarNotas);
        const response = await traerUsuario(user);

        const {id} = response;
        const result = await TraerNotasDelUsuario(id);
        dispatch({
            type:'cargarNotas',
            payload: result.data
        })

        dispatch({
            type:'filtarNotas',
            payload:palabraClave
        })


    }



    const cargarDatos = async ()=> {
        const result = await traerTodasNotas();
        dispatch({
            type:'cargarNotas',
            payload: result.data
        })
    }


    const agregarNota = async (nota) => {

        let response ;

        if(nota.id === 0){
            response = await guardarNotas(nota);
        }else{
            response = await actualizarNotas(nota);
        }

        dispatch({
            type: (nota.id ===0 )?'agregarNota':'actualizarNotas',
            payload:response.data
        })
    }


    const eliminarNota = (id) => {
        eliminarNotas(id)
        dispatch({
            type:'eliminarNotas',
            payload: id
        })
    }

    const cargarNotaUsuario =async (username)=> {



        setLoadingNota(false);

        const response = await traerUsuario(username);



        const {id} = response;
        const result = await TraerNotasDelUsuario(id);
        dispatch({
            type:'cargarNotas',
            payload: result.data
        })

    }

    const seleccionarNotaFormulario =(nota) => {
        setSeleccionarForm({...nota})
    }

    const LimpiarStateNota =()=> {
        setLoadingNota(true);
        dispatch({
            type:'vaciarNotas',
            payload: null
        })
    }

    const LimpiarFormularioNotas =()=> {
        setSeleccionarForm(notaInicialFormulario);
    }

    return{
        notas,
        notaInicialFormulario,
        seleccionarForm,
        loadingNota,
        cargarDatos,
        agregarNota,
        eliminarNota,
        filtarNotaPalabraClave,
        seleccionarNotaFormulario,
        LimpiarFormularioNotas,
        cargarNotaUsuario,
        LimpiarStateNota
    }

}