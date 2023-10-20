import { Request, Response } from "express"


const getFilms = (req:Request, res:Response) => {
// logica de lo que yo quiero hacer/devolver
    return res.send('GET FILMS')
}

const createFilms = (req:Request, res:Response) => {
    //logica para crear peliculas
    console.log('create')
    console.log(req.body.title)
    return res.send('CREATE FILMS')
}

const updateFilmById = (req:Request, res:Response) => {
    //logica para modificar peliculas
// recuperar la id 
// recuperamos la informacion que queremos actualizar
// validamos la informacion
// comprobamos que existe y que es mia
// guardamos la nueva info
// devolvemos la respuesta

    return res.send('UPDATE BY ID FILMS')
}
const deleteFilmById = (req:Request, res:Response) => {
    //logica para borrar peliculas
// 1 recuperar la id por req.params o por body
// 2 comprobar que existe el id y que es mio
// 3 Si existe la borraremos


    return res.send('DELETE BY ID FILMS')
}
const getFilmsById = (req:Request, res:Response) => {
    // logica para recuperar pelicula por id
        return res.send('GET by id FILMS')
    }

export{getFilms, createFilms, updateFilmById, deleteFilmById, getFilmsById}
