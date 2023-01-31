import { accessEnv } from '@payhasly-discount/common'
import { RouteOption } from './RouteOption'

const profilesServiceUri = accessEnv('PROFILES_SERVICE_URI')

export const languageRoutes: RouteOption[] = [
    {
        url: '/languages',
        auth: false,
        options: {
            target: `${profilesServiceUri}`,
            changeOrigin: true,
            pathRewrite: {
                '^/languages': '/languages'
            }
        }
    },
    {
        url: '/languages/:languageId',
        auth: false,
        options: {
            target: `${profilesServiceUri}`,
            changeOrigin: true,
            pathRewrite: {
                '^/languages/:languageId': '/languages/:languageId'
            }
        }
    }
]
