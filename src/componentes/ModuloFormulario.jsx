import {useContext, useEffect, useState} from "react";
import {NotasContext} from "../context/NotasContext.jsx";
import {AuthContext} from "../auth/context/AuthContext.jsx";
export const ModuloFormulario =()=> {

    const {notaInicialFormulario,
        agregarNota,
        cargarUsuario,
        cargarNotaUsuario,
        LimpiarStateNota
    } = useContext(NotasContext)
    const {user} = useContext(AuthContext)

    const [formularioNota, setFormularioNota] = useState({
        ...notaInicialFormulario,
        titulo: '',
        descripcion: '',
        usuario:null
    });

    const [cargar, setCargar] = useState(false);
    const { titulo, descripcion } = formularioNota;

    useEffect(() => {
        cargarDatosUsuario(); // Cargar datos del usuario al montar el componente
    }, []); // Sin dependencias, solo se ejecuta una vez al montar el componente


    useEffect(() => {
        cargarDatosUsuario(); // Cargar datos del usuario al montar el componente
    }, [cargar]);
    const cargarDatosUsuario = async () => {
        try {
            const usuarioCargado = await cargarUsuario(user);
            setFormularioNota({
                ...formularioNota,
                usuario: usuarioCargado
            });
        } catch (error) {
            console.error("Error al cargar el usuario:", error);
        }
    };

    const onChangeValue = ({ target }) => {
        const { name, value } = target;
        setFormularioNota({
            ...formularioNota,
            [name]: value
        });
    };

    const onSubmit =  (event) => {
        setCargar(!cargar);
        event.preventDefault();
        if (!titulo || !descripcion) {
            alert("Llene los campos correspondientes");
            return;
        }

        agregarNota(formularioNota);
        setFormularioNota(notaInicialFormulario);
        LimpiarStateNota();
    };

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
            <div className="mt-auto">
                <button className="btn btn-primary" type="submit">Guardar</button>
            </div>

        </form>



    )
}