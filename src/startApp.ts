import bodyParser from 'body-parser'
import cors from 'cors'
import express, { NextFunction, Request, Response } from 'express'
import morgan from 'morgan'
import { setupRoutes } from './middleware'
import { authRoutes, usersRoutes } from './routes'
import { accessEnv } from './utils/accessEnvs'

const routeConfigs = [...authRoutes, ...usersRoutes]
const port = parseInt(accessEnv('PORT', '7070'))

export const startApp = () => {
    const app = express()

    app.use(cors())
    app.use(morgan('dev'))
    app.use(bodyParser.json())

    setupRoutes(app, routeConfigs)

    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        return res.status(500).send({ msg: err.message })
    })

    app.listen(port, '0.0.0.0', () => {
        console.info(`API Gateway listening on port ${port}`)
    })
}
