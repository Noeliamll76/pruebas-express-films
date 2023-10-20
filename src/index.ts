import express from "express";
import { router as routerFilms } from "./routes/filmsRoutes"
import { AppDataSource } from "./db";


const app = express()
const PORT = process.env.PORT || 4000


// middleware
app.use(express.json())

app.use('/films', routerFilms)

AppDataSource.initialize()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running ${PORT}`)
        })
        console.log('Database connected');
    })
    .catch(error => {
        console.log(error)
    })


