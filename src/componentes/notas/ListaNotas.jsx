import {Nota} from "./Nota.jsx";
import {useContext, useEffect, useState} from "react";
import {NotasContext} from "../../context/NotasContext.jsx";
import {AuthContext} from "../../auth/context/AuthContext.jsx";


export const ListaNotas =()=> {

    const {notas,cargarNotaUsuario} = useContext(NotasContext);
    const {user} = useContext(AuthContext)
    const [nombre, setNombre] = useState(user);

    const cargarTodosDatos =(nombre)=> {
        console.log(nombre)
        cargarNotaUsuario(nombre)
        //cargarDatos();
    }

    useEffect(() => {

        cargarTodosDatos(nombre)
       // cargarTodosDatos()
    }, []);




    return(
        <div className={"align-items-center"}>
            <h1 className={"text-center"}>Lista de notas</h1>
            <ul className="list-unstyled">
                {notas.map((nota) => (
                    // eslint-disable-next-line react/jsx-key
                    <li >
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
        </div>
    )
}