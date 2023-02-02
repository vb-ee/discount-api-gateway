import { accessEnv } from '@payhasly-discount/common'
import { RouteOption } from './RouteOption'

const profilesServiceUri = accessEnv('PROFILES_SERVICE_URI')

export const meProfileRoutes: RouteOption[] = [
    {
        url: '/profile',
        auth: false,
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
        auth: false,
        options: {
            target: `${profilesServiceUri}`,
            changeOrigin: true,
            pathRewrite: {
                '^/setting': '/setting'
            }
        }
    }
]
