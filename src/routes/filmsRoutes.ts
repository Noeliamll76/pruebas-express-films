import { Router } from "express";
import {getFilms} from "../controllers/filmsController"

const router = Router()
router.get('/', getFilms)

router.get('/', getFilms)

router.post('/', (req, res) => {
    //logica para crear peliculas
    console.log('create')
    return res.send('CREATE FILMS')
})

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