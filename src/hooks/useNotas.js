import {useReducer, useState} from "react";
import {notasReducers} from "../reducers/notasReducers.js";
import {actualizarNotas, eliminarNotas, guardarNotas, traerTodasNotas} from "../services/notasService.js";

const notasIniciales=[]

const notaInicialFormulario = {
    id: 0,
    titulo:'' ,
    descripcion:''
}

export const useNotas =()=> {

    const [notas, dispatch] = useReducer(notasReducers,notasIniciales);
    const [seleccionarForm,setSeleccionarForm] = useState(notaInicialFormulario)


//let filterN  = [...notas]
    const filtarNotaPalabraClave =async(palabraClave)=> {
        // filterN = notas.filter(n =>
        //     n.titulo.toString().toLowerCase().includes(palabraClave.toLowerCase())
        // )
        // console.log(filterN);
        // setFiltrarNotas(...filterN)
        // console.log(filtrarNotas);
        const result = await traerTodasNotas();
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

    const seleccionarNotaFormulario =(nota) => {
        setSeleccionarForm({...nota})
    }

    const LimpiarFormularioNotas =()=> {
        setSeleccionarForm(notaInicialFormulario);
    }

    return{
        notas,
        notaInicialFormulario,
        seleccionarForm,
        cargarDatos,
        agregarNota,
        eliminarNota,
        filtarNotaPalabraClave,
        seleccionarNotaFormulario,
        LimpiarFormularioNotas
    }

}