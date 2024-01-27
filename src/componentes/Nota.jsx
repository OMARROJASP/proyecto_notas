export const Nota =({id,titulo,description})=> {

    return(
        <div className="card m-3">
            <div className="card-body">
                <h5 className="card-title text-start">{titulo}</h5>
                <p className="text-break">{description}</p>
                <hr/>
                <div className={"d-flex justify-content-start gap-2"}>
                    <button className={"btn btn-warning text-white"}>Actualizar</button>
                    <button className={"btn btn-danger text-white"}>Eliminar</button>
                </div>
            </div>

        </div>
    )
}