import {useContext} from "react";
import {NotasContext} from "../../context/NotasContext.jsx";
import {NavLink} from "react-router-dom";

export const Nota =({id,titulo,descripcion,nota})=> {
    const {eliminarNota,seleccionarNotaFormulario} = useContext(NotasContext);

     const eliminarNotaLista = (id)=> {
         eliminarNota(id)
     }


    return(
        <div className="card m-3">
            <div className="card-body">
                <h5 className="card-title text-start">{titulo}</h5>
                <p className={'card-text'}>{descripcion}</p>
                <hr/>
                <div className={"d-flex justify-content-start gap-2"}>
                    <NavLink
                        className={"btn btn-warning text-white"}
                        to={'/notas/editar/'+id}
                        onClick={()=>seleccionarNotaFormulario(nota)}

                    >Actualizar</NavLink>
                    <button
                        className={"btn btn-danger text-white"}
                        onClick={()=>eliminarNotaLista(id)}>
                        Eliminar</button>
                </div>
            </div>

        </div>
    )
}