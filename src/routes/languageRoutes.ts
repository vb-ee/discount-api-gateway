import { accessEnv } from '../utils'
import { RouteOption } from './RouteOption'

const profilesServiceUri = accessEnv('PROFILES_SERVICE_URI')

export const languageRoutes: RouteOption[] = [
    {
        url: '/languages',
        auth: true,
        forAdmin: true,
        options: {
            target: `${profilesServiceUri}`,
            changeOrigin: true,
            pathRewrite: {
                '^/languages': '/languages'
            }
        }
    },
    {
        url: '/languages/:languageId',
        auth: true,
        forAdmin: true,
        options: {
            target: `${profilesServiceUri}`,
            changeOrigin: true,
            pathRewrite: {
                '^/languages/:languageId': '/languages/:languageId'
            }
        }
    }
]
