import { accessEnv } from '../utils'
import { RouteOption } from './RouteOption'

const profilesServiceUri = accessEnv('PROFILES_SERVICE_URI')

export const meProfileRoutes: RouteOption[] = [
    {
        url: '/profile',
        auth: true,
        options: {
            target: `${profilesServiceUri}`,
            changeOrigin: true,
            pathRewrite: {
                '^/profile': '/profile'
            }
        }
    },
    {
        url: '/setting',
        auth: true,
        options: {
            target: `${profilesServiceUri}`,
            changeOrigin: true,
            pathRewrite: {
                '^/setting': '/setting'
            }
        }
    }
]
