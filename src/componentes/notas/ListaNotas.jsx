import {Nota} from "./Nota.jsx";
import {useContext, useEffect, useState} from "react";
import {NotasContext} from "../../context/NotasContext.jsx";


export const ListaNotas =()=> {

    const {notas, cargarDatos} = useContext(NotasContext);


    const cargarTodosDatos =()=> {
        cargarDatos();
    }

    useEffect(() => {
        cargarTodosDatos()
    }, []);




    return(
        <div className={"align-items-center"}>

            <h1 className={"text-center"}>Lista de notas</h1>
            <ul className="list-unstyled">
                {notas.map(nota => (
                    <li key={nota.id}>
                        <Nota
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