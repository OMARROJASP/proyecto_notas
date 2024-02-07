import {useNotas} from "../hooks/useNotas.js";
import {NotasContext} from "./NotasContext.jsx";
import {useUser} from "../hooks/useUser.js";


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
        LimpiarFormularioNotas,
        cargarNotaUsuario
    } = useNotas();

    const {
        cargarUsuario
    } = useUser()

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
                LimpiarFormularioNotas,
                cargarNotaUsuario,
                cargarUsuario
            }
        }>
            {children}
        </NotasContext.Provider>
    )

}