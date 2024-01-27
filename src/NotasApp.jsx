import {ModuloFormulario} from "./componentes/ModuloFormulario.jsx";
import {Navbar} from "./componentes/navbar/Navbar.jsx";
import {ListaNotas} from "./componentes/ListaNotas.jsx";

export default function NotasApp (){
    return (
        <><Navbar></Navbar>
            <div className={"container text-center mx-5 my-3"}>
                <div className={"row"}>
                    <div className={"col-4"} >
                        <ModuloFormulario/>
                    </div>
                    <div className={"col-8"}>
                        <ListaNotas/>
                    </div>
                </div>


            </div>

        </>


    )
}