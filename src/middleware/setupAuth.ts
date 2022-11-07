import { RouteOption } from '../routes'
import { Express } from 'express'
import { authHandler, Tokens } from './authHandler'

export const setupAuth = (app: Express, routeConfigs: RouteOption[]) => {
    routeConfigs.forEach((route) => {
        if (route.auth) app.use(route.url, authHandler())
        else if (route.authRefresh)
            app.use(route.url, authHandler(Tokens.refreshToken))
    })
}
