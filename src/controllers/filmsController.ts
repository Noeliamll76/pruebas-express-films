import { Request, Response } from "express"


const getFilms = (req:Request, res:Response) => {
// logica de lo que yo quiero hacer/devolver
    return res.send('GET FILMS')
}
const createFilms = (req:Request, res:Response) => {
    //logica para crear peliculas
    return res.send('CREATE FILMS')
}






export{getFilms, createFilms}
