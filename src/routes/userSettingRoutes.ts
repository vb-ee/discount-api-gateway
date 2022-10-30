import { accessEnv } from '../utils'
import { RouteOption } from './RouteOption'

const profilesServiceUri = accessEnv('PROFILES_SERVICE_URI')

export const userSettingRoutes: RouteOption[] = [
    {
        url: '/user-settings',
        auth: true,
        options: {
            target: `${profilesServiceUri}`,
            changeOrigin: true,
            pathRewrite: {
                '^/user-settings': '/user-settings'
            }
        }
    },
    {
        url: '/user-settings/:userSettingId',
        auth: true,
        options: {
            target: `${profilesServiceUri}`,
            changeOrigin: true,
            pathRewrite: {
                '^/user-settings/:userSettingId':
                    '/user-settings/:userSettingId'
            }
        }
    }
]
