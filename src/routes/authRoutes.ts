import { accessEnv } from '../utils/accessEnvs'
import { RouteOption } from './RouteOption'

const usersServiceUri = accessEnv('USERS_SERVICE_URI')

export const authRoutes: RouteOption[] = [
    {
        url: '/signup',
        auth: false,
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
        options: {
            target: `${usersServiceUri}`,
            changeOrigin: true,
            pathRewrite: {
                '^/token': '/token'
            }
        }
    }
]
