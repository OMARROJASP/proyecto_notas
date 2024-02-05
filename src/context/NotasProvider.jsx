import {useNotas} from "../hooks/useNotas.js";
import {NotasContext} from "./NotasContext.jsx";


export const NotasProvider =({children}) => {


    const {
        notas,
        notaInicialFormulario,
        seleccionarForm,
        cargarDatos,
        agregarNota,
        eliminarNota,
        filtarNotaPalabraClave,
        seleccionarNotaFormulario,
        LimpiarFormularioNotas
    } = useNotas();

    return(
        <NotasContext.Provider value={
            {
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
        }>
            {children}
        </NotasContext.Provider>
    )

}