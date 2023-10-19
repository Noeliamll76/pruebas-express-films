import { Router } from "express";

const router = Router()

router.get('/films', (req, res) => {
    //logica de lo que y quiero hacer/devolver
    return res.send('GET FILMS')
})

router.post('/films', (req, res) => {
    //logica para crear peliculas
    console.log('create')
    return res.send('CREATE FILMS')
})

router.put('/films/:id', (req,res)=>{
    //logica para actualizar peliculas
    const filmId=req.params.id
    return res.send('UPDATE FILMS '+filmId)
})

router.delete('/films/:id', (req,res)=>{
    //logica para borrar peliculas
    const filmId=req.params.id
    return res.send('DELETE FILMS '+filmId)
})

export { router }