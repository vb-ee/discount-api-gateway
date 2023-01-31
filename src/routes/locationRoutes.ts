import { accessEnv } from '@payhasly-discount/common'
import { RouteOption } from './RouteOption'

const profilesServiceUri = accessEnv('PROFILES_SERVICE_URI')

export const locationRoutes: RouteOption[] = [
    {
        url: '/locations',
        auth: false,
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
        auth: false,
        options: {
            target: `${profilesServiceUri}`,
            changeOrigin: true,
            pathRewrite: {
                '^/locations/:locationId': '/locations/:locationId'
            }
        }
    }
]
