import { RouteOption } from '../routes'
import { Express } from 'express'
import { restrictToAdmin } from './restrictToAdmin'

export const setupPermission = (app: Express, routeConfigs: RouteOption[]) => {
    routeConfigs.forEach((route) => {
        if (route.forAdmin) app.use(route.url, restrictToAdmin())
    })
}
