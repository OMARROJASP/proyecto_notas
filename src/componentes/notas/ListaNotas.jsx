import {Nota} from "./Nota.jsx";
import {useContext, useEffect, useState} from "react";
import {NotasContext} from "../../context/NotasContext.jsx";
import {AuthContext} from "../../auth/context/AuthContext.jsx";


export const ListaNotas =()=> {

    const {notas,cargarNotaUsuario,loadingNota} = useContext(NotasContext);
    const {user} = useContext(AuthContext)
    const [nombre, setNombre] = useState(user);

    const cargarTodosDatos =(nombre)=> {

        cargarNotaUsuario(nombre)
        //cargarDatos();
    }

    useEffect(() => {

        cargarTodosDatos(nombre)
       // cargarTodosDatos()
    }, [loadingNota]);




    return (
        <div className="align-items-center">
            <h1 className="text-center">Lista de notas</h1>
            {loadingNota ? (
                <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                    <span>Cargando...</span>
                </div>
            ) : (
                <ul className="list-unstyled">
                    {notas.map((nota) => (
                        <li key={nota.id}>
                            <Nota
                                key={nota.id}
                                id={nota.id}
                                titulo={nota.titulo}
                                descripcion={nota.descripcion}
                                nota={nota}
                            />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}