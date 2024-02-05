import Swal from "sweetalert2";
import {AuthContext} from "../context/AuthContext.jsx";
import {useContext, useState} from "react";


const initialLoginForm = {
    nombre: '',
    contrasena: '',
}


export const LoginPage=()=>{
    const { handlerLogin } = useContext(AuthContext);

    const [loginForm, setLoginForm] = useState(initialLoginForm);
    const { nombre, contrasena } = loginForm;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setLoginForm({
            ...loginForm,
            [ name ]: value,
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (!nombre || !contrasena) {
            Swal.fire('Error de validacion', 'nombre y contraseña requeridos', 'error');
        }

        // aca implementamos el login
        handlerLogin({nombre, contrasena});

        setLoginForm(initialLoginForm);
    }

    return (
        <div className="modal" style={ {display: 'block'} } tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Login Page</h5>
                    </div>
                    <form onSubmit={ onSubmit }>
                        <div className="modal-body">
                            <input
                                className="form-control my-3 w-75"
                                placeholder="nombre"
                                name="nombre"
                                value={nombre}
                                onChange={ onInputChange }
                            />

                            <input
                                className="form-control my-3 w-75"
                                placeholder="contraseña"
                                type="password"
                                name="contrasena"
                                value={contrasena}
                                onChange={onInputChange}
                            />
                        </div>
                        <div className="modal-footer">
                            <button
                                className="btn btn-primary"
                                type="submit">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );

}