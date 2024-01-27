export const ModuloFormulario =()=> {

    return(
        <form className="border border-primary p-4 rounded h-50 d-flex flex-column">
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">Titulo</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Ingrese el título" />
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">Descripción</label>
                <textarea className="form-control" id="formGroupExampleInput2" placeholder="Ingrese descripción"></textarea>
            </div>
            <div className="mt-auto">
                <button className="btn btn-primary">Guardar</button>
            </div>
        </form>



    )
}