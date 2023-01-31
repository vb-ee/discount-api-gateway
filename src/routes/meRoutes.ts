import { accessEnv } from '@payhasly-discount/common'
import { RouteOption } from './RouteOption'

const usersServiceUri = accessEnv('USERS_SERVICE_URI')

export const meRoutes: RouteOption[] = [
    {
        url: '/me',
        auth: true,
        options: {
            target: `${usersServiceUri}`,
            changeOrigin: true,
            pathRewrite: {
                '^/me': '/me'
            }
        }
    }
]
