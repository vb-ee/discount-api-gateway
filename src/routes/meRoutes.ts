import { accessEnv } from '../utils'
import { RouteOption } from './RouteOption'

const usersServiceUri = accessEnv('USERS_SERVICE_URI')

export const meRoutes: RouteOption[] = [
    {
        url: '/me',
        auth: true,
        forAdmin: false,
        options: {
            target: `${usersServiceUri}`,
            changeOrigin: true,
            pathRewrite: {
                '^/me': '/me'
            }
        }
    },
    {
        url: '/me/profile',
        auth: true,
        forAdmin: false,
        options: {
            target: `${usersServiceUri}`,
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
            target: `${usersServiceUri}`,
            changeOrigin: true,
            pathRewrite: {
                '^/me/setting': '/me/setting'
            }
        }
    }
]
