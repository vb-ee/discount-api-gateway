import { accessEnv } from '@payhasly-discount/common'
import { RouteOption } from './RouteOption'

const profilesServiceUri = accessEnv('PROFILES_SERVICE_URI')

export const profileRoutes: RouteOption[] = [
    {
        url: '/profiles',
        auth: true,
        options: {
            target: `${profilesServiceUri}`,
            changeOrigin: true,
            pathRewrite: {
                '^/profiles': '/profiles'
            }
        }
    },
    {
        url: '/profiles/:profileId',
        auth: true,
        options: {
            target: `${profilesServiceUri}`,
            changeOrigin: true,
            pathRewrite: {
                '^/profiles/:profileId': '/profiles/:profileId'
            }
        }
    }
]
