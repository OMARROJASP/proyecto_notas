import {useReducer, useState} from "react";
import {notasReducers} from "../reducers/notasReducers.jsx";

const notasIniciales=[
    {
    "id": 1,
    "nombre": "Nota de Ciencia",
    "contrasena": "ciencia123",
    "titulo": "Descubrimiento de Exoplanetas",
    "description": "Esta nota detalla los avances recientes en la búsqueda y descubrimiento de exoplanetas fuera de nuestro sistema solar. Explora los métodos utilizados para identificar estos planetas y su importancia en la búsqueda de vida extraterrestre.",
    },
    {
        "id": 2,
        "nombre": "Nota de Tecnología",
        "contrasena": "tecno456",
        "titulo": "Inteligencia Artificial en la Medicina",
        "description": "La integración de la inteligencia artificial en la medicina está transformando la forma en que se diagnostican enfermedades y se desarrollan tratamientos. Esta nota explora casos de éxito, desafíos éticos y el impacto futuro de la IA en el campo médico.",
    },
    {
        "id": 3,
        "nombre": "Nota de Viaje",
        "contrasena": "viaje789",
        "titulo": "Explorando Machu Picchu",
        "description": "Una crónica detallada de una experiencia de viaje a Machu Picchu, destacando la historia del sitio, las impresionantes vistas, y consejos prácticos para aquellos que planean visitar esta maravilla arqueológica en Perú.",
    },
    {
        "id": 4,
        "nombre": "Nota de Literatura",
        "contrasena": "libros321",
        "titulo": "Análisis de 'Cien años de soledad'",
        "description": "Este análisis literario examina la obra maestra de Gabriel García Márquez, 'Cien años de soledad'. Se exploran temas, personajes y elementos narrativos que contribuyen a la riqueza de esta novela icónica.",
    },
    {
        "id": 5,
        "nombre": "Nota de Salud",
        "contrasena": "salud567",
        "titulo": "Beneficios de la Meditación",
        "description": "Descubre los beneficios para la salud mental y física de la práctica regular de la meditación. Se abordan temas como la reducción del estrés, la mejora de la concentración y los efectos positivos en el bienestar general.",
    }
    ]

const notaInicialFormulario = {
    id: 0,
    nombre: '',
    contrasena:'',
    titulo:'' ,
    description:''
}

export const useNotas =()=> {

    const [notas, dispatch]=useReducer(notasReducers,notasIniciales);
    const [nota,setNota] = useState(notaInicialFormulario);


    const cargarDatos =()=> {
        console.log(notas);
    }

    return{
        notas,
        notaInicialFormulario,
        cargarDatos
    }

}