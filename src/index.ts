import express, { Request, Response, NextFunction, Application } from 'express';
import { Server, createServer } from 'http';
import { connectdb } from './db/config';
import { heroRouter } from './routes/routes.hero';
import { userRouter } from './routes/routes.user';
import { channelRouter } from './routes/routes.channel';
import helmet from 'helmet'
import morgan from 'morgan'
import cors from 'cors'

const run = async () => {
    const app: Application = express()
    const server: Server = createServer(app)
    connectdb()

    app.use(express.json())
    app.use(express.urlencoded())
    app.use(helmet())
    app.use('/api/heroes', heroRouter)
    app.use('/api/users', userRouter)
    app.use('/api/channels', channelRouter)
    app.use(morgan('tiny'))
    app.use(cors({ origin: true }))
    app.use((req: Request, res: Response, next: NextFunction) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    })

    app.get('/', (req: Request, res: Response) => {
        res.status(200).send(`Loyiha ishlamoqda ...`)
    })

    const port = process.env.PORT || 4000
    server.listen(port, () => {
        console.log(`Loyihamiz ${port}-portda ishlamoqda ...`)
    })
}

run()