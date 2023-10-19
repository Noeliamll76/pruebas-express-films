import { Request, Response } from "express"


const getFilms = (req:Request, res:Response) => {
// logica de lo que yo quiero hacer/devolver
    return res.send('GET FILMS')
}
const createFilms = (req:Request, res:Response) => {
    //logica para crear peliculas
    return res.send('CREATE FILMS')
}
const updateFilmById = (req:Request, res:Response) => {
    //logica para modificar peliculas
    return res.send('UPDATE BY ID FILMS')
}
const deleteFilmById = (req:Request, res:Response) => {
    //logica para borrar peliculas
    return res.send('DELETE BY ID FILMS')
}


export{getFilms, createFilms, updateFilmById, deleteFilmById}
