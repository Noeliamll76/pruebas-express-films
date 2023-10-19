import { Router } from "express";
import {createFilms, deleteFilmById, getFilms, updateFilmById} from "../controllers/filmsController"

const router = Router()

router.get('/', getFilms)
router.post('/', createFilms)
router.put('/:id', updateFilmById)
router.delete('/:id', deleteFilmById)

export { router }