import {ModuloFormulario} from "../componentes/ModuloFormulario.jsx";
import {ListaNotas} from "../componentes/notas/ListaNotas.jsx";

export const NotasPage =() => {

    return(

             <>
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