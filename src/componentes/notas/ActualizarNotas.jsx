import {useContext, useState} from "react";
import {NotasContext} from "../../context/NotasContext.jsx";
import {NavLink} from "react-router-dom";
import {AuthContext} from "../../auth/context/AuthContext.jsx";

export const ActualizarNotas =()=> {
    const {agregarNota,seleccionarForm,notaInicialFormulario,LimpiarFormularioNotas} = useContext(NotasContext)

    const [formularioNota, setFormularioNota] = useState(seleccionarForm);
    const {titulo, descripcion} = formularioNota;
    const {user} = useContext(AuthContext)


    const onChangeValue =({target})=> {
        const {name, value} = target;

        setFormularioNota(
            {
                ...formularioNota,
                [name]:value
            }
        )
    }

    const handleCancelar = ()=> {
        LimpiarFormularioNotas()
        console.log("xd")
    }

    const onSubmit=(event)=> {
        console.log(formularioNota);
        event.preventDefault();
        if(!titulo || !descripcion){
            alert("Llene los campos correspondientes")
            return;


        }
        agregarNota(formularioNota)
        setFormularioNota(notaInicialFormulario)

    }

    return(
        <div className="container d-flex justify-content-center align-items-center h-100 mt-3">
            <form onSubmit={onSubmit} className="border border-success p-4 rounded w-50">
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">
                        Título
                    </label>
                    <input
                        className="form-control"
                        placeholder="Ingrese el título"
                        name="titulo"
                        value={titulo}
                        onChange={onChangeValue}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">
                        Descripción
                    </label>
                    <textarea
                        className="form-control"
                        placeholder="Ingrese descripción"
                        name="descripcion"
                        value={descripcion}
                        onChange={onChangeValue}
                    ></textarea>
                </div>
                <div className="d-flex justify-content-between mt-3">
                    <button type="submit" className="btn btn-warning">
                            Guardar
                    </button>
                    <NavLink type="button" className="btn btn-danger" onClick={handleCancelar}
                    to={'/notas'}
                    >
                        cerrar
                    </NavLink>
                </div>


            </form>
        </div>

    )
}