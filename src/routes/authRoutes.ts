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
                '^/signup': ''
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
                '^/login': ''
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
                '^/logout': ''
            }
        }
    },
    {
        url: '/token',
        auth: false,
        options: {
            target: `${usersServiceUri}`,
            changeOrigin: true,
            pathRewrite: {
                '^/token': ''
            }
        }
    }
]
