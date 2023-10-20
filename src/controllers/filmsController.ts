import { Request, Response } from "express"
import { Film } from "../models/Film"


const getFilms = async (req: Request, res: Response) => {
    try {
        const films = await Film.find()
        // logica de lo que yo quiero hacer/devolver
        return res.send(films)
    } catch (error) { return res.send(error) }
}

const createFilms = async (req: Request, res: Response) => {
    //logica para crear peliculas
    try {
        const newFilm = await Film.create(
            {
                title: req.body.title,
                director: req.body.director
            }
        ).save()
        return res.send(newFilm)
    } catch (error) { return res.send(error) }
}

const updateFilmById = (req: Request, res: Response) => {
    //logica para modificar peliculas
    // recuperar la id 
    // recuperamos la informacion que queremos actualizar
    // validamos la informacion
    // comprobamos que existe y que es mia
    // guardamos la nueva info
    // devolvemos la respuesta

    return res.send('UPDATE BY ID FILMS')
}

const deleteFilmById = async (req: Request, res: Response) => {
    try {
        const filmIdToDelete = req.params.id

        const filmDeleted = await Film.delete(
            {
                id: parseInt(filmIdToDelete)
            }
        )
        if (filmDeleted.affected) {
            return res.send("Se ha eliminado correctamente el id " + filmIdToDelete)
        }
        return res.send("No se ha podido eliminar el id " + filmIdToDelete)
            
    } catch (error) {
        return res.send(error)
    }
}


const getFilmsById = (req: Request, res: Response) => {
    // logica para recuperar pelicula por id
    return res.send('GET by id FILMS')
}

export { getFilms, createFilms, updateFilmById, deleteFilmById, getFilmsById }
