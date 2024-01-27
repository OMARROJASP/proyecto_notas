export const notasReducers =(state=[],action) => {

    switch (action.type){
        case "agregarNotas":
            return [
                ...state,{
                ...action.pauload
                }
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
        default:
            return state;
    }
}