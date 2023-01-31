import { RouteOption } from '../routes'
import { Express } from 'express'
import { authHandler, restrictToAdmin, Tokens } from '@payhasly-discount/common'

export const setupAuth = (app: Express, routeConfigs: RouteOption[]) => {
    routeConfigs.forEach((route) => {
        if (route.auth)
            app.use(
                route.url,
                authHandler(Tokens.accessToken, 'JWT_ACCESS'),
                restrictToAdmin()
            )
    })
}
