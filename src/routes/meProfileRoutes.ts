import { accessEnv } from '../utils'
import { RouteOption } from './RouteOption'

const profilesServiceUri = accessEnv('PROFILES_SERVICE_URI')

export const meProfileRoutes: RouteOption[] = [
    {
        url: '/me/profile',
        auth: true,
        forAdmin: false,
        options: {
            target: `${profilesServiceUri}`,
            changeOrigin: true,
            pathRewrite: {
                '^/me/profile': '/me/profile'
            }
        }
    },
    {
        url: '/me/setting',
        auth: true,
        forAdmin: false,
        options: {
            target: `${profilesServiceUri}`,
            changeOrigin: true,
            pathRewrite: {
                '^/me/setting': '/me/setting'
            }
        }
    }
]
