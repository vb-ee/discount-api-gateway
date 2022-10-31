import { accessEnv } from '../utils'
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
    },
    {
        url: '/profile-images/*.(png|jpg|jpeg)$/',
        auth: true,
        options: {
            target: `${profilesServiceUri}`,
            changeOrigin: true,
            pathRewrite: {
                '^/profile-images/*.(png|jpg|jpeg)$/':
                    '/profile-images/*.(png|jpg|jpeg)$/'
            }
        }
    }
]
