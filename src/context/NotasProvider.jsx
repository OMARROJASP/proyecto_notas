import {useNotas} from "../hooks/useNotas.js";
import {NotasContext} from "./NotasContext.jsx";
import {useUser} from "../hooks/useUser.js";


export const NotasProvider =({children}) => {


    const {
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
                loadingNota,
                cargarDatos,
                agregarNota,
                eliminarNota,
                filtarNotaPalabraClave,
                seleccionarNotaFormulario,
                LimpiarFormularioNotas,
                cargarNotaUsuario,
                cargarUsuario,
                LimpiarStateNota
            }
        }>
            {children}
        </NotasContext.Provider>
    )

}