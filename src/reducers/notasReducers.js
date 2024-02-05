export const notasReducers =(state=[],action) => {

    switch (action.type){
        case "agregarNota":
            return [
                ...state,
                {
                ...action.payload}
            ];
        case "actualizarNotas":
            return state.map(u => {
                if(u.id === action.payload.id){
                    return{
                        ...action.payload,
                        password: u.password

                    };
                }
                return u;
            })
        case "eliminarNotas":
            return state.filter(n=> (n.id !== action.payload));
        case "cargarNotas":
            return action.payload;
        case 'filtarNotas':
            return state.filter(nota => {
                if(nota.titulo.toString().toLowerCase().includes(action.payload.toLowerCase())
                    || nota.descripcion.toString().toLowerCase().includes(action.payload.toLowerCase())
                ){
                    return state;
                }
            })
        default:
            return state;
    }
}