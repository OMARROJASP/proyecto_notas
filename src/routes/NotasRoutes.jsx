import {NotasProvider} from "../context/NotasProvider.jsx";
import {Navbar} from "../componentes/navbar/Navbar.jsx";
import {Navigate, Route, Routes} from "react-router-dom";
import {NotasPage} from "../pages/NotasPage.jsx";
import {ActualizarNotas} from "../componentes/notas/ActualizarNotas.jsx";
import {ListaDocumentosIngles} from "../componentes/ingles/ListaDocumentosIngles.jsx";


export const NotasRoutes =()=> {

    return(
        <>
            <NotasProvider>
                <Navbar />
                <Routes>
                    <Route path={"notas"} element={<NotasPage/>}/>
                    <Route path={"notas/editar/:id"} element={<ActualizarNotas/>} />
                    <Route path={"ingles"} element={<ListaDocumentosIngles/>} />
                    <Route path={"/"} element={<Navigate to={"/notas"}/>}/>
                </Routes>
            </NotasProvider>
        </>
    )
}