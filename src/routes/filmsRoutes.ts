import { Router } from "express";
import {createFilms, deleteFilmById, getFilms, updateFilmById, getFilmsById} from "../controllers/filmsController"

const router = Router()

router.get('/', getFilms)
router.post('/', createFilms)
router.put('/:id', updateFilmById)
router.delete('/:id', deleteFilmById)
router.get('/:id', getFilmsById)


export { router }