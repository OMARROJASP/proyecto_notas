import {useContext, useState} from "react";
import {NotasContext} from "../context/NotasContext.jsx";

export const ModuloFormulario =()=> {

    const {notaInicialFormulario,agregarNota} = useContext(NotasContext)

    const [formularioNota, setFormularioNota] = useState(notaInicialFormulario)
    const {titulo, descripcion} = formularioNota;

    const onChangeValue =({target})=> {
        const {name, value} = target;
        setFormularioNota(
            {
                ...formularioNota,
                [name]:value
            }
        )
    }

    const onSubmit=(event)=> {
        event.preventDefault();
        if(!titulo || !descripcion){
            alert("Llene los campos correspondientes")
            return;

        }
        agregarNota(formularioNota)
        setFormularioNota(notaInicialFormulario)

    }

    return(
        <form onSubmit={onSubmit}
              className="border border-primary p-4 rounded h-50 d-flex flex-column">
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">Titulo</label>
                <input
                    className="form-control"
                    placeholder={"Ingrese el título"}
                    name={'titulo'}
                    value={titulo}
                    onChange={onChangeValue}

                />

            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">Descripción</label>
                <textarea
                    className="form-control"
                    placeholder="Ingrese descripción"
                    name={'descripcion'}
                    value={descripcion}
                    onChange={onChangeValue}
                ></textarea>
            </div>
            <div className="mt-auto"
                 type={'submit'}
            >
                <button className="btn btn-primary">Guardar</button>
            </div>
        </form>



    )
}