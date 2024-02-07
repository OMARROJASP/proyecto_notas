import {useContext, useState} from "react";
import {NotasContext} from "../../context/NotasContext.jsx";
import {NavLink} from "react-router-dom";
import {AuthContext} from "../../auth/context/AuthContext.jsx";


export const Navbar =()=> {
    const {user, handlerLogout} = useContext(AuthContext)

    const { filtarNotaPalabraClave,cargarDatos} = useContext(NotasContext);
    const [palabraClave, setPalabraClave] = useState('');
    const [usuario, setUsuario] = useState(user)
    const onChangeValue =({target})=>{
        const {value} = target;
        setPalabraClave(value)
        console.log(user)
        if(value===""){
            cargarDatos()

        }

    }

    const onSubmit =(event)=> {
        event.preventDefault()
        filtarNotaPalabraClave(palabraClave)


    }

    const cerrarSesion=()=> {
        handlerLogout();
    }


    return(
        <nav className="navbar navbar-expand-lg bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="#">
                    Notas de {usuario}
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/ingles">
                                Notas Ingles
                            </NavLink>
                        </li>
                        {/* Agrega más elementos de menú según sea necesario */}
                    </ul>
                </div>
                <div className="d-flex align-items-center">
                    <form className="me-2 d-flex justify-content-end" onSubmit={onSubmit} role="search">
                        <input
                            className="form-control"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            onChange={onChangeValue}
                        />
                        <button className="btn btn-outline-success border border-white" type="submit">
                            Search
                        </button>
                    </form>
                    <span className="text-white">
    ¡Hola, {usuario}!
  </span>
                </div>
                <div>
                    <button
                        className={"btn btn-danger"}
                        onClick={cerrarSesion}
                    >
                        Cerrar sesion
                    </button>
                </div>
            </div>
        </nav>
    )


}