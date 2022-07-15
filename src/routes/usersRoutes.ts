import { accessEnv } from '../utils'
import { RouteOption } from './RouteOption'

const usersServiceUri = accessEnv('USERS_SERVICE_URI')

export const usersRoutes: RouteOption[] = [
    {
        url: '/users',
        auth: true,
        forAdmin: true,
        options: {
            target: `${usersServiceUri}`,
            changeOrigin: true,
            pathRewrite: {
                '^/users': '/users'
            }
        }
    },
    {
        url: '/users/:userId',
        auth: true,
        forAdmin: true,
        options: {
            target: `${usersServiceUri}`,
            changeOrigin: true,
            pathRewrite: {
                '^/users/:userId': '/users/:userId'
            }
        }
    }
]
