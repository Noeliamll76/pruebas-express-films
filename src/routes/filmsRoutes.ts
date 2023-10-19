import { Router } from "express";
import {createFilms, getFilms} from "../controllers/filmsController"

const router = Router()
router.get('/', getFilms)


router.post('/', createFilms)

router.put('/:id', (req,res)=>{
    //logica para actualizar peliculas
    const filmId=req.params.id
    return res.send('UPDATE FILMS '+filmId)
})

router.delete('/:id', (req,res)=>{
    //logica para borrar peliculas
    const filmId=req.params.id
    return res.send('DELETE FILMS '+filmId)
})

export { router }