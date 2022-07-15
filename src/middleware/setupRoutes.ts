import { Express } from 'express'
import { createProxyMiddleware } from 'http-proxy-middleware'
import { RouteOption } from '../routes'

export const setupRoutes = (app: Express, routeConfigs: RouteOption[]) => {
    routeConfigs.forEach((route) => {
        app.use(route.url, createProxyMiddleware(route.options))
    })
}
