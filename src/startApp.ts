import bodyParser from 'body-parser'
import cors from 'cors'
import express, { NextFunction, Request, Response } from 'express'
import morgan from 'morgan'
import { setupAuth, setupPermission, setupRoutes } from './middleware'
import { authRoutes, userRoutes, bannerRoutes } from './routes'
import { accessEnv } from './utils'
import swaggerUi from 'swagger-ui-express'
import swaggerDoc from './openapi.json'

const routeConfigs = [...authRoutes, ...userRoutes, ...bannerRoutes]
const port = parseInt(accessEnv('PORT', '7070'))

export const startApp = () => {
    const app = express()

    app.use(cors())
    app.use(morgan('dev'))
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))

    setupAuth(app, routeConfigs)
    setupPermission(app, routeConfigs)
    setupRoutes(app, routeConfigs)

    app.use(bodyParser.json())

    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        return res.status(500).send({ msg: err.message })
    })

    app.listen(port, '0.0.0.0', () => {
        console.info(`API Gateway listening on port ${port}`)
    })
}
