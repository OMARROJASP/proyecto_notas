import {useNotas} from "../hooks/useNotas.js";
import {NotasContext} from "./NotasContext.jsx";


export const NotasProvider =({children}) => {

    const {
        notas,
        notaInicialFormulario,
        cargarDatos
    } = useNotas();

    return(
        <NotasContext.Provider value={
            { notas,
                notaInicialFormulario,
                cargarDatos
            }
        }>
            {children}
        </NotasContext.Provider>
    )

}