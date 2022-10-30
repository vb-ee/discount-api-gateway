import { accessEnv } from '../utils'
import { RouteOption } from './RouteOption'

const profilesServiceUri = accessEnv('PROFILES_SERVICE_URI')

export const locationRoutes: RouteOption[] = [
    {
        url: '/locations',
        auth: true,
        options: {
            target: `${profilesServiceUri}`,
            changeOrigin: true,
            pathRewrite: {
                '^/locations': '/locations'
            }
        }
    },
    {
        url: '/locations/:locationId',
        auth: true,
        options: {
            target: `${profilesServiceUri}`,
            changeOrigin: true,
            pathRewrite: {
                '^/locations/:locationId': '/locations/:locationId'
            }
        }
    }
]
