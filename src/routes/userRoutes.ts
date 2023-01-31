import { accessEnv } from '@payhasly-discount/common'
import { RouteOption } from './RouteOption'

const usersServiceUri = accessEnv('USERS_SERVICE_URI')

export const userRoutes: RouteOption[] = [
    {
        url: '/users',
        auth: true,
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
        options: {
            target: `${usersServiceUri}`,
            changeOrigin: true,
            pathRewrite: {
                '^/users/:userId': '/users/:userId'
            }
        }
    }
]
