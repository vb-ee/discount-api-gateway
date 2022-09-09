import { accessEnv } from '../utils'
import { RouteOption } from './RouteOption'

const profilesServiceUri = accessEnv('PROFILES_SERVICE_URI')

export const personalInfoRoutes: RouteOption[] = [
    {
        url: '/personal-infos',
        auth: true,
        forAdmin: true,
        options: {
            target: `${profilesServiceUri}`,
            changeOrigin: true,
            pathRewrite: {
                '^/personal-infos': '/personal-infos'
            }
        }
    },
    {
        url: '/personal-infos/:personalInfoId',
        auth: true,
        forAdmin: true,
        options: {
            target: `${profilesServiceUri}`,
            changeOrigin: true,
            pathRewrite: {
                '^/personal-infos/:personalInfoId':
                    '/personal-infos/:personalInfoId'
            }
        }
    }
]
