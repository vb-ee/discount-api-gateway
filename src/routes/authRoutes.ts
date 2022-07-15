import { accessEnv } from '../utils/accessEnvs'
import { RouteOption } from './RouteOption'

const usersServiceUri = accessEnv('USERS_SERVICE_URI')

export const authRoutes: RouteOption[] = [
    {
        url: '/signup',
        auth: false,
        forAdmin: false,
        options: {
            target: `${usersServiceUri}`,
            changeOrigin: true,
            pathRewrite: {
                '^/signup': '/signup'
            }
        }
    },
    {
        url: '/login',
        auth: false,
        forAdmin: false,
        options: {
            target: `${usersServiceUri}`,
            changeOrigin: true,
            pathRewrite: {
                '^/login': '/login'
            }
        }
    },
    {
        url: '/logout',
        auth: true,
        forAdmin: false,
        options: {
            target: `${usersServiceUri}`,
            changeOrigin: true,
            pathRewrite: {
                '^/logout': '/logout'
            }
        }
    },
    {
        url: '/token',
        auth: false,
        authRefresh: true,
        forAdmin: false,
        options: {
            target: `${usersServiceUri}`,
            changeOrigin: true,
            pathRewrite: {
                '^/token': '/token'
            }
        }
    }
]
