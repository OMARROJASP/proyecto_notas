import {ModuloFormulario} from "./componentes/ModuloFormulario.jsx";
import {Navbar} from "./componentes/navbar/Navbar.jsx";
import {ListaNotas} from "./componentes/notas/ListaNotas.jsx";
import {NotasProvider} from "./context/NotasProvider.jsx";
import {Navigate, Route, Routes} from "react-router-dom";
import {NotasRoutes} from "./routes/NotasRoutes.jsx";
import {AuthContext} from "./auth/context/AuthContext.jsx";
import {useContext} from "react";
import {LoginPage} from "./auth/pages/LoginPage.jsx";

export default function NotasApp (){
    const { login } = useContext(AuthContext);

    return (
        <Routes>
            {
                login.isAuth
                ? (
                    <Route path={"/*"} element={<NotasRoutes/>} />
                    ):
                    <>
                        <Route path={"/login"} element={<LoginPage/>} />
                        <Route path={'/*'} element={<Navigate to={"/login"}/> }/>
                    </>
            }

        </Routes>
    )
}