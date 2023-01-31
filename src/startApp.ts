import bodyParser from 'body-parser'
import cors from 'cors'
import express, { NextFunction, Request, Response } from 'express'
import morgan from 'morgan'
import { setupAuth, setupRoutes } from './middleware'
import {
    authRoutes,
    userRoutes,
    bannerRoutes,
    categoryRoutes,
    locationRoutes,
    languageRoutes,
    profileRoutes,
    userSettingRoutes,
    sectionRoutes,
    discountRoutes,
    meRoutes,
    meProfileRoutes,
    imageRoutes
} from './routes'
import { accessEnv } from '@payhasly-discount/common'
import swaggerUi from 'swagger-ui-express'
import swaggerDoc from './openapi.json'

const routeConfigs = [
    ...authRoutes,
    ...userRoutes,
    ...bannerRoutes,
    ...categoryRoutes,
    ...locationRoutes,
    ...languageRoutes,
    ...userSettingRoutes,
    ...profileRoutes,
    ...sectionRoutes,
    ...discountRoutes,
    ...meRoutes,
    ...meProfileRoutes,
    ...imageRoutes
]
const port = parseInt(accessEnv('PORT', '8080'))

export const startApp = () => {
    const app = express()

    app.use(cors())
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))
    app.use(morgan('dev'))
    app.use(bodyParser.urlencoded({ extended: true }))

    setupAuth(app, routeConfigs)
    setupRoutes(app, routeConfigs)

    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        return res.status(500).send({ errors: err.message })
    })

    app.listen(port, '0.0.0.0', () => {
        console.info(`API Gateway listening on port ${port}`)
    })
}
