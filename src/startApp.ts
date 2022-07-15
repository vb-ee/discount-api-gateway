import bodyParser from 'body-parser'
import cors from 'cors'
import express, { NextFunction, Request, Response } from 'express'
import morgan from 'morgan'
import { setupAuth, setupRoutes } from './middleware'
import { authRoutes, usersRoutes } from './routes'
import { accessEnv } from './utils'

const routeConfigs = [...authRoutes, ...usersRoutes]
const port = parseInt(accessEnv('PORT', '7070'))

console.log(routeConfigs)

export const startApp = () => {
    const app = express()

    app.use(cors())
    app.use(morgan('dev'))

    // setupAuth(app, routeConfigs)
    setupRoutes(app, routeConfigs)

    app.use(bodyParser.json())

    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        return res.status(500).send({ msg: err.message })
    })

    app.listen(port, '0.0.0.0', () => {
        console.info(`API Gateway listening on port ${port}`)
    })
}
